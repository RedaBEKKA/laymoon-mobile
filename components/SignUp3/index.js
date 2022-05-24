import React, {useEffect, useState} from 'react';
import {ImageBackground, Dimensions, Keyboard} from 'react-native';
import {Box, HStack, Text, Image, Pressable, Select} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../Shared/Button';
import idTypeData from '../../constants/id-type.json';
import AuthButtonLayout from '../Shared/AuthButtonLayout';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import * as ImagePicker from "expo-image-picker";
import {Formik} from 'formik';
import * as Yup from 'yup';
import {set} from 'react-native-reanimated';

const screen = Dimensions.get('window');

const SignUp3 = ({route, navigation}) => {
  let {userRequest} = route.params;

  const [idType, setIdType] = React.useState('');
  const [headerHeight, setHeaderHeight] = useState(null);
  const [pickedImagePath, setPickedImagePath] = useState('');

  const goToPrev = () => {
    navigation.navigate('SignUp2', {
      name: 'SignUp2',
      userRequest: userRequest,
    });
  };
  
  const goToNextTab = () => {
    let docIdType = 0;
    idType > 0 ? (docIdType = idType) : (docIdType = 17);
    let imageRequest = {
      documentTypeId: docIdType,
      fileContentBase64: pickedImagePath,
    };
    navigation.navigate('SignUp4', {
      name: 'SignUp4',
      userRequest: userRequest,
      imageRequest: imageRequest,
    });
  };

  const chooseImage = async () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      // Use launchImageLibrary to open image gallery
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setPickedImagePath(
          'data:image/png;base64,' + response.assets[0].base64,
        );
      }
    });
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setHeaderHeight(55);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setHeaderHeight(null);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <Box
      style={styles.imageBackGround}>
      <AuthHeader height={headerHeight} title="Créer un" title2="compte 3/4" />
      <HStack direction="row">
        <Box style={styles.formLayout}>
          <Box style={{width: '90%', alignSelf: 'center'}}>
            <Text style={styles.subtitle}>Identité</Text>
            {/* <Input placeholder="Type de pièce d’identité" /> */}
            <Select
              selectedValue={idType}
              accessibilityLabel="Type de pièce d’identité"
              placeholder="Type de pièce d’identité"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <Icon name="chevron-forward" size={28} color="grey" />,
              }}
              mt={1}
              onValueChange={itemValue => {
                console.warn(itemValue);
                setIdType(itemValue);
              }}>
              {idTypeData.map(data => (
                <Select.Item
                  key={Math.random()}
                  label={data.description}
                  value={data.id}
                />
              ))}
            </Select>

            <Text
              style={[styles.headerInfo, {marginLeft: 10, paddingRight: 10}]}>
              Recto
            </Text>
            <Text style={[styles.info, {marginLeft: 10, paddingRight: 10}]}>
              Télécharger*
            </Text>
            <Pressable onPress={chooseImage}>
              <Text style={[styles.info, {marginLeft: 10, paddingRight: 10}]}>
                Prendre une photo*
              </Text>
            </Pressable>
            <Box style={styles.imageContainer}>
              {pickedImagePath !== '' && (
                <Image
                  ml={5}
                  height={10}
                  width={10}
                  source={{uri: pickedImagePath}}
                  style={styles.image}
                  alt="uploads"
                />
              )}
            </Box>
            <Text style={[styles.subtitle, {marginTop: 0}]}>
              Justificatif de domicile
            </Text>
            <Input placeholder="Type de justificatif" />

            <Text style={[styles.info, {marginLeft: 10, paddingRight: 10}]}>
              Télécharger*
            </Text>
            <Text
              style={[
                styles.info,
                {marginLeft: 10, paddingRight: 10, alignContent: 'flex-end'},
              ]}>
              Prendre une photo*
            </Text>

            <Text style={[styles.text]}>
              * Format : PDF/JPG/PNG/TIF/SVG, max 10 Mo
            </Text>
            <Box width="100%" alignSelf="center">
              <AuthButtonLayout
                navigation={navigation}
                title="Précédent"
                page="SignUp4"
                onPress={goToNextTab}
                buttonText="Suivant"
                goToPrev={goToPrev}
              />
            </Box>
          </Box>
        </Box>
      </HStack>
      <Box p={screen.height / 5} width="100%" bg={'white'}></Box>
    </Box>
  );
};

export default SignUp3;
