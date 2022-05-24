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
    marginTop: 20,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
  },

  subtitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 4,
    padding:10,
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

  listText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 5,
  },

  listTextGreen: {
    color: '#69C56D',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 4,
    padding: 5,
  },

  listSubText: {
    color: '#6B6B6B',
    fontSize: 12,
    zIndex: 4,
    padding: 5,
    marginTop:-30
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
    width: '97%',
    height: '99%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  searchBackGround: {
    width: '90%',
    height: '80%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  imageViewPass: {
    height: '60%',
  },

  headerName: {
    width: '50%',
    height: '55%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'flex-start',
  },

  iconBackGround: {
    width: '42%',
    height: '50%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'flex-end',
    alignContent:'flex-end'
  },

  navIconBackGround: {
    width: 35,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
  },

  navIconBackGroundHome: {
    width: 23,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
  },

  imageNavBackGround: {
    width: '98%',
    height: '88%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  card1Background: {
    width: '98%',
    height: '98%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
  },

  card2Background: {
    width: '56%',
    height: '78%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
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

buttonList: {
  height: 180,
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