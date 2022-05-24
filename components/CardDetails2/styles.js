import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
const screen = Dimensions.get('window');

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
    marginTop: 20,
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    flex: 1,
  },

  subtitle: {
    color: 'grey',
    fontSize: 20,
    zIndex: 4
  },

  subtitle: {
    color: 'black',
    fontSize: screen.height / 32,
    fontWeight: 'bold',
    paddingTop: screen.height / 50,
  },

  inputStyle: {
    borderColor: '#D2C2FF',
    color: '#9B96AB',
    borderBottomWidth: 2,
    fontWeight: '500',
    // lineHeight: 2,
    ...Platform.select({
      ios: {
        height: 39,
        paddingLeft: 5,
        fontSize: 16,
        marginVertical: 4,
        paddingBottom: 4,
      },
      android: {
        height: 40,
        // paddingTop: screen.height / 60,
        fontSize: 18,
        paddingBottom: 8,
      },
    }),
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
    width: '100%',
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
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
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
    width: '22%',
    height: '40%',
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

  card3Background: {
    width: '98%',
    height: '80%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  wallet1: {
    width: '56%',
    height: '90%',
    position: 'absolute'
  },

  profilMenu: {
    width: '20%',
    height: '20%',
    position: 'absolute'
  },

  cardDetailsBtn: {
    width: '80%',
    height: '34%',
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
}

});

export default styles;