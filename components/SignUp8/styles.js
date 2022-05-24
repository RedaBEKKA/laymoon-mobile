import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
  },

  titles: {
    color: 'black',
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
    zIndex: 2,
  },

  title: {
    marginTop: 20,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    flex: 1,
  },

  subtitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    zIndex: 4,
    padding:10,
  },

  label: {
    color: '#6B6B6B',
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 20,
    marginTop: 10,
  },

  imageBackGround: {
    backgroundColor:"#26c69c",
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  imageBtnPessonalInfo: {
    width: '50%',
    height: '46%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  signInBtnBackGround: {
    width: '90%',
    height: '82%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  signUpBtnBackGround: {
    width: '66%',
    height: '82%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  signUpBtnBackGround2: {
    width: '86%',
    height: '76%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  imageViewPass: {
    height: '60%',
  },

  imageInner: {
    width: '100%',
    height: '70%',
    zIndex: 3,
    position: 'absolute',
    top: 250,
    alignItems: 'center',
    justifyContent:'center',
  },

  imageLogo: {
    width: 90,
    height: 60,
    zIndex: 5,
    position: 'absolute',
    top: 10,
    alignItems: 'center'
  },

  imageCondition: {
    width: '99%',
    height: '96%',
    zIndex: 3,
    position: 'absolute',
    top: 50,
  },

  imageSelect: {
    width: 10,
    height: 10,
    marginLeft: 10,
    zIndex: 3,
    position: 'absolute',
    top: 400,
    alignItems: 'center'
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
  height: 80,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0.5,
  margin: 10,
  opacity: 1,
},

btnText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 18,
  alignItems: 'center',
  justifyContent:'center',
  marginBottom: 20,
}

});

export default styles;