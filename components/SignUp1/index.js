import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Dimensions,
  Keyboard,
  TextInput,
  Platform,
} from 'react-native';
import {Box, HStack, Text, Image, Pressable, Select} from 'native-base';
import styles from './styles';
import Input from '../Shared/Input';
import AuthHeader from '../Shared/AuthHeader';
import AuthButtonLayout from '../Shared/AuthButtonLayout';
import DateTimePicker from '@react-native-community/datetimepicker';
import {setUser} from '../../actions/user';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as Yup from 'yup';

const screen = Dimensions.get('window');
const SignUp1 = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [isAndroid, setAndroid] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);
  const titleArray = [
    {
      title: 'Monsieur',
      value: 'M',
      id: 1,
    },
    {
      title: 'Madame',
      value: 'MME',
      id: 2,
    },
    // {
    //   title: 'Ma dame',
    //   value: 'MLLE',
    //   id: 3,
    // },
  ];

  const countryArray = [
    {
      description: 'Allemagne',
      countryCode: 'DE',
      id: 'DE',
    },
    {
      description: 'Autriche',
      countryCode: 'AT',
      id: 'AT',
    },
    {
      description: 'Belgique',
      countryCode: 'BE',
      id: 'BE',
    },
    {
      description: 'Bulgarie',
      countryCode: 'BG',
      id: 'BG',
    },
    {
      description: 'Chypre',
      countryCode: 'CY',
      id: 'CY',
    },
    {
      description: 'Croatie',
      countryCode: 'HR',
      id: 'HR',
    },
    {
      description: 'Danemark',
      countryCode: 'DK',
      id: 'DK',
    },
    {
      description: 'Espagne',
      countryCode: 'ES',
      id: 'ES',
    },
    {
      description: 'Estonie',
      countryCode: 'EE',
      id: 'EE',
    },
    {
      description: 'Finlande',
      countryCode: 'FI',
      id: 'FI',
    },
    {
      description: 'La France',
      countryCode: 'FR',
      id: 'FR',
    },
    {
      description: 'Grèce',
      countryCode: 'GR',
      id: 'GR',
    },
    {
      description: 'Hongrie',
      countryCode: 'HU',
      id: 'HU',
    },
    {
      description: 'Irlande',
      countryCode: 'IE',
      id: 'IE',
    },
    {
      description: 'Italie',
      countryCode: 'IT',
      id: 'IT',
    },
    {
      description: 'Lettonie',
      countryCode: 'LV',
      id: 'LV',
    },
    {
      description: 'Lituanie',
      countryCode: 'LT',
      id: 'LT',
    },
    {
      description: 'Luxembourg',
      countryCode: 'LU',
      id: 'LU',
    },
    {
      description: 'Malte',
      countryCode: 'MT',
      id: 'MT',
    },
    {
      description: 'Pologne',
      countryCode: 'PL',
      id: 'PL',
    },
    {
      description: 'Portugal',
      countryCode: 'PT',
      id: 'PT',
    },
    {
      description: 'République tchèque',
      countryCode: 'CZ',
      id: 'CZ',
    },
    {
      description: 'Roumanie',
      countryCode: 'RO',
      id: 'RO',
    },
    {
      description: 'Slovaquie',
      countryCode: 'SK',
      id: 'SK',
    },
    {
      description: 'Slovénie',
      countryCode: 'SI',
      id: 'SI',
    },
  ];
  

  const worldListArray = [
    {
      description: 'Afghanistan',
      countryCode: 'AF',
      id: 'AF',
    },
    {
      description: 'Aland Islands',
      countryCode: 'AX',
      id: 'AX',
    },
    {
      description: 'Albania',
      countryCode: 'AL',
      id: 'AL',
    },
    {
      description: 'Algeria',
      countryCode: 'DZ',
      id: 'DZ',
    },
    {
      description: 'American Samoa',
      countryCode: 'AS',
      id: 'AS',
    },
    {
      description: 'Andorra',
      countryCode: 'AD',
      id: 'AD',
    },
    {
      description: 'Angola',
      countryCode: 'AO',
      id: 'AO',
    },
    {
      description: 'Anguilla',
      countryCode: 'AI',
      id: 'AI',
    },
    {
      description: 'Antarctica',
      countryCode: 'AQ',
      id: 'AQ',
    },
    {
      description: 'Antigua And Barbuda',
      countryCode: 'AG',
      id: 'AG',
    },
    {
      description: 'Argentina',
      countryCode: 'AR',
      id: 'AR',
    },
    {
      description: 'Armenia',
      countryCode: 'AM',
      id: 'AM',
    },
    {
      description: 'Aruba',
      countryCode: 'AW',
      id: 'AW',
    },
    {
      description: 'Australia',
      countryCode: 'AU',
      id: 'AU',
    },
    {
      description: 'Austria',
      countryCode: 'AT',
      id: 'AT',
    },
    {
      description: 'Azerbaijan',
      countryCode: 'AZ',
      id: 'AZ',
    },
    {
      description: 'Bahamas',
      countryCode: 'BS',
      id: 'BS',
    },
    {
      description: 'Bahrain',
      countryCode: 'BH',
      id: 'BH',
    },
    {
      description: 'Bangladesh',
      countryCode: 'BD',
      id: 'BD',
    },
    {
      description: 'Barbados',
      countryCode: 'BB',
      id: 'BB',
    },
    {
      description: 'Belarus',
      countryCode: 'BY',
      id: 'BY',
    },
    {
      description: 'Belgium',
      countryCode: 'BE',
      id: 'BE',
    },
    {
      description: 'Belize',
      countryCode: 'BZ',
      id: 'BZ',
    },
    {
      description: 'Benin',
      countryCode: 'BJ',
      id: 'BJ',
    },
    {
      description: 'Bermuda',
      countryCode: 'BM',
      id: 'BM',
    },
    {
      description: 'Bhutan',
      countryCode: 'BT',
      id: 'BT',
    },
    {
      description: 'Bolivia',
      countryCode: 'BO',
      id: 'BO',
    },
    {
      description: 'Bosnia And Herzegovina',
      countryCode: 'BA',
      id: 'BA',
    },
    {
      description: 'Botswana',
      countryCode: 'BW',
      id: 'BW',
    },
    {
      description: 'Bouvet Island',
      countryCode: 'BV',
      id: 'BV',
    },
    {
      description: 'Brazil',
      countryCode: 'BR',
      id: 'BR',
    },
    {
      description: 'British Indian Ocean Territory',
      countryCode: 'IO',
      id: 'IO',
    },
    {
      description: 'Brunei Darussalam',
      countryCode: 'BN',
      id: 'BN',
    },
    {
      description: 'Bulgaria',
      countryCode: 'BG',
      id: 'BG',
    },
    {
      description: 'Burkina Faso',
      countryCode: 'BF',
      id: 'BF',
    },
    {
      description: 'Burundi',
      countryCode: 'BI',
      id: 'BI',
    },
    {
      description: 'Cambodia',
      countryCode: 'KH',
      id: 'KH',
    },
    {
      description: 'Cameroon',
      countryCode: 'CM',
      id: 'CM',
    },
    {
      description: 'Canada',
      countryCode: 'CA',
      id: 'CA',
    },
    {
      description: 'Cape Verde',
      countryCode: 'CV',
      id: 'CV',
    },
    {
      description: 'Cayman Islands',
      countryCode: 'KY',
      id: 'KY',
    },
    {
      description: 'Central African Republic',
      countryCode: 'CF',
      id: 'CF',
    },
    {
      description: 'Chad',
      countryCode: 'TD',
      id: 'TD',
    },
    {
      description: 'Chile',
      countryCode: 'CL',
      id: 'CL',
    },
    {
      description: 'China',
      countryCode: 'CN',
      id: 'CN',
    },
    {
      description: 'Christmas Island',
      countryCode: 'CX',
      id: 'CX',
    },
    {
      description: 'Cocos (Keeling) Islands',
      countryCode: 'CC',
      id: 'CC',
    },
    {
      description: 'Colombia',
      countryCode: 'CO',
      id: 'CO',
    },
    {
      description: 'Comoros',
      countryCode: 'KM',
      id: 'KM',
    },
    {
      description: 'Congo',
      countryCode: 'CG',
      id: 'CG',
    },
    {
      description: 'Congo, Democratic Republic',
      countryCode: 'CD',
      id: 'CD',
    },
    {
      description: 'Cook Islands',
      countryCode: 'CK',
      id: 'CK',
    },
    {
      description: 'Costa Rica',
      countryCode: 'CR',
      id: 'CR',
    },
    {
      description: 'Cote D\"Ivoire',
      countryCode: 'CI',
      id: 'CI',
    },
    {
      description: 'Croatia',
      countryCode: 'HR',
      id: 'HR',
    },
    {
      description: 'Cuba',
      countryCode: 'CU',
      id: 'CU',
    },
    {
      description: 'Cyprus',
      countryCode: 'CY',
      id: 'CY',
    },
    {
      description: 'Czech Republic',
      countryCode: 'CZ',
      id: 'CZ',
    },
    {
      description: 'Denmark',
      countryCode: 'DK',
      id: 'DK',
    },
    {
      description: 'Djibouti',
      countryCode: 'DJ',
      id: 'DJ',
    },
    {
      description: 'Dominica',
      countryCode: 'DM',
      id: 'DM',
    },
    {
      description: 'Dominican Republic',
      countryCode: 'DO',
      id: 'DO',
    },
    {
      description: 'Ecuador',
      countryCode: 'EC',
      id: 'EC',
    },
    {
      description: 'Egypt',
      countryCode: 'EG',
      id: 'EG',
    },
    {
      description: 'El Salvador',
      countryCode: 'SV',
      id: 'SV',
    },
    {
      description: 'Equatorial Guinea',
      countryCode: 'GQ',
      id: 'GQ',
    },
    {
      description: 'Eritrea',
      countryCode: 'ER',
      id: 'ER',
    },
    {
      description: 'Estonia',
      countryCode: 'EE',
      id: 'EE',
    },
    {
      description: 'Ethiopia',
      countryCode: 'ET',
      id: 'ET',
    },
    {
      description: 'Falkland Islands (Malvinas)',
      countryCode: 'FK',
      id: 'FK',
    },
    {
      description: 'Faroe Islands',
      countryCode: 'FO',
      id: 'FO',
    },
    {
      description: 'Fiji',
      countryCode: 'FJ',
      id: 'FJ',
    },
    {
      description: 'Finland',
      countryCode: 'FI',
      id: 'FI',
    },
    {
      description: 'France',
      countryCode: 'FR',
      id: 'FR',
    },
    {
      description: 'French Guiana',
      countryCode: 'GF',
      id: 'GF',
    },
    {
      description: 'French Polynesia',
      countryCode: 'PF',
      id: 'PF',
    },
    {
      description: 'French Southern Territories',
      countryCode: 'TF',
      id: 'TF',
    },
    {
      description: 'Gabon',
      countryCode: 'GA',
      id: 'GA',
    },
    {
      description: 'Gambia',
      countryCode: 'GM',
      id: 'GM',
    },
    {
      description: 'Georgia',
      countryCode: 'GE',
      id: 'GE',
    },
    {
      description: 'Germany',
      countryCode: 'DE',
      id: 'DE',
    },
    {
      description: 'Ghana',
      countryCode: 'GH',
      id: 'GH',
    },
    {
      description: 'Gibraltar',
      countryCode: 'GI',
      id: 'GI',
    },
    {
      description: 'Greece',
      countryCode: 'GR',
      id: 'GR',
    },
    {
      description: 'Greenland',
      countryCode: 'GL',
      id: 'GL',
    },
    {
      description: 'Grenada',
      countryCode: 'GD',
      id: 'GD',
    },
    {
      description: 'Guadeloupe',
      countryCode: 'GP',
      id: 'GP',
    },
    {
      description: 'Guam',
      countryCode: 'GU',
      id: 'GU',
    },
    {
      description: 'Guatemala',
      countryCode: 'GT',
      id: 'GT',
    },
    {
      description: 'Guernsey',
      countryCode: 'GG',
      id: 'GG',
    },
    {
      description: 'Guinea',
      countryCode: 'GN',
      id: 'GN',
    },
    {
      description: 'Guinea-Bissau',
      countryCode: 'GW',
      id: 'GW',
    },
    {
      description: 'Guyana',
      countryCode: 'GY',
      id: 'GY',
    },
    {
      description: 'Haiti',
      countryCode: 'HT',
      id: 'HT',
    },
    {
      description: 'Heard Island & Mcdonald Islands',
      countryCode: 'HM',
      id: 'HM',
    },
    {
      description: 'Holy See (Vatican City State)',
      countryCode: 'VA',
      id: 'VA',
    },
    {
      description: 'Honduras',
      countryCode: 'HN',
      id: 'HN',
    },
    {
      description: 'Hong Kong',
      countryCode: 'HK',
      id: 'HK',
    },
    {
      description: 'Hungary',
      countryCode: 'HU',
      id: 'HU',
    },
    {
      description: 'Iceland',
      countryCode: 'IS',
      id: 'IS',
    },
    {
      description: 'India',
      countryCode: 'IN',
      id: 'IN',
    },
    {
      description: 'Indonesia',
      countryCode: 'ID',
      id: 'ID',
    },
    {
      description: 'Iran, Islamic Republic Of',
      countryCode: 'IR',
      id: 'IR',
    },
    {
      description: 'Iraq',
      countryCode: 'IQ',
      id: 'IQ',
    },
    {
      description: 'Ireland',
      countryCode: 'IE',
      id: 'IE',
    },
    {
      description: 'Isle Of Man',
      countryCode: 'IM',
      id: 'IM',
    },
    {
      description: 'Israel',
      countryCode: 'IL',
      id: 'IL',
    },
    {
      description: 'Italy',
      countryCode: 'IT',
      id: 'IT',
    },
    {
      description: 'Jamaica',
      countryCode: 'JM',
      id: 'JM',
    },
    {
      description: 'Japan',
      countryCode: 'JP',
      id: 'JP',
    },
    {
      description: 'Jersey',
      countryCode: 'JE',
      id: 'JE',
    },
    {
      description: 'Jordan',
      countryCode: 'JO',
      id: 'JO',
    },
    {
      description: 'Kazakhstan',
      countryCode: 'KZ',
      id: 'KZ',
    },
    {
      description: 'Kenya',
      countryCode: 'KE',
      id: 'KE',
    },
    {
      description: 'Kiribati',
      countryCode: 'KI',
      id: 'KI',
    },
    {
      description: 'Korea',
      countryCode: 'KR',
      id: 'KR',
    },
    {
      description: 'North Korea',
      countryCode: 'KP',
      id: 'KP',
    },
    {
      description: 'Kuwait',
      countryCode: 'KW',
      id: 'KW',
    },
    {
      description: 'Kyrgyzstan',
      countryCode: 'KG',
      id: 'KG',
    },
    {
      description: 'Lao People\"s Democratic Republic',
      countryCode: 'LA',
      id: 'LA',
    },
    {
      description: 'Latvia',
      countryCode: 'LV',
      id: 'LV',
    },
    {
      description: 'Lebanon',
      countryCode: 'LB',
      id: 'LB',
    },
    {
      description: 'Lesotho',
      countryCode: 'LS',
      id: 'LS',
    },
    {
      description: 'Liberia',
      countryCode: 'LR',
      id: 'LR',
    },
    {
      description: 'Libyan Arab Jamahiriya',
      countryCode: 'LY',
      id: 'LY',
    },
    {
      description: 'Liechtenstein',
      countryCode: 'LI',
      id: 'LI',
    },
    {
      description: 'Lithuania',
      countryCode: 'LT',
      id: 'LT',
    },
    {
      description: 'Luxembourg',
      countryCode: 'LU',
      id: 'LU',
    },
    {
      description: 'Macao',
      countryCode: 'MO',
      id: 'MO',
    },
    {
      description: 'Macedonia',
      countryCode: 'MK',
      id: 'MK',
    },
    {
      description: 'Madagascar',
      countryCode: 'MG',
      id: 'MG',
    },
    {
      description: 'Malawi',
      countryCode: 'MW',
      id: 'MW',
    },
    {
      description: 'Malaysia',
      countryCode: 'MY',
      id: 'MY',
    },
    {
      description: 'Maldives',
      countryCode: 'MV',
      id: 'MV',
    },
    {
      description: 'Mali',
      countryCode: 'ML',
      id: 'ML',
    },
    {
      description: 'Malta',
      countryCode: 'MT',
      id: 'MT',
    },
    {
      description: 'Marshall Islands',
      countryCode: 'MH',
      id: 'MH',
    },
    {
      description: 'Martinique',
      countryCode: 'MQ',
      id: 'MQ',
    },
    {
      description: 'Mauritania',
      countryCode: 'MR',
      id: 'MR',
    },
    {
      description: 'Mauritius',
      countryCode: 'MU',
      id: 'MU',
    },
    {
      description: 'Mayotte',
      countryCode: 'YT',
      id: 'YT',
    },
    {
      description: 'Mexico',
      countryCode: 'MX',
      id: 'MX',
    },
    {
      description: 'Micronesia, Federated States Of',
      countryCode: 'FM',
      id: 'FM',
    },
    {
      description: 'Moldova',
      countryCode: 'MD',
      id: 'MD',
    },
    {
      description: 'Monaco',
      countryCode: 'MC',
      id: 'MC',
    },
    {
      description: 'Mongolia',
      countryCode: 'MN',
      id: 'MN',
    },
    {
      description: 'Montenegro',
      countryCode: 'ME',
      id: 'ME',
    },
    {
      description: 'Montserrat',
      countryCode: 'MS',
      id: 'MS',
    },
    {
      description: 'Morocco',
      countryCode: 'MA',
      id: 'MA',
    },
    {
      description: 'Mozambique',
      countryCode: 'MZ',
      id: 'MZ',
    },
    {
      description: 'Myanmar',
      countryCode: 'MM',
      id: 'MM',
    },
    {
      description: 'Namibia',
      countryCode: 'NA',
      id: 'NA',
    },
    {
      description: 'Nauru',
      countryCode: 'NR',
      id: 'NR',
    },
    {
      description: 'Nepal',
      countryCode: 'NP',
      id: 'NP',
    },
    {
      description: 'Netherlands',
      countryCode: 'Nl',
      id: 'Nl',
    },
    {
      description: 'Netherlands Antille',
      countryCode: 'AN',
      id: 'AN',
    },
    {
      description: 'New Caledonia',
      countryCode: 'NC',
      id: 'NC',
    },
    {
      description: 'New Zealand',
      countryCode: 'NZ',
      id: 'NZ',
    },
    {
      description: 'Nicaragua',
      countryCode: 'NI',
      id: 'NI',
    },
    {
      description: 'Niger',
      countryCode: 'NE',
      id: 'NE',
    },
    {
      description: 'Nigeria',
      countryCode: 'NG',
      id: 'NG',
    },
    {
      description: 'Niue',
      countryCode: 'NU',
      id: 'NU',
    },
    {
      description: 'Norfolk Island',
      countryCode: 'NF',
      id: 'NF',
    },
    {
      description: 'Northern Mariana Islands',
      countryCode: 'MP',
      id: 'MP',
    },
    {
      description: 'Norway',
      countryCode: 'NO',
      id: 'NP',
    },
    {
      description: 'Oman',
      countryCode: 'OM',
      id: 'OM',
    },
    {
      description: 'Pakistan',
      countryCode: 'PK',
      id: 'PK',
    },
    {
      description: 'Palau',
      countryCode: 'PW',
      id: 'PW',
    },
    {
      description: 'Palestinian Territory, Occupied',
      countryCode: 'PS',
      id: 'PS',
    },
    {
      description: 'Panama',
      countryCode: 'PA',
      id: 'PA',
    },
    {
      description: 'Papua New Guinea',
      countryCode: 'PG',
      id: 'PG',
    },
    {
      description: 'Paraguay',
      countryCode: 'PY',
      id: 'PY',
    },
    {
      description: 'Peru',
      countryCode: 'PE',
      id: 'PE',
    },
    {
      description: 'Philippines',
      countryCode: 'PH',
      id: 'PH',
    },
    {
      description: 'Pitcairn',
      countryCode: 'PN',
      id: 'PN',
    },
    {
      description: 'Poland',
      countryCode: 'PL',
      id: 'PL',
    },
    {
      description: 'Portugal',
      countryCode: 'PT',
      id: 'PT',
    },
    {
      description: 'Puerto Rico',
      countryCode: 'PR',
      id: 'PR',
    },
    {
      description: 'Qatar',
      countryCode: 'QA',
      id: 'QA',
    },
    {
      description: 'Reunion',
      countryCode: 'RE',
      id: 'RE',
    },
    {
      description: 'Romania',
      countryCode: 'RO',
      id: 'RO',
    },
    {
      description: 'Russian Federation',
      countryCode: 'RU',
      id: 'RU',
    },
    {
      description: 'Rwanda',
      countryCode: 'RW',
      id: 'RW',
    },
    {
      description: 'Saint Barthelemy',
      countryCode: 'BL',
      id: 'BL',
    },
    {
      description: 'Saint Helena',
      countryCode: 'SH',
      id: 'SH',
    },
    {
      description: 'Saint Kitts And Nevis',
      countryCode: 'KN',
      id: 'KN',
    },
    {
      description: 'Saint Lucia',
      countryCode: 'LC',
      id: 'LC',
    },
    {
      description: 'Saint Martin',
      countryCode: 'MF',
      id: 'MF',
    },
    {
      description: 'Saint Pierre And Miquelon',
      countryCode: 'PM',
      id: 'PM',
    },
    {
      description: 'Saint Vincent And Grenadines',
      countryCode: 'VC',
      id: 'VC',
    },
    {
      description: 'Samoa',
      countryCode: 'WS',
      id: 'WS',
    },

    {
      description: 'San Marino',
      countryCode: 'SM',
      id: 'SM',
    },
    {
      description: 'Sao Tome And Principe',
      countryCode: 'ST',
      id: 'ST',
    },
    {
      description: 'Saudi Arabia',
      countryCode: 'SA',
      id: 'SA',
    },
    {
      description: 'Senegal',
      countryCode: 'SN',
      id: 'SN',
    },
    {
      description: 'Serbia',
      countryCode: 'RS',
      id: 'RS',
    },
    {
      description: 'Seychelles',
      countryCode: 'SC',
      id: 'SC',
    },
    {
      description: 'Sierra Leone',
      countryCode: 'SL',
      id: 'SL',
    },
    {
      description: 'Singapore',
      countryCode: 'SG',
      id: 'SG',
    },
    {
      description: 'Slovakia',
      countryCode: 'SK',
      id: 'SK',
    },
    {
      description: 'Slovenia',
      countryCode: 'SI',
      id: 'SI',
    },
    {
      description: 'Solomon Islands',
      countryCode: 'SB',
      id: 'SB',
    },
    {
      description: 'Somalia',
      countryCode: 'SO',
      id: 'SO',
    },
    {
      description: 'South Africa',
      countryCode: 'ZA',
      id: 'ZA',
    },
    {
      description: 'South Georgia And Sandwich Isl.',
      countryCode: 'GS',
      id: 'GS',
    },
    {
      description: 'Spain',
      countryCode: 'ES',
      id: 'ES',
    },
    {
      description: 'Sri Lanka',
      countryCode: 'LK',
      id: 'LK',
    },
    {
      description: 'Sudan',
      countryCode: 'SD',
      id: 'SD',
    },
    {
      description: 'Suriname',
      countryCode: 'SR',
      id: 'SR',
    },
    {
      description: 'Svalbard And Jan Mayen',
      countryCode: 'SJ',
      id: 'SJ',
    },
    {
      description: 'Swaziland',
      countryCode: 'SZ',
      id: 'SZ',
    },
    {
      description: 'Sweden',
      countryCode: 'SE',
      id: 'SE',
    },
    {
      description: 'Switzerland',
      countryCode: 'CH',
      id: 'CH',
    },
    {
      description: 'Syrian Arab Republic',
      countryCode: 'SY',
      id: 'SY',
    },
    {
      description: 'Taiwan',
      countryCode: 'TW',
      id: 'TW',
    },
    {
      description: 'Tajikistan',
      countryCode: 'TJ',
      id: 'TJ',
    },
    {
      description: 'Tanzania',
      countryCode: 'TZ',
      id: 'TZ',
    },
    {
      description: 'Thailand',
      countryCode: 'TH',
      id: 'TH',
    },
    {
      description: 'Timor-Leste',
      countryCode: 'TL',
      id: 'TL',
    },
    {
      description: 'Togo',
      countryCode: 'TG',
      id: 'TG',
    },
    {
      description: 'Tokelau',
      countryCode: 'TK',
      id: 'TK',
    },
    {
      description: 'Tonga',
      countryCode: 'TO',
      id: 'TO',
    },
    {
      description: 'Trinidad And Tobago',
      countryCode: 'TT',
      id: 'TT',
    },
    {
      description: 'Tunisia',
      countryCode: 'TN',
      id: 'TN',
    },
    {
      description: 'Turkey',
      countryCode: 'TR',
      id: 'TR',
    },
    {
      description: 'Turkmenistan',
      countryCode: 'TM',
      id: 'TM',
    },
    {
      description: 'Turks And Caicos Islands',
      countryCode: 'TC',
      id: 'TC',
    },
    {
      description: 'Tuvalu',
      countryCode: 'TV',
      id: 'TV',
    },
    {
      description: 'Uganda',
      countryCode: 'UG',
      id: 'UG',
    },
    {
      description: 'Ukraine',
      countryCode: 'UA',
      id: 'UA',
    },
    {
      description: 'United Arab Emirates',
      countryCode: 'AE',
      id: 'AE',
    },
    {
      description: 'United Kingdom',
      countryCode: 'GB',
      id: 'GB',
    },
    {
      description: 'United States',
      countryCode: 'US',
      id: 'US',
    },
    {
      description: 'United States Outlying Islands',
      countryCode: 'UM',
      id: 'UM',
    },
    {
      description: 'Uruguay',
      countryCode: 'UY',
      id: 'UY',
    },
    {
      description: 'Uzbekistan',
      countryCode: 'UZ',
      id: 'UZ',
    },
    {
      description: 'Vanuatu',
      countryCode: 'VU',
      id: 'VU',
    },
    {
      description: 'Venezuela',
      countryCode: 'VE',
      id: 'VE',
    },
    {
      description: 'Vietnam',
      countryCode: 'VN',
      id: 'VN',
    },
    {
      description: 'Virgin Islands, British',
      countryCode: 'VG',
      id: 'VG',
    },
    {
      description: 'Virgin Islands, U.S.',
      countryCode: 'VI',
      id: 'VI',
    },
    {
      description: 'Wallis And Futuna',
      countryCode: 'WF',
      id: 'WF',
    },
    {
      description: 'Western Sahara',
      countryCode: 'EH',
      id: 'EH',
    },
    {
      description: 'Yemen',
      countryCode: 'YE',
      id: 'YE',
    },
    {
      description: 'Zambia',
      countryCode: 'ZM',
      id: 'ZM',
    },
    {
      description: 'Zimbabwe',
      countryCode: 'ZW',
      id: 'ZW',
    },
  ];

  const showDatepicker = () => {
    setShow(true);
  };

  const goToNextTab = request => {
    let birthdate =new Date()
    if (Platform.OS === 'android'){
      birthdate = moment(date).format('YYYY-MM-DD');
    }
    else{
     birthdate = moment(request.birthday).format('YYYY-MM-DD');
  }
    let data = {
      title: request.title,
      firstname: request.firstname,
      lastname: request.lastname,
      nationality: request.nationality,
      placeOfBirth: request.placeOfBirth,
      birthday: birthdate,
    };

    dispatch(setUser(data));
    navigation.navigate('SignUp2', {
      name: 'SignUp2',
    });
  };

  let userInfo = {
    lastname: '',
    firstname: '',
    nationality: '',
    placeOfBirth: '',
    birthday: new Date(),
    title: '',
  };

  const validationSchema = Yup.object().shape({
    lastname: Yup.string()
      .trim()
      .min(5, 'invalide Nom')
      .required('Nom obligatoire!'),
    firstname: Yup.string()
      .trim()
      .min(5, 'invalide Prénom')
      .required('Prénom obligatoire!'),
    nationality: Yup.string().required('Nationalité obligatoire!'),
    placeOfBirth: Yup.string()
      // .trim()
      // .min(2, 'invalide Lieu de naissance')
      .required('Lieu de naissance obligatoire!'),
    title: Yup.string().trim().required('Civilité obligatoire!'),
    birthday: Yup.string().required('ate de naissance obligatoire!'),
  });

  const goToPrev = () => {
    navigation.navigate('Landing', {
      name: 'Landing',
    });
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setShow(true);
      setAndroid(false);
    } else if (Platform.OS === 'android') {
      setShow(false);
      setAndroid(true);
    }
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
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        Keyboard.dismiss;

        goToNextTab(values);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <Box
          style={styles.imageBackGround}>
          <AuthHeader
            height={headerHeight}
            title="Créer un"
            title2="compte 1/4"
          />
          <HStack direction="row">
            <Box style={styles.formLayout}>
              <Box style={{width: '90%', alignSelf: 'center'}}>
                <Text style={styles.subtitle}>Connexion</Text>
              </Box>
              <HStack
                direction="row"
                style={{width: '90%', alignSelf: 'center'}}>
                <Box px={1} flex={2.5}>
                  <Select
                    height={38}
                    pb={Platform.select({
                      ios: 4,
                      android: 1.5,
                    })}
                    fontSize="16"
                    fontWeight={500}
                    selectedValue={values.title}
                    accessibilityLabel="Civilité"
                    placeholder="Civilité"
                    _selectedItem={{
                      bg: 'gray.200',
                      endIcon: (
                        <Icon name="chevron-forward" size={28} color="grey" />
                      ),
                    }}
                    mt={1}
                    onValueChange={itemValue => {
                      setFieldValue('title', itemValue);
                    }}>
                    {titleArray.map(data => (
                      <Select.Item
                        key={data.id.toString()}
                        label={data.title}
                        value={data.value}
                      />
                    ))}
                  </Select>
                  <Text color="red.600" fontSize={12}>
                    {errors.title}
                  </Text>
                </Box>
                <Box px={1} flex={3}>
                  <Input
                    placeholder="Nom"
                    value={values.lastname}
                    setValue={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    error={errors.lastname}
                  />
                </Box>
                <Box px={1} flex={3}>
                  <Input
                    placeholder="Prénom"
                    value={values.firstname}
                    setValue={handleChange('firstname')}
                    onBlur={handleBlur('firstname')}
                    error={errors.firstname}
                  />
                </Box>
              </HStack>
              <HStack
                direction="row"
                style={[
                  styles.inputStyle,
                  {width: '90%', alignSelf: 'center'},
                ]}>
                {isAndroid && (
                  <Pressable pt={0.8} flex={1} onPress={showDatepicker}>
                    <Icon name="md-calendar" size={20} color="grey" />
                  </Pressable>
                )}
                {isAndroid && (
                  <Pressable flex={10} onPress={showDatepicker}>
                    <TextInput
                      style={{
                        fontSize: 18,
                        color: '#9B96AB',
                        fontWeight: '500',
                        paddingBottom: 2,
                        marginVertical: 1,
                        padding: 0,
                      }}
                      value={date}
                      placeholderTextColor="#9B96AB"
                      setValue={handleChange('birthday')}
                      onBlur={handleBlur('birthday')}
                      placeholder="Date de naissance"
                    />
                  </Pressable>
                )}
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={values.birthday}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShow(Platform.OS === 'ios');
                      if (Platform.OS === 'ios')
                        setFieldValue(
                          'birthday',
                          new Date(event.nativeEvent.timestamp),
                        );
                      else if (Platform.OS === 'android') {
                        setDate(moment(event.nativeEvent.timestamp).format(
                              'YYYY-MM-DD',
                            ))
                        // setFieldValue(
                        //   'birthday',
                        //   moment(event.nativeEvent.timestamp).format(
                        //     'YYYY-MM-DD',
                        //   ),
                        // );
                      }
                    }}
                    style={{width: 90, backgroundColor: 'white'}}
                  />
                )}
                {show && <TextInput placeholder="Date de naissance" />}

                <Text color="red.600">{errors.birthday}</Text>
              </HStack>
              <Box style={{width: '90%', alignSelf: 'center'}}>
                <Box mb={5}></Box>
                <Select
                  height={38}
                  pb={Platform.select({
                    ios: 4,
                    android: 1.5,
                  })}
                  fontSize="16"
                  fontWeight={500}
                  selectedValue={values.nationality}
                  accessibilityLabel="Nationalité"
                  placeholder="Nationalité"
                  _selectedItem={{
                    bg: 'gray.200',
                    endIcon: (
                      <Icon name="chevron-forward" size={28} color="grey" />
                    ),
                  }}
                  mt={1}
                  onValueChange={itemValue => {
                    setFieldValue('nationality', itemValue);
                  }}>
                  {countryArray.map(data => (
                    <Select.Item
                      key={data.countryCode}
                      label={data.description}
                      value={data.countryCode}
                    />
                  ))}
                </Select>
                <Text color="red.600" fontSize={12}>
                  {errors.nationality}
                </Text>

                <Select
                  height={38}
                  pb={Platform.select({
                    ios: 4,
                    android: 1.5,
                  })}
                  fontSize="16"
                  fontWeight={500}
                  selectedValue={values.placeOfBirth}
                  accessibilityLabel="Liste Lieu de Naissance"
                  placeholder="Liste Lieu de Naissance"
                  _selectedItem={{
                    bg: 'gray.200',
                    endIcon: (
                      <Icon name="chevron-forward" size={28} color="grey" />
                    ),
                  }}
                  mt={1}
                  onValueChange={itemValue => {
                    setFieldValue('placeOfBirth', itemValue);
                  }}>
                  {worldListArray.map(data => (
                    <Select.Item
                      key={data.countryCode}
                      label={data.description}
                      value={data.countryCode}
                    />
                  ))}
                </Select>
                <Text color="red.600" fontSize={12}>
                  {errors.placeOfBirth}
                </Text>

                {/* <Input
                  placeholder="Liste Lieu de Naissance"
                  value={values.placeOfBirth}
                  setValue={handleChange('placeOfBirth')}
                  onBlur={handleBlur('placeOfBirth')}
                  error={errors.placeOfBirth}
                /> */}
                <Box>
                  <AuthButtonLayout
                    navigation={navigation}
                    onPress={handleSubmit}
                    // onPress={goToNextTab}
                    title="Précédent"
                    page="SignUp2"
                    buttonText="Suivant"
                    goToPrev={goToPrev}
                  />
                </Box>
              </Box>
            </Box>
          </HStack>
        </Box>
      )}
    </Formik>
  );
};

export default SignUp1;