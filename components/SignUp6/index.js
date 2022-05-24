import React, {useState} from 'react';
import {ImageBackground, Dimensions, FlatList, View} from 'react-native';
import {
  Box,
  HStack,
  Text,
  Image,
  Pressable,
  Select,
  ScrollView,
} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import AuthButtonLayout from '../Shared/AuthButtonLayout';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from '../../constants/constants';
import {setUser} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';
const screen = Dimensions.get('window');
const incomeRangeArray = [
  {
    title: '0-18.999€',
    id: '0-18',
  },
  {
    title: '19.000€-23.999€',
    id: '19-23',
  },
  {
    title: '24.000€-27.999€',
    id: '24-27',
  },
  {
    title: '28.000€-35.999€',
    id: '28-35',
  },
  {
    title: '36.000€-56.999€',
    id: '36-56',
  },
  {
    title: '+ de 57.000€*',
    id: '57-*',
  },
];

const incomeSalaryArray = [
  {
    title: '0-25.000€',
    id: '0-25.000',
  },
  {
    title: '25.001€-50.000€',
    id: '25.001-50.000',
  },
  {
    title: '50.001€-100.000€',
    id: '50.001-100.000',
  },
  {
    title: '100.001€-250.000€',
    id: '100.001-250.000',
  },
  {
    title: '250.001€-500.000€',
    id: '250.001-500.000',
  },
  {
    title: '+ de 500.000€',
    id: '500.000-*',
  },
];

const SignUp6 = ({route, navigation}) => {
  const [incomeRange, setIncomeRange] = useState();
  const [incomeSalary, setIncomeSalary] = useState();
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [listData, setListData] = React.useState([]);
  let [isLoading, setLoading] = useState(false);
  let [listLoading, setlistLoading] = useState(true);

  /// Validations
  const [incomeRangeError, setIncomeRangeError] = useState();
  const [incomeSalaryError, setIncomeSalaryError] = useState();

  const goToPrev = () => {
    navigation.navigate('SignUp5', {
      name: 'SignUp5',
    });
  };

  const onUserCreate = accessToken => {
    setListData([]);
    user.incomeRange = incomeRange;
    user.state = 'FR';
    user.country = 'FR';
    user.birthCountry = 'FR';
    user.nationality = 'FR';
    setLoading(true);
    try {
      fetch(`${Constants.baseUrl}users`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(response => response.json())
        .then(res => {
          if (res.status == 'success') {
            dispatch(setUser(res.data.user));
            goToNextTab(accessToken);
          } else if (res.status == 'error') {
            const validations = [];
            for (
              let i = 0;
              i != Object.keys(res.StatusDescription).length;
              i++
            ) {
              let validationMessages = Object.values(res.StatusDescription)[i];
              if (validationMessages.length > 0) {
                validationMessages.forEach(v => {
                  validations.push({id: i + 1, message: v});
                });
                if (i == Object.keys(res.StatusDescription).length - 1) {
                  setListData(validations);
                }
              }
            }
          } else if (res.status == 'Error') {
            const validations = [];
            validations.push({
              id: 1,
              message: res.StatusDescription.errors[0].message,
            });
            setListData(validations);
          }
        })
        .finally(() => {
          setlistLoading(false);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const tokenUrl = `${Constants.tokenUrl}`;

  const onAccessToken = async () => {
    setIncomeRangeError('');
      setIncomeSalaryError('');
    if (incomeRange && incomeSalary) {
      setListData([]);
      setIncomeRangeError('');
      try {
        const response = await fetch(tokenUrl);
        const json = await response.json();
        accessTok = json.data.AccessToken;
        onUserCreate(json.data.AccessToken);
      } catch (error) {
        console.error('token error', error);
      } finally {
      }
    } else if (!incomeRange && incomeSalary){
      setIncomeRangeError('Tranche de revenu obligatoire!');
    }  else if (incomeRange && !incomeSalary){
      setIncomeSalaryError('Patrimone obligatoire!');
    } else {
      setIncomeRangeError('Tranche de revenu obligatoire!');
      setIncomeSalaryError('Patrimone obligatoire!');
    }
    
  };

  const goToNextTab = token => {
    navigation.navigate('DoubleAuthPage', {
      name: 'DoubleAuthPage',
      token: token,
    });
  };
  return (
    <Box style={styles.imageBackGround}>
      <AuthHeader title="Mieux vous" title2="connaitre" />
      <HStack direction="row">
        <Box style={styles.formLayout}>
          <Box style={{width: '90%', alignSelf: 'center'}}>
            <Text style={styles.subtitle}>
              Afin de vous proposer un service personnalisé
            </Text>
            <Select
              selectedValue={incomeRange}
              accessibilityLabel="Tranche de revenu"
              placeholder="Tranche de revenu"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <Icon name="chevron-forward" size={28} color="grey" />,
              }}
              mt={1}
              onValueChange={itemValue => setIncomeRange(itemValue)}>
              {incomeRangeArray.map(data => (
                <Select.Item
                  key={Math.random()}
                  label={data.title}
                  value={data.id}
                />
              ))}
            </Select>
            {/* <Input
              placeholder="Tranche de revenu"
              value={incomeRange}
              setValue={setIncomeRange}
            /> */}
            <Text color="red.500">{incomeRangeError}</Text>
            <Select
              selectedValue={incomeSalary}
              accessibilityLabel="Patrimoine"
              placeholder="Patrimoine"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <Icon name="chevron-forward" size={28} color="grey" />,
              }}
              mt={1}
              onValueChange={itemValue => setIncomeSalary(itemValue)}>
              {incomeSalaryArray.map(data => (
                <Select.Item
                  key={Math.random()}
                  label={data.title}
                  value={data.id}
                />
              ))}
            </Select>
            <Text color="red.500">{incomeSalaryError}</Text>
            {/* <Input placeholder="Patrimoine" /> */}
            <Box >
              {listLoading ? (
                <Text></Text>
              ) : (
                <FlatList
                  data={listData}
                  renderItem={({item, index}) => {
                    return (
                      <Box>
                        <Text color="#FF2828">{item.message} </Text>
                      </Box>
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              )}
            </Box>
            <Box>
              {isLoading ? (
                <Text>Chargement...</Text>
              ) : (
                <AuthButtonLayout
                  navigation={navigation}
                  onPress={onAccessToken}
                  title="Précédent"
                  page="SignUp7"
                  buttonText="Terminer"
                  goToPrev={goToPrev}
                />
              )}
            </Box>
          </Box>
        </Box>
      </HStack>
      <Box p={screen.height / 5} width="100%" bg={'white'}></Box>
    </Box>
  );
};

export default SignUp6;