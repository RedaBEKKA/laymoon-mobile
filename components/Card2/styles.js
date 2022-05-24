import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
  },

  titles: {
    color: 'black',
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
    zIndex: 2,
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },

  subtitle: {
    color: 'grey',
    fontSize: 14,
    zIndex: 4
  },

  labelActive: {
    color: '#6B6B6B',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 20,
    marginTop: 10,
  },

  label: {
    color: '#9B96AB',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 20,
    marginTop: 10,
  },

  labelHighlight: {
    color: '#F6C143',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 20,
    marginTop: 10,
  },

  imageBackGround: {
    width: '95%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  imagecardBackGround: {
    width: '84%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  imageInner: {
    width: '100%',
    height: '90%',
    zIndex: 2,
    position: 'absolute',
    top: 80,
    alignItems: 'center',
    justifyContent:'center',
  },

  searchBackGround: {
    width: '96%',
    height: '90%',
    resizeMode: 'cover',
    position: 'absolute'
  },

  imageViewPass: {
    height: '60%',
  },

  headerName: {
    width: '55%',
    height: '60%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'flex-start',
  },

  iconBackGround: {
    width: '30%',
    height: '30%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'flex-end',
    alignContent:'flex-end'
  },

  copyImg: {
    width: '42%',
    height: '60%',
    position: 'absolute',
    alignItems: 'center',
  },

  profPic: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    alignItems: 'center',
  },

  card1Background: {
    width: '98%',
    height: '98%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  card2Background: {
    width: '98%',
    height: '88%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  transferLimit: {
    width: '80%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  wallet1: {
    width: '50%',
    height: '100%',
    position: 'absolute'
  },

  profilMenu: {
    width: '20%',
    height: '20%',
    position: 'absolute'
  },

  cardDetailsBtn: {
    width: '88%',
    height: '33%',
    position: 'absolute'
  },

  select: {
    width: '20%',
    height: '36%',
    position: 'absolute'
  },

  monteImg: {
    width: '98%',
    height: '74%',
    position: 'absolute'
  },

  formContainer: {
    position: 'absolute',
    bottom: 300,
    width: '100%',
    zIndex: 2,
  },

  headerWrapper: {
    borderBottomColor: '#D2C2FF',
    borderBottomWidth: 2,
    marginBottom: 20,
},

footerWrapper: {
  borderTopColor: '#D2C2FF',
  borderTopWidth: 1,
  marginTop: 20,
  paddingLeft: 20,
  paddingTop: 10,
  alignItems: 'center',
  justifyContent:'center',
},

header: {
    fontSize: 18,
    alignSelf: 'auto',
    color: '#9B96AB',

},

button: {
  height: '100%',
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0.5,
  opacity: 1,
},

btnText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 18,
  alignItems: 'center',
  justifyContent:'center',
  marginBottom: 20,
},

imageNavBackGround: {
  width: '98%',
  height: '98%',
  resizeMode: 'cover',
  position: 'absolute',
  alignItems: 'center',
  justifyContent:'center',
},

navIconBackGround: {
  width: 46,
  height: 45,
  position: 'absolute',
  alignItems: 'center',
},

navIconBackGroundHome: {
  width: 23,
  height: 30,
  position: 'absolute',
  alignItems: 'center',
},

navIconBackGround: {
  width: 35,
  height: 30,
  position: 'absolute',
  alignItems: 'center',
},

listText: {
  color: 'black',
  fontSize: 12,
  fontWeight: 'bold',
  zIndex: 4,
},

labelSelect: {
  color: 'black',
  fontSize: 10,
  zIndex: 4,
},

imageSelect: {
  width: 10,
  height: 10,
  marginLeft: 10,
  zIndex: 3,
  position: 'absolute',
  alignItems: 'center'
},

signUpBtnBackGround: {
  width: '40%',
  height: '70%',
  resizeMode: 'cover',
  position: 'absolute',
  alignItems: 'center',
  justifyContent:'center',
},

signUpBtnBackGround1: {
  width: '35%',
  height: '65%',
  resizeMode: 'cover',
  position: 'absolute',
  alignItems: 'center',
  justifyContent:'center',
},

});

export default styles;