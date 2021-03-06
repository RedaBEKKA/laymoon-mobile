import React, {useState} from 'react';
import {Dimensions, Platform,FlatList} from 'react-native';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {Box, Text, Modal,ScrollView, HStack, Pressable, Image} from 'native-base';
import {
  setUserWalletDetails,
  authenticateUser,
  setToken,
  setProfile,
  setUser,
} from '../../actions/user';
import {setCard} from '../../actions/cards';
import {useSelector, useDispatch} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Constants from '../../constants/constants';


const screen = Dimensions.get('window');
const Profile = ({route, navigation}) => {
  const {transactions} = useSelector(state => state.walletReducer);
  const dispatch = useDispatch();
  const [responseListData, setResponseListData] = React.useState([]);
  const [loadingErrors, setLoadingErrors] = useState(false);
  const {user, profile, sessionStorage} = useSelector(state => state.userReducer);
  const [modalVisible, setShowModal] = useState(false);
  const [modalVisible2, setShowModal2] = useState(false);
  const setModalVisible = visible => {
    // modalVisible(visible);
    setShowModal(visible);
  };

  const setModalVisible2 = visible => {
    // modalVisible(visible);
    setShowModal2(visible);
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
      includeBase64: false,
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
        const img={
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName || response.assets[0].substr(response.assets[0].uri.lastIndexOf('/')+1)
        }
        upload(mapFileData(img))
      }
    });
  };

  function mapFileData(image) {
          var fd = new FormData();
          fd.append('userId',sessionStorage.userId);
          fd.append('content', image);
          return fd
  }


  const upload = (data) => {
    setResponseListData([]);
    setLoadingErrors(true);
    try {
      fetch(`${Constants.baseUrl}users/profileImage/${sessionStorage.userId}/users`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
          Accept: 'multipart/form-data;',
          'Content-Type': 'multipart/form-data;',
     },
     body: data,
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            setLoadingErrors(false);
            getUserProfile();
          }
          else if(response.status == 'error'){
            let error = [];
            error.push({message: response.StatusDescription.content});
            setResponseListData(error);
            setLoadingErrors(false);
          }
        }).catch(function(error) {
          console.log('Upload error' + error.message);
          setLoadingErrors(false);
          });
    } catch (error) {
      console.log(error)
    } finally {
    }
  };

  const getUserProfile = () => {
    try {
      fetch(`${Constants.baseUrl}users/profileImage/${sessionStorage.userId}/users`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.AccessToken}`,
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.status == 'success') {
            dispatch(setProfile(response.data.userProfileImage))
          }
        })
        .catch(error => {
          console.warn('Get User Profile Error', error);
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  return (
    <Box
      bg="#fcfcfc"
      style={{
        height: Platform.select({
          ios: screen.height,
          android: screen.height + 10,
        }),
      }}>
      <Box
        style={{
          height: screen.height / 1.12,
          width: '90%',
          alignSelf: 'center',
        }}>
        <HStack direction="row">
          <Text flex={10} py={35} fontSize="3xl" fontWeight="bold">
            Profil
          </Text>
          <Box py={35} flex={2}>
          <Pressable onPress={chooseImage}>
            <Image
              alt="icon"
              source={require('../../assets/images/editButton.png')}
            />
            </Pressable>
          </Box>
        </HStack>
        <HStack direction="row" width="80%" alignSelf="center">
          <Box flex={3}>
            <Image
              width="82"
              height="85"
              alt="icon"
              // source={require('../../assets/images/profilePic.png')}
              source={{uri: profile.url }}
            />
          </Box>

          <Box flex={6}>
            <Text fontWeight="bold" fontSize="2xl">
              {user.firstname} {user.lastname}
            </Text>
            <Text fontSize="sm">{user.email}</Text>
          </Box>
        </HStack>
        <Box
          mt={50}
          borderRadius={15}
          p={4}
          bg="#ebf2c4"
          width="90%"
          alignSelf="center">
          <HStack flexDirection="row">
            <Box
              bg="#ebf2c4"
              flex={8}
              borderRightWidth="1"
              borderRightColor="#8dc028">
              <Text textAlign="center" fontSize="3xl" fontWeight="bold">
                2
              </Text>
              <Text textAlign="center" color="gray.500" fontSize="sm">
                Comptes
              </Text>
            </Box>
            <Box bg="#ebf2c4" flex={8}>
              <Text textAlign="center" fontSize="3xl" fontWeight="bold">
                {transactions.transactionCounts}
              </Text>
              <Text textAlign="center" color="gray.500" fontSize="sm">
                Transactions
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box width="90%" alignSelf="center" mt={18}>
          <Box
            borderTopRadius={15}
            p={2}
            height={60}
            borderWidth={1}
            borderBottomWidth={0}
            borderColor="#a18cdf">
            <Pressable
              onPress={()=>setModalVisible2(true)}>
            <Text pl={5} py={2} fontSize="xl" fontWeight="bold">
            Conditions G??n??rales
            </Text>
            </Pressable>
          </Box>

          <Box
            p={2}
            height={60}
            borderWidth={1}
            borderBottomWidth={0}
            borderColor="#a18cdf">
            <Pressable
              onPress={()=>setModalVisible(true)}>
            <Text pl={5} py={2} fontSize="xl" fontWeight="bold">
            Politique de confidentialit??
            </Text>
            </Pressable>
          </Box>

          <Box
            p={2}
            height={60}
            borderWidth={1}
            borderBottomWidth={0}
            borderColor="#a18cdf">
            <Pressable
              onPress={() => navigation.navigate('Chat', {name: 'Chat'})}>
            <Text pl={5} py={2} fontSize="xl" fontWeight="bold">
              Nous contacter
            </Text>
            </Pressable>
          </Box>
          <Box
            borderBottomRadius={15}
            p={2}
            height={60}
            borderWidth={1}
            borderColor="#a18cdf">
            <Pressable
              onPress={() => {
                dispatch(setUser({}));
                dispatch(setCard([]));
                dispatch(setUserWalletDetails({}));
                dispatch(authenticateUser({}));
                dispatch(setToken({}));
                navigation.navigate('Login', {
                  name: 'Login',
                });
              }}>
              <Text
                pl={5}
                py={2}
                color="red.400"
                fontSize="xl"
                fontWeight="bold">
                Deconnexion
              </Text>
            </Pressable>
          </Box>
        </Box>
        {loadingErrors ? (
              <Text>Chargement...</Text>
            ) : (
              <FlatList
                data={responseListData}
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

      <Modal 
isOpen={modalVisible}
onClose={() => {
  setModalVisible(false);
}} size="lg">
    <Modal.Content maxH={screen.height / 1.4}>
   <Modal.CloseButton />
   <Modal.Header>  Politique de confidentialit??</Modal.Header>
   <Modal.Body>
<Box
    bg="gray.100"
  //  height={450}
    px={2}
    width={"100%"}
    borderRadius={6}
  ><ScrollView height={screen.height * 5}>
    {/* <Text fontWeight={"bold"} fontSize="22">Politique de confidentialit??</Text> */}
    <Text fontWeight={"bold"} fontSize="17">Contexte r??glementaire</Text>
    <Text>ADL Capital s???engage ?? respecter la confiance que vous lui accordez et ?? appliquer les dispositions de la loi 78-17 du 6 janvier 1978 modifi??e, relative ?? l???informatique, aux fichiers et aux libert??s (www.cnil.fr), les dispositions du R??glement Europ??en UE 2016/679, relatif ?? la protection des donn??es ?? caract??re personnel ainsi que les principes d??ontologiques qui en d??coulent quant ?? l???exploitation des informations personnelles que vous pouvez ??tre amen?? ?? lui communiquer dans le cadre de votre navigation sur son site internet (votre demande de souscription et/ou d???adh??sion, ou votre demande de documentation) et ult??rieurement en tant que client.</Text>
  <Text fontWeight={"bold"} fontSize="22">Que faisons-nous de vos donn??es ?</Text>
  <Text>Vous ??tes inform??s que les donn??es de contact que vous fournissez lors d???une demande de documentation ou lors d???une demande de souscription seront utilis??es par ADL Capital pour r??pondre ?? vos demandes et pourront dans ce cadre ??tre ??galement utilis??es pour vous accompagner dans la souscription du produit concern??.</Text>
  <Text>Ces donn??es seront supprim??es si vous ne proc??dez pas ?? l???ouverture du produit.</Text>
  <Text>Vous ??tes ??galement inform??s que, lors de l???acc??s sur le site d??ADL Capital, des informations peuvent ??tre temporairement conserv??es en m??moire ou sur votre disque dur conform??ment ?? notre politique cookies. Vous reconnaissez avoir ??t?? inform?? de cette pratique et vous autorisez ADL Capital ?? l???employer. L???acceptation des cookies est une condition sine qua non pour acc??der au site. Remarque : les applications mobiles de ADL Capital ne font pas usage de cookies.</Text>
  <Text>Les clients sont inform??s que les donn??es ?? caract??re personnel recueillies par ADL Capital, lors de l???entr??e en relation et ult??rieurement : </Text>
  <Text>???  Sont utilis??es par ADL Capital pour satisfaire ?? ses obligations l??gales et r??glementaires, notamment ses obligations en mati??re de lutte contre la fraude, le blanchiment d???argent et le financement du terrorisme, l?????vasion fiscale (FATCA et CRS), le suivi comptable des op??rations bancaires, interrogations et d??clarations aupr??s des fichiers centraux, enregistrement des op??rations effectu??es par t??l??phone, gestion de la client??le fragile, d??tection, gestion et suivi des risques notamment par le biais de contr??les, gestion des titulaires d??c??d??s ou inactifs, contr??le des pi??ces, mobilit?? bancaire, authentification des clients ;</Text>
  <Text>??? Sont n??cessaires ?? l???ex??cution de la convention, notamment la communication avec les clients, instruction des demandes d???ouverture de produits et de services de ADL Capital, gestion des moyens de paiement, gestion des plafonds et d??couverts clients, des produits et services, gestion des sinistres et des incidents clients, notifications clients ;</Text>
  <Text>??? Sont n??cessaires ?? la poursuite des int??r??ts l??gitimes de ADL Capital, notamment pour l???enregistrement t??l??phonique et le suivi des communications clients, l???accompagnement dans le cadre de l???ouverture d???un produit ou d???un service de ADL Capital, gestion des impay??s, gestion du risque et des outils d???autorisation, la r??alisation d?????tudes statistiques, la prospection et le ciblage autour des produits et services de ADL Capital et l???animation commerciale afin de permettre ?? ADL Capital d???am??liorer la qualit?? de ses produits et services ainsi que la satisfaction de ses clients.</Text>
  <Text>Laymoon utilise des outils d???autorisation pour les paiements et dans le cadre des demandes d???ouverture de produits et services de ADL Capital. Sur la base de ces outils, ADL Capital peut d??cider d???accepter ou de refuser un paiement et/ou une demande d???un client. Ces outils se basent, selon les cas, sur les informations fournies par le client, la consultation des fichiers centraux, des statistiques relatives aux paiements ou encore des param??trages pr??d??finis par ADL Capital. L???utilisation de ces outils contribue ?? la politique globale de gestion du risque de ADL Capital.</Text>
  <Text fontWeight={"bold"} fontSize="17">Vos donn??es sont-elles transmises ?? des tiers ?</Text>
  <Text>Laymoon est responsable du stockage, de l???acc??s et du traitement des donn??es ?? caract??re personnel en sa possession et peut ??tre amen?? ?? ??changer les donn??es ?? caract??re personnel de ses clients strictement n??cessaires ?? la prestation avec ses prestataires ou partenaires pour la gestion de la relation client notamment Treezor.</Text>
  <Text>Mentions l??gales de notre fournisseur Treezor.</Text>
  <Text>Politique de confidentialit?? de notre fournisseur Treezor.</Text>
  <Text>A l???occasion de diverses op??rations li??es ?? des n??cessit??s de gestion interne, hors op??rations bancaires et financi??res,ADL Capital vous informe que vos donn??es ?? caract??re personnel peuvent faire l???objet d???un transfert dans un pays de l???Union Europ??enne ou hors Union Europ??enne. En cas de transferts de donn??es ?? caract??re personnel vers un pays hors Union Europ??enne, ADL Capital s???assure que le pays concern?? b??n??ficie d???une protection ad??quate et apporte le m??me niveau de garanties, ainsi ces transferts ne se font que vers des pays ayant fait l???objet d???une d??cision d???ad??quation de la Commission Europ??enne.</Text>
  <Text>S???agissant plus sp??cifiquement des transferts de donn??es ?? caract??re personnel li??es ?? des op??rations bancaires et financi??res, ceux-ci sont r??alis??s strictement dans le respect des diff??rentes r??glementations et normes interbancaires qui leur sont applicables.</Text>
  <Text>Laymoon et ses prestataires sont soumis au secret professionnel ?? l?????gard des donn??es ?? caract??re personnel des clients de ADL Capital.</Text>
  <Text>Laymoon s???engage ?? ne pas communiquer vos informations ?? des fins commerciales ?? ses partenaires.</Text>
  <Text fontWeight={"bold"} fontSize="17">Comment conservons-nous vos donn??es ?</Text>
  <Text>Les donn??es ?? caract??re personnel sont conserv??es par ADL Capital a minima pendant les d??lais l??gaux de conservation et/ou de prescription, soit par exemple :</Text>
  <Text>??? Pendant 5 ans ?? compter de l???ex??cution de l???op??ration,</Text>
  <Text>??? Pendant la dur??e de la relation contractuelle augment??e des d??lais de prescription pour les ??l??ments contractuels, et</Text>
  <Text>??? Pendant 10 ans pour les informations comptables.</Text>
  <Text>Au-del?? de ces d??lais, ADL Capital a la possibilit?? d???effacer les donn??es archiv??es du client.</Text>
  <Text>Les donn??es non effac??es pourront ??tre mises ?? votre disposition ?? votre demande.</Text>
  <Text fontWeight={"bold"} fontSize="17">Comment exercer vos droits sur vos donn??es ?? caract??re personnel :</Text>
  <Text>Vous pouvez exercer vos droits par une demande ??crite, et en justifiant votre identit?? (copie recto/verso de votre carte d???identit??), aupr??s du D??l??gu?? ?? la Protection des Donn??es de ADL Capital ?? :</Text>
  <Text >ADL Capital 34 avenue des champs Elys??es 75008 Paris ou par email ?? : dpo@laymoon.fr</Text>
  <Text>Vous pouvez ?? tout moment, apr??s l???expiration des d??lais de conservation, demander l???effacement de vos donn??es ?? caract??re personnel conform??ment aux pr??sentes.</Text>
  <Text>Vous pouvez ??galement exercer ?? tout moment sur vos donn??es ?? caract??re personnel votre droit d???acc??s, droit de rectification, droit ?? la limitation des donn??es, droit ?? la portabilit?? et droit d???opposition conform??ment aux pr??sentes, et dans les conditions et limites pr??vues par les articles 15 ?? 21 du R??glement Europ??en UE 2016/679, relatif ?? la protection des donn??es.</Text>
  <Text>Dans le cadre du droit d???acc??s, vous pouvez obtenir une copie des donn??es ?? caract??re personnel vous concernant et toutes les informations y aff??rentes auxquelles vous n???avez pas acc??s depuis votre espace Client.</Text>
  <Text>Dans le cadre de votre droit de rectification, vous pouvez modifier directement certaines informations dans votre espace Client ou en contactant le Service Relation Client ADL Capital. Pour toute donn??e ?? caract??re personnel non modifiable par ces moyens, vous pouvez en demander la rectification, le cas ??ch??ant sur pr??sentation de justificatifs.</Text>
  <Text>Dans le cadre de votre droit ?? la portabilit??, vous pouvez demander ?? ADL Capital de vous transmettre les donn??es ?? caract??re personnel vous concernant que vous avez fourni ?? ADL Capital dans le cadre de votre entr??e en relation et conserv??e par ADL Capital. Vous pouvez ??galement demander ?? ce que ADL Capital envoie directement ces donn??es ?? caract??re personnel ?? un autre responsable de traitement, auquel cas vous devez nous fournir les coordonn??es du destinataire et le mode de transmission s??curis?? s??lectionn?? par celui-ci.</Text>
  <Text>Dans le cadre de votre droit d???opposition, vous pouvez demander ?? vous opposer, sans frais, ?? ce que les donn??es ?? caract??re personnel vous concernant soient utilis??es ?? des fins de prospection commerciale ou ?? des fins statistiques par ADL Capital (hors traitements ayant pour base juridique le fonctionnement des produits et services fournis par ADL Capital, ou une obligation l??gale ou r??glementaire), dans votre espace Client ou ?? d??faut en contactant le DPO de ADL Capital.</Text>
  <Text>En cas de r??ponse non satisfaisante ou d???absence de r??ponse de ADL Capital dans les d??lais r??glementaires, vous pouvez d??poser une r??clamation aupr??s de la Commission Nationale de l???Informatique et des Libert??s.</Text>
  <Text>Si vous souhaitez obtenir communication des entretiens t??l??phoniques enregistr??s, vous devez en faire la demande ??crite aupr??s du D??l??gu?? ?? la Protection des Donn??es de ADL Capital ?? :</Text>
  <Text>ADL Capital 34 avenue des champs Elys??es 75008 Paris ou par email ?? :dpo@laymoon.fr</Text>
 </ScrollView> 
 </Box>
 </Modal.Body>
 </Modal.Content>
</Modal>

<Modal 
isOpen={modalVisible2}
onClose={() => {
  setModalVisible2(false);
}} size="lg">
    <Modal.Content maxH={screen.height / 1.4}>
   <Modal.CloseButton />
   <Modal.Header>Conditions G??n??rales</Modal.Header>
   <Modal.Body>
<Box
    bg="gray.100"
  //  height={450}
    px={2}
    width={"100%"}
    borderRadius={6}
  ><ScrollView height={screen.height * 20}>

  <Text mt={5} fontWeight={"bold"} fontSize="22">CONDITIONS G??N??RALES DU COMPTE</Text>
  <Text fontWeight={"bold"} fontSize="17">ADL Capital </Text>
  <Text fontWeight={"bold"} fontSize="17">Laymoon</Text>
  <Text fontWeight={"bold"} fontSize="17">Table des mati??res</Text>
  <Text>
        1-	L???entreprise	4</Text><Text>
        2-	Champs d???application des conditions g??n??rales	5</Text><Text>
        3-	Mise ?? jour des Conditions g??n??rales	6</Text><Text>
        4-	Objet	7</Text><Text>
        5-	Le site internet	8</Text><Text>
        6-	L???application	9</Text><Text>
        6.1- Acc??s aux services	9</Text><Text>
        6.2- Inscription	9</Text><Text>
        6.3. Signature ??lectronique des documents	10</Text><Text>
        6.3.1. D??finition	10</Text><Text>
        6.3.2. Valeur probatoire	10</Text><Text>
        6.3.3. Utilisation par l???Entreprise	10</Text><Text>
        6.3.4. Consentement des Utilisateurs	10</Text><Text>
        6.4. Disponibilit?? des services (maintenance de l???application)	10</Text><Text>
        6.5. Parrainage	11</Text><Text>
        7-	Les services	12</Text><Text>
        7.1. Le Compte Principal	12</Text><Text>
        7.1.1. Pr??sentation	12</Text><Text>
        7.1.2. Ouverture du Compte Principal	12</Text><Text>
        7.1.3. Fonctionnement du Compte	12</Text><Text>
        7.2. Le service de paiement	13</Text><Text>
        7.2.1. Virements 	13</Text><Text>
        7.2.2. Carte	13</Text><Text>
        7.2.3. Transactions frauduleuses li??es ?? la carte	14</Text><Text>
        7.4. Le compte Coffre	14</Text><Text>
        7.4.1. Pr??sentation	14</Text><Text>
        7.4.2. Ouverture du Compte Coffre	15</Text><Text>
        7.4.3. Fonctionnement du Compte	15</Text><Text>
        8-	Tarifs	16</Text><Text>
        9-	Garanties et responsabilit??s	17</Text><Text>
        9.1 Principe	17</Text><Text>
        9.2 Limitations de responsabilit??	17</Text><Text>
        9.3 Responsabilit?? de l???Utilisateur	17</Text><Text>
        10-	Suspensions et r??siliation de l???acc??s aux services	18</Text><Text>
        10.1. R??siliation du Compte Principal et des Services associ??s	18</Text><Text>
        10.1.1. R??siliation ou suspension par Laymoon	18</Text><Text>
        10.2. Compte Principal inactif	18</Text><Text>
        10.3. Carte bleu inactive	19</Text><Text>
        11-	R??tractation	20</Text><Text>
        12-	Dur??e	21</Text><Text>
        13-	Stipulations g??n??rales	22</Text><Text>
        13.1. Preuves	22</Text><Text>
        13.2. Donn??es personnelles.	22</Text><Text>
        13.3. Propri??t?? intellectuelle	22</Text><Text>
        13.4. Ind??pendance des clauses	22</Text><Text>
        13.5. Force majeure	23</Text><Text>
        13.6. R??clamations	23</Text><Text>
        14-	Droit applicable ??? Juridiction	24</Text><Text>
        13.1. Droit applicable	24</Text><Text>
        13.2. Comp??tence juridictionnelle	24
        </Text>
  <Text fontWeight={"bold"} fontSize="17">1 - L???entreprise</Text>
  <Text>Laymoon est un site ??dit?? par l???Entreprise ADL Capital, soci??t?? par actions simplifi??e au capital de 100 001 euros, immatricul??e au RCS de Paris sous le num??ro 897690160 et dont le si??ge social se situe au 34 Avenue des Champs Elys??es 75008 Paris, France, est amen??e ?? collecter et traiter certaines donn??es ?? caract??re personnel des personnes qui utilisent le site Internet qu???elle ??dite disponible ?? l???adresse URL www.Laymoon.eu (ci-apr??s d??sign?? le ?? Site ??) ainsi que l???Application (ci-apr??s d??sign??es les ?? Personnes Concern??es ??). Laymoon est un prestataire de services digital pour les personnes majeures. </Text><Text>

      Laymoon est le gestionnaire du programme et un interm??diaire autoris??, agissant au nom de l'UAB "TREEZOR" - une Soci??t?? par Actions Simplifi??e constitu??e en France (num??ro d'entreprise : 807 465 059  dont le si??ge social  est situ?? au 33 avenue de Wagram, 75017 Paris.  Treezor est un ??tablissement de monnaie ??lectronique ("EME") d??livr?? par l???Autorit?? de Contr??le Prudentiel et de R??solution (ACPR) et est autoris??e ?? fournir les services de paiement pr??vus aux 3?? et 5?? du II de l???article L. 314-1 du code mon??taire et financier. Plus pr??cis??ment, en sa qualit?? de prestataire de services de paiement, TREEZOR dispose des agr??ments pour l?????mission et la gestion de monnaie ??lectronique, l???ex??cution d???op??rations de paiement associ??es ?? un compte, notamment l???ex??cution des pr??l??vements et des virements, y compris les ordres permanents, ainsi que l?????mission d???instruments de paiement et l???acquisition d???ordres de paiement.</Text><Text>
      En sa qualit?? d'agent de prestataire de services de paiement de Treezor, au sens des articles L.523-1 et suivants du Code mon??taire et financier, Laymoon fournit des services de paiement au nom et pour le compte de Treezor. A cet ??gard les Utilisateurs reconnaissent et acceptent le  Contrat Cadre qui d??finit les relations entre Treezor et les Utilisateurs accessible ?? l'adresse suivante :  https://www.laymoon.fr/conditions-generales-du-compte/</Text><Text>

      Le Site est h??berg?? par la soci??t?? OVH SAS : 2 rue Kellermann ??? BP 80157 59053 ROUBAIX CEDEX 1.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">2 - Champs d???application des conditions g??n??rales</Text>
  <Text>Les pr??sentes conditions g??n??rales (les ?? CG ??) s???appliquent de fa??on exclusive entre l???Entreprise et tout Utilisateur de ses Services, que l???Utilisation intervienne via le Site ou l???Application. Les Services sont exclusivement r??serv??s aux Utilisateurs, ?? l???exclusion de toute autre personne. Toute Utilisation des Services emporte de plein droit l???application et la pleine acceptation des pr??sentes CG, dans leur version en vigueur ?? la date de l???Utilisation.
  </Text>
  <Text> Laymoon se r??serve le droit de mettre ?? jour et de modifier librement, ?? tout moment les CG, apr??s en avoir inform?? les Utilisateurs au pr??alable. Tout Utilisateur qui refuserait la nouvelle version des CG ?? compter de leur date d???entr??e en vigueur sera alors tenu de cesser l???Utilisation des Services. L???Utilisateur ne consentant pas aux pr??sentes ne pourra pas utiliser le Service propos?? par Laymoon.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">3 - Mise ?? jour des Conditions g??n??rales</Text>
  <Text>Laymoon se r??serve le droit de modifier tout ou partie des pr??sentes.	</Text><Text>
        Toute modification prendra effet ?? compter de sa publication sur le Site et ne s???appliquera qu???aux Utilisateurs utilisant les Services post??rieurement ?? son entr??e en vigueur. </Text><Text>
        Laymoon s???engage ?? informer l???Utilisateur des modifications apport??es aux pr??sentes d??s leur  mise en ligne sur le Site et l???Application.</Text><Text>
        ?? d??faut d???adh??sion aux nouvelles CG, l???Utilisateur dispose d???un d??lai de soixante (60) jours ??   compter de la date de notification pour en faire part ?? Laymoon par courrier ??lectronique.</Text><Text>
        Dans l???hypoth??se o?? l???Utilisateur n???aurait pas notifi?? son d??saccord dans le d??lai pr??vu cidessus, il sera r??put?? avoir accept?? les nouvelles modifications apport??es.</Text><Text>
        En cas de changement de tarification, Laymoon s???engage ?? informer l???Utilisateur par notification  et par mail deux (2) mois avant la mise en vigueur des nouveaux tarifs.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">4 - Objet</Text>
  <Text>Les CG ont pour objet de d??finir les termes et modalit??s d???acc??s aux Services, en particulier, la mise ?? disposition, du Compte Principal, de la Carte et des Services de Paiement attach??s au Compte Principal.</Text>
  <Text fontWeight={"bold"} fontSize="17">5 - Le site internet</Text>
  <Text>Le site internet de Laymoon a uniquement une vocation commerciale et publicitaire.</Text><Text>
        Le Site est accessible ?? l???adresse suivante : https://Laymoon.eu/.</Text><Text>
        Il contient :</Text><Text>
        - Les informations r??glementaires relatives au projet et au site web (mentions l??gales, politique de confidentialit?? etc ???) ;</Text><Text>
        - Les informations relatives aux produits propos??s par ADL Capital ;</Text><Text>
        - Des pages de vente appel??es ?? Landing pages ?? permettant aux visiteurs de s???inscrire aux Newsletters d???ADL Capital, conform??ment ?? la r??glementation europ??eenne en vigueur en mati??re de protection des donn??es ;</Text><Text>
        - Des pages d???informations et de communication contenues dans la partie ?? Blog ?? du site web.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">L???application</Text>
  <Text fontWeight={"bold"} fontSize="16">6.1- Acc??s aux services</Text>
  <Text>Les Services de l???Entreprise sont accessibles par l???interm??diaire de l???Application, sous r??serve de s?????tre pr??alablement inscrit, en suivant la proc??dure pr??vue ?? cet effet (cf. ?? 6.2.). </Text><Text>
        L???application est disponible depuis le site web ou en tapant le nom XXX sur les moteurs de recherche d???application App Store et Google Play, lesquels requi??rent l???utilisation d???un identifiant et d???un mot de passe propres ?? l???Utilisateur. L???utilisation de l???Application requiert de disposer d???un smartphone disposant d???une connexion ?? internet.</Text><Text>
        L???Entreprise ne pourra en aucun cas ??tre tenue pour responsable des difficult??s de t??l??chargement de l???Application ?? partir du Google Play Store ou de l???App Store.</Text><Text>
        L???acc??s aux Services requiert ??galement l???acceptation par l???Utilisateur du Contrat Laymoon et des ??ventuelles annexes, laquelle fait l???objet d???un accord tacite lors de l???inscription.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">6.2- Inscription</Text>
  <Text>L???inscription se d??roule de la fa??on suivante :</Text><Text>
        1??) T??l??chargement de l???application Laymoon</Text><Text>
        2??) Inscription ?? Laymoon </Text><Text>
        3??) Une fois l???inscription valid??e, l???acc??s aux Services requiert, sur l???Espace D??di?? de l???Utilisateur sur le Site ou l???Application de : </Text><Text>
        - Remplir un formulaire d??taill?? comportant des Donn??es Personnelles, en particulier, les nom(s), pr??nom(s), date et lieu de naissance, nationalit??, adresse et pays de r??sidence, num??ro de t??l??phone portable, et le cas ??ch??ant, la profession de l???Utilisateur ; </Text><Text>
        - Prendre en photo recto-verso une pi??ce d???identit?? (carte d???identit??, passeport), les photos d?????cran, images ou photocopies ne seront pas accept??es, seule l???originale peut ??tre valid??e. </Text><Text>
        Pour les personnes ne disposant pas de pi??ce d???identit?? fran??aise, un justificatif de domicile de moins de trois mois devra ??tre envoy?? ?? l???adresse suivante : contact@laymoon.fr; </Text><Text>
        Un selfie sera ??galement ?? effectuer depuis notre outil int??gr?? afin de valider votre identit??. </Text><Text>
        - Remplir toutes les conditions ??num??r??es lors de l???inscription. Les v??rifications sont r??alis??es par notre partenaire et aucun remboursement ne sera effectu?? si l???une des conditions ??num??r??es avant le premier paiement n???est pas respect??e. </Text><Text>
        L???Entreprise se r??serve le droit de demander ?? ses Utilisateurs toute information ou document compl??mentaire dans le cadre de ses obligations l??gales et r??glementaires. </Text><Text>
        Les informations et documents fournis par l???Utilisateur doivent ??tre exacts et conformes ?? la r??alit??, sous peine de suspension ou de cessation des Services, au choix de l???Entreprise. En cas de modification de tout ou partie des informations et documents communiqu??s, l???Utilisateur doit en informer l???Entreprise afin que celle-ci puisse les mettre ?? jour. En l???esp??ce, des frais peuvent ??tre appliqu??s (cf. ??8.)
  </Text>
  <Text fontWeight={"bold"} fontSize="17">6.3. Signature ??lectronique des documents</Text>
  <Text fontWeight={"bold"} fontSize="16">6.3.1 D??finition</Text>
  <Text> La signature num??rique (parfois appel??e signature ??lectronique) est un syst??me de signature permettant de garantir l'int??grit?? d'un document ??lectronique et d'en authentifier l???auteur. Son apposition sur un document manifeste le consentement du signataire sur le document sign??. </Text>
  <Text fontWeight={"bold"} fontSize="16">6.3.2. Valeur probatoire </Text>
  <Text>En application de l???article 1366 du code civil, la signature num??rique a la m??me force probante que la signature manuscrite sous r??serve que puisse ??tre d??ment identifi??e la personne dont elle ??mane et que le support utilis?? soit ??tabli et conserv?? dans des conditions de nature ?? en garantir l???int??grit??. </Text>
  <Text fontWeight={"bold"} fontSize="16">6.3.3. Utilisation par l???Entreprise  </Text>
  <Text>L???Entreprise utilise des outils techniques de signature num??rique fournis par elle-m??me ou  par des  prestataires sp??cialis??s r??pondant aux exigences l??gales et r??glementaires applicables en pareille mati??re. Il en est de m??me pour l???archivage des documents des Utilisateurs g??n??r??s par le Site et/ou l???Application.</Text>
  <Text fontWeight={"bold"} fontSize="16">6.3.4. Consentement des Utilisateurs </Text>
  <Text>Tout Utilisateur du Site ayant souscrit aux Services reconna??t ??tre valablement engag?? par sa  signature num??rique, les actes sign??s ??lectroniquement ayant la m??me force probante que ceux sign??s au format papier.</Text><Text>
        Lors de la cr??ation du Compte Principal, Laymoon s???assurera de l???identit?? de l???Utilisateur. La validation de l???Utilisateur marque son consentement sur les documents contractuels le liant ?? l???Entreprise et acceptation des pr??sentes. </Text><Text>
        L???Utilisateur reconna??t en particulier que tout acte auquel est associ?? un proc??d?? s??curis?? d???authentification est pr??sum?? sign?? par lui-m??me, sauf preuve contraire.</Text><Text>
        L???Utilisateur reconna??t que tout contrat ??tabli via le Site ou l???Application prend effet, sauf  dispositions sp??cifiques contraires, ?? compter de la date d???envoi du message de confirmation.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">6.4. Disponibilit?? des services (maintenance de l???application)  </Text>
  <Text>Le Site et l???Application sont accessibles 24h/24, 7j/7 ?? l???ensemble des Utilisateurs.</Text><Text>
        L???Entreprise se r??serve le droit, sans pr??avis, ni indemnit??, de suspendre temporairement ou d??finitivement le Site et l???Application ou l???acc??s ?? un ou plusieurs Services afin d???effectuer une </Text><Text>
        mise ?? jour, des modifications ou encore un changement sur les m??thodes op??rationnelles, les serveurs et les heures d???accessibilit??, sans que cette liste ne soit limitative.</Text><Text>
        L???Entreprise se r??serve le droit d???apporter au Site, ?? l???Application et aux Services toute am??lioration et modification qu???elle jugera utile ou n??cessaire dans le cadre du bon fonctionnement du Site, de l???Application et de ses Services.</Text><Text>
        Pour conclure, Laymoon ne saurait ??tre tenue responsable d???une interruption des Services, qu???elle soit volontaire ou non, ??tant pr??cis?? qu???elle s???engage ?? fournir ses meilleurs efforts pour limiter les interruptions qui lui seraient imputables.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">6.5. Parrainage </Text>
  <Text>Laymoon propose ?? ses Utilisateurs un syst??me de parrainage leur permettant de voir leur Compte Principal cr??dit?? d???un montant de 1 euros par parrainage au b??n??fice du parrain pendant une p??riode de 2 ans, sous r??serve de l???inscription finalis??e du parrain?? et de l???ouverture par celui-ci d???un Compte Principal. Les gains du Parrain seront cr??dit??s directement sur son Compte Principal Laymoon d??s l???activation d??finitive de la carte bleu (ci-apr??s la ?? Carte ??) du parrain??. Si le parrain?? use de son droit de r??traction, le parrainage devient alors caduc et l???Entreprise peut d??biter le Compte Principal du parrain du montant du parrainage associ??. Le nombre de parrainages n???est cependant pas limit??. Laymoon se r??serve le droit de mettre un terme ?? tout instant au parrainage ou d???en modifier les conditions ainsi que le montant, ce que l???Utilisateur reconna??t et accepte. Si l???Entreprise est amen??e ?? constater des irr??gularit??s d???un Utilisateur dans le cadre du parrainage, elle aura la facult?? de prendre toute mesure ad??quate afin de faire cesser ces dites, en ce compris, la suspension ou la cl??ture du Compte Principal de l???Utilisateur concern??.</Text>
  <Text fontWeight={"bold"} fontSize="17">7 - Les services</Text>
  <Text>Laymoon propose les services ci-apr??s ?? ses Utilisateurs. Ces derniers pourront ??tre compl??t??s et/ou amend??s par l???Entreprise. </Text>
  <Text fontWeight={"bold"} fontSize="16">7.1. Le Compte Principal </Text>
  <Text fontWeight={"bold"} fontSize="16">7.1.1. Pr??sentation </Text>
  <Text>Le Compte Principal propos?? par Laymoon est un compte de paiement en euros, sans autorisation de d??couvert. Le Compte Principal est ouvert dans les livres de Laymoon, soci??t?? agr????e en tant qu?????tablissement ??lectronique de paiement et autoris??e en cons??quence ?? proc??der aux op??rations de paiement et ?? l?????mission de la Carte. </Text><Text>
        Chaque Compte Principal est attach?? un num??ro unique d??nomm?? IBAN. Le Compte Principal permet la r??alisation des op??rations suivantes : </Text><Text>
        - Des op??rations au d??bit : enregistrement de paiements r??alis??s par la Carte, ??mission de virements. - Des op??rations au cr??dit : r??ception de virements et/ou virements instantan??s. 
  </Text>
  <Text fontWeight={"bold"} fontSize="16">7.1.2. Ouverture du Compte Principal </Text>
  <Text>Le Compte Principal est accessible aux majeurs ayant 18 ans r??volus ?? la date d???ouverture.</Text><Text>
        L???ouverture du Compte Principal requiert le respect des conditions suivantes : </Text><Text>
        - Communication des informations demand??es sur le Site et/ou l???Application</Text><Text>
        - Transmission de l???ensemble des documents demand??s (pi??ce d???identit?? ou passeport, copie d???un justificatif de domicile </Text><Text>
        - Disposition d???un num??ro de t??l??phone mobile avec indicatif fran??ais </Text><Text>
        - ??tre r??sident d'un des pays de l'Union Europ??enne (hors outre-mer europ??en)</Text><Text>
        - Acceptation des pr??sentes CG Les sommes promises par l???Entreprise ?? l???Utilisateur au titre de l???ouverture du Compte Carte seront cr??dit??es sur le Compte Principal dans les quatre-vingt-dix jours suivant son ouverture. 
    </Text>
  <Text fontWeight={"bold"} fontSize="16">7.1.3. Fonctionnement du Compte </Text>
  <Text>Le Compte Principal peut ??tre g??r?? par l???interm??diaire de l???Application.</Text><Text>
        Son solde correspond ?? la diff??rence entre les op??rations au cr??dit et les op??rations au d??bit. Il doit toujours ??tre cr??diteur, sous peine de refus des paiements ou des pr??l??vements pr??sent??s. Le cas ??ch??ant, des frais peuvent ??tre appliqu??s (cf??8). </Text><Text>
        Dans l???hypoth??se o?? une op??ration serait pr??sent??e, accept??e par l???Entreprise mais aurait pour effet de mettre le Compte Principal ?? d??couvert, l???Utilisateur sera tenu d???approvisionner le Compte Principal sans d??lai. Des frais pour d??faut de provision et/ou relance de paiement pourront lui ??tre appliqu??s par l???Entreprise en cas de transaction refus??e. </Text><Text>
        L???ensemble des op??rations du Compte Principal fera l???objet d???un relev?? mensuel, accessible via l???Application. Sauf op??ration de maintenance, le Compte Principal est accessible 24h/24 et 7 j/7, au moyen d???un syst??me ?? double authentification conform??ment ?? la r??glementation en vigueur. </Text><Text>
        Outre la consultation du solde, le Compte Principal permet la r??alisation des op??rations suivantes :</Text><Text>
        - Enregistrement de comptes de b??n??ficiaires </Text><Text>
        - Virements</Text><Text>
        - R??ception de toutes notifications et alertes </Text><Text>
        - Gestion de la Carte (en particulier, toute opposition sur celle-ci)</Text><Text>
        - Impression du relev?? d???identit?? bancaire du Compte Principal</Text><Text>
        - Mise ?? jour des informations personnelles </Text><Text>
        - Communication de documents </Text><Text>
        - Contacts avec l?????quipe Laymoon </Text><Text>
        L???ensemble des op??rations de paiement sur le Compte Principal sont initi??es par l???Utilisateur par le biais de l???Application et trait??es par Laymoon.
   </Text>
  <Text fontWeight={"bold"} fontSize="16">7.2. Le service de paiement</Text>
  <Text fontWeight={"bold"} fontSize="16">7.2.1. Virements</Text>
  <Text>Laymoon vous permet de r??aliser tous virements par l???interm??diaire de l???Application.</Text><Text>
        La mise en place d???un virement requiert la communication ?? Laymoon des r??f??rences IBAN et BIC du compte et de la banque du destinataire dans le cas d???un virement SWIFT.</Text><Text>
        La mise en place et la r??alisation de virements sont gratuites except?? lorsque les m??thodes de  virements SWIFT ou SEPA Instant (virements instantan??s) sont s??lectionn??es. Cependant, des  plafonds de gratuit?? peuvent ??tre appliqu??s pour les virements SEPA. (cf ??8)</Text><Text>
        L???Utilisateur pourra, ?? tout moment consulter l???historique de ses virements, ajouter de nouveaux b??n??ficiaires ou en supprimer, et proc??der ?? tout virement, sous r??serve que le Compte Principal soit cr??diteur.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">7.2.2. Carte </Text>
  <Text>En ouvrant un Compte Principal, Laymoon vous donne acc??s gratuitement ?? une carte de paiement ??mise par Laymoon, son prestataire de paiement. </Text><Text>
        La Carte peut ??tre utilis??e sans frais partout dans le monde. Des frais sp??cifiques peuvent cependant ??tre appliqu??s selon la tarification en vigueur (cf ??8). </Text><Text>
        En cas de paiement ou de retrait dans une devise autre que l???euro, Laymoon appliquera un taux de conversion, lequel pourra donner lieu ?? une ??ventuelle r??gularisation sur le Compte Principal post op??ration. </Text><Text>
        La Carte est personnelle et ne peut ??tre pr??t??e par l???Utilisateur. </Text><Text>
        Son utilisation requiert son activation par l???interm??diaire d???un paiement avec code PIN ou un retrait. La Carte fonctionne au moyen d???un code PIN confidentiel ?? 4 chiffres qui sera transmis ?? l???Utilisateur ou du cryptogramme mentionn?? sur l???Application dans la rubrique ?? Informations de ma carte ??. En cas de composition erron??e du code ou du cryptogramme ?? trois reprises, la Carte est automatiquement d??sactiv??e. </Text><Text>
        La Carte comporte une dur??e de validit?? au-del?? de laquelle elle deviendra inactive. Pr??alablement ?? son ??ch??ance, une nouvelle ?? Carte ?? sera adress??e ?? l???Utilisateur. L???Utilisateur peut bloquer la Carte ?? tout moment au moyen de l???Application ou en contactant le service client de l???Entreprise.</Text><Text>
        Les op??rations de retrait requi??rent l???utilisation de distributeurs du m??me r??seau que la Carte. </Text><Text>
        En cas de vol ou de perte de la Carte, tout Utilisateur est tenu de faire opposition dans les meilleurs d??lais. L???opposition peut ??tre mise en place via l???Application ou en contactant le service client de Laymoon. Les paiements effectu??s via la Carte avant opposition demeurent ?? la charge de l???Utilisateur si ceux-ci ont ??t?? faits avec composition du code secret ou en cas d???agissements frauduleux de l???Utilisateur ou de n??gligence grave de ce dernier. En l???esp??ce, l???envoi d???une nouvelle carte peut engendrer des frais suppl??mentaires (cf ??8).
  </Text>
  <Text fontWeight={"bold"} fontSize="16">7.2.3. Transactions frauduleuses li??es ?? la carte </Text>
  <Text>En cas de transactions non autoris??es, vous devez tout d'abord bloquer les paiements par carte ?? partir de votre Application et changer ??galement vos num??ros de carte virtuelle. Nous vous conseillons vivement de commander une nouvelle carte afin d?????viter que de nouvelles transactions frauduleuses ne se produisent. Il est important de le faire avant que nous prenions en charge votre demande. </Text><Text>
        Cette demande doit ??tre effectu??e par envoi en courrier AR ?? l???adresse de notre si??ge social : </Text><Text>
        ADL Capital, 34 Avenue des Champs-Elys??es, 75008 Paris.</Text><Text>
        Votre demande ??crite doit mentionner les transactions identifi??es comme frauduleuses ainsi que tous renseignements compl??mentaires utiles ?? votre identification (nom, pr??nom, date de naissance, code de parrainage).</Text><Text>
        D??s r??ception de ce courrier, l???Entreprise prendra connaissance de votre cas et le traitera dans les d??lais l??gaux.</Text><Text>
        Nous attirons votre attention sur le fait que cette d??marche est uniquement destin??e aux transactions frauduleuses, dans le cas o?? celle-ci serait destin??e ?? bloquer des paiements suite ?? un accord avec un marchand, cela pourrait entra??ner un litige commercial.</Text><Text>
        Apr??s investigations, s???il s???av??re que le client ait fait une fausse d??claration, l???Entreprise se r??serve le droit de d??biter le Compte Principal du titulaire du montant de la somme pr??c??demment contest??e par le client qui aura ??t?? pr??alablement cr??dit??e lors de la prise en charge de la contestation par l???Entreprise ainsi que des frais suppl??mentaires li??s aux investigations effectu??es.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">7.4. Le compte Coffre </Text>
  <Text fontWeight={"bold"} fontSize="16">7.4.1. Pr??sentation</Text>
  <Text>Le Compte Coffre propos?? par Laymoon est un compte d?????conomie permettant aux utilisateurs d?????pargner une partie de leurs revenus. Ce compte n???apporte ni dividendes ni frais suppl??mentaires pour l???utilisateur. </Text>
  <Text>Chaque Compte Coffre est attach?? un num??ro unique d??nomm?? IBAN. Le Compte Coffre permet la r??alisation des op??rations suivantes : </Text><Text>
        - Des op??rations au d??bit : ??mission de virements. </Text><Text>
        - Des op??rations au cr??dit : r??ception de virements. 
  </Text>
  <Text fontWeight={"bold"} fontSize="16">7.4.2. Ouverture du Compte Coffre </Text>
  <Text>Le Compte Principal est accessible aux majeurs ayant 18 ans r??volus ?? la date d???ouverture.</Text><Text>
        L???ouverture du Compte Coffre est g??n??r??e automatiquement avec l???ouverture du Compte Principal.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">7.4.3. Fonctionnement du Compte  </Text>
  <Text>Le Compte Principal peut ??tre g??r?? par l???interm??diaire de l???Application.</Text><Text>
        Son solde correspond ?? la diff??rence entre les op??rations au cr??dit et les op??rations au d??bit. Il ne peut qu?????tre cr??diteur.</Text><Text>
        L???ensemble des op??rations du Compte Principal fera l???objet d???un relev?? mensuel, accessible via l???Application. Sauf op??ration de maintenance, le Compte Principal est accessible 24h/24 et 7 j/7, au moyen d???un syst??me ?? double authentification conform??ment ?? la r??glementation en vigueur. </Text><Text>
        L???ensemble des op??rations de paiement sur le Compte Coffre sont initi??es par l???Utilisateur par le biais de l???Application et trait??es par Laymoon.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">8 - Tarifs </Text>
  <Text>Les Services, Tarifs ainsi que l???ensemble des frais applicables par l???Entreprise sont consultables directement sur le Site internet Laymoon.fr en cliquant  sur la rubrique tarif</Text><Text>
        Dans le cas d???un changement important, Laymoon s???engage ?? pr??venir ses Utilisateurs dans un d??lai de deux (2) mois.</Text><Text>
        N.B : le pr??l??vement mensuel du montant de la formule tarifaire choisie s???effectue chaque mois directement sur le compte Laymoon. En cas de provisions insuffisantes, tout paiement est bloqu?? et peut engendrer des frais suppl??mentaires.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">9 - Garanties et responsabilit??s </Text>
  <Text fontWeight={"bold"} fontSize="16"> 9.1 Principe </Text>
  <Text>Laymoon se r??serve le droit d???apporter au Site, ?? l???Application et aux Services toute am??lioration et modification qu???elle jugera utile ou n??cessaire dans le cadre du bon fonctionnement du Site, de l???Application et de ses Services.</Text>
  <Text fontWeight={"bold"} fontSize="16">9.2 Limitations de responsabilit?? </Text>
  <Text>Laymoon ne saurait ??tre tenue responsable d???une interruption des Services, qu???elle soit volontaire ou non, ??tant pr??cis?? qu???elle s???engage ?? fournir ses meilleurs efforts pour limiter les interruptions qui lui seraient imputables.</Text><Text>
        Laymoon d??cline ??galement toute responsabilit?? au titre de toute perte de donn??es, survenance de tous bugs informatiques ou de tous dommages cons??cutifs ?? toute intrusion frauduleuse d???un tiers sur le Site ou l???Application, eux-m??mes cons??cutifs ?? toute faute ou n??gligence volontaire ou involontaire d???un Utilisateur. </Text><Text>
        ?? titre de condition expresse du consentement de Laymoon au titre des Services, sa responsabilit?? ?? l?????gard de tout Utilisateur ne saurait ??tre sup??rieure au montant factur?? ?? ce dernier au cours des six derniers mois pr??c??dant l???engagement de sa responsabilit?? par l???Utilisateur concern??. </Text><Text>
        En tout ??tat de cause, Laymoon ne saurait ??tre responsable de tout dommage indirect caus?? ?? un Utilisateur, quelle qu???en soit la cause. </Text><Text>
        Laymoon ne garantit pas ?? l???Utilisateur la pleine et enti??re satisfaction relative aux Services propos??s par le biais du Site et/ou de l???Application.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">9.3 Responsabilit?? de l???Utilisateur </Text>
  <Text>L???Utilisateur est seul responsable de la confidentialit?? de ses identifiants et mots de passe et/ou de toute utilisation faite par lui du Site ou de l???Application et des cons??quences qui y sont attach??es.</Text><Text>
        Tout Utilisateur s???interdit de porter atteinte, de quelque mani??re que ce soit, au Site ou ?? l???Application et de faire une utilisation de ceux-ci non conformes ?? leur finalit??. Les Utilisateurs sont seuls responsables des informations communiqu??es ?? l???Entreprise et de leur ??ventuelle mise ?? jour. Tout Utilisateur garantit l???Entreprise contre toute action de tiers cons??cutive ?? tout manquement aux pr??sentes, qu???il s???engage ?? respecter.
  </Text>
  <Text fontWeight={"bold"} fontSize="17">10 - Suspensions et r??siliation de l???acc??s aux services </Text>
  <Text fontWeight={"bold"} fontSize="16">10.1. R??siliation du Compte Principal et des Services associ??s </Text>
  <Text>Les Services propos??s par Laymoon le sont ?? dur??e ind??termin??e. Tout Utilisateur dispose de la  facult?? de mettre un terme aux Services et de cl??turer son Compte Carte sur simple demande au service client de Laymoon, par courrier recommand?? avec accus?? de r??ception adress?? au si??ge social de l???Entreprise.</Text><Text>
        En cas de cl??ture de tout Compte Principal et des Services associ??s, Laymoon prendra acte de la r??siliation de l???Utilisateur au moyen de l???envoi d???un courriel ?? ce dernier. Le solde cr??diteur du Compte Principal sera restitu?? par Laymoon au titulaire au terme d???un d??lai maximum de 30 jours apr??s pr??sentation d???un autre RIB, par voie de virement sur le compte  dont les coordonn??es seront communiqu??es par l???Utilisateur ?? Laymoon.</Text><Text>
        La cl??ture du Compte Principal entra??nera automatiquement et de plein droit, sans formalit?? additionnelle, le blocage d??finitif de la Carte.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">10.1.1. R??siliation ou suspension par Laymoon </Text>
  <Text>Laymoon dispose ??galement de la facult?? de suspension ou r??siliation de tout Compte Principal moyennant un pr??avis de trois mois, sans motif, ou imm??diat, pour juste motif, en particulier, en cas de constatation d???op??rations irr??guli??res sur le Compte Principal (fraude, impay??s r??p??t??s, blanchiment, etc.) ou de non-respect des pr??sentes.</Text><Text>
        Le choix entre la r??siliation et la suspension appartient ?? l???Entreprise, sans recours possible. </Text><Text>
        En cas de suspension, le Compte pourra ??tre r??activ?? sur demande de l???Utilisateur, et ce, sous un d??lai de quinze jours apr??s la suspension.</Text><Text>
        Tout d??c??s d???un Utilisateur entra??ne de plein droit la suspension imm??diate de la Carte et de son Compte Carte puis sa fermeture dans les trente jours suivant le transfert du solde au notaire en charge de la succession.</Text><Text>
        En cas de gel du Compte Principal par nos services de conformit?? suite ?? un usage anormal de ce dernier, des frais seront pr??lev??s compte tenu des investigations qui peuvent ??tre diligent??es. (cf??8)
  </Text>
  <Text fontWeight={"bold"} fontSize="16">10.2. Compte Principal inactif </Text>
  <Text>Conform??ment aux dispositions de l???article L. 312-19 du code mon??taire et financier, Laymoon recensera chaque ann??e la liste des comptes-cartes ouverts par les Utilisateurs devenus inactifs. </Text><Text>
        Un compte est consid??r?? comme inactif : </Text><Text>
        1?? Soit ?? l'issue d'une p??riode de douze mois au cours de laquelle les deux conditions suivantes sont remplies : </Text><Text>
        a) Le compte n'a fait l'objet d'aucune op??ration, hors inscription d'int??r??ts et d??bit par l'??tablissement tenant le compte de frais et commissions de toute nature ou versement de produits ou remboursement de titres de capital ou de cr??ance ; </Text><Text>
        b) Le titulaire du compte, son repr??sentant l??gal ou la personne habilit??e par lui ne s'est pas manifest??, sous quelque forme que ce soit, aupr??s de Laymoon. </Text><Text>
        2?? Soit, si son titulaire est d??c??d??, ?? l'issue d'une p??riode de douze mois suivant le d??c??s au cours de laquelle aucun de ses ayants droit n'a inform?? l'??tablissement tenant le compte de sa volont?? de faire valoir ses droits sur les avoirs et d??p??ts qui y sont inscrits. </Text><Text>
        En cas de compte inactif, Laymoon en informera le titulaire ou son repr??sentant l??gal ou, le cas ??ch??ant, ses ayants droit connus, par tout moyen ?? sa disposition et leur indiquera les cons??quences qui y sont attach??es, en particulier quant au sort des fonds, lesquels seront transf??r??s ?? la Caisse des D??p??ts et Consignations dans les d??lais l??gaux et r??glementaires. </Text><Text>
        En compl??ment du transfert susvis??, Laymoon aura ??galement la facult?? de suspendre avec effet imm??diat la Carte d??s l???inactivit?? du Compte. En pareille situation, la Carte pourra ??tre r??activ??e par son Utilisateur en contactant l???Entreprise.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">10.3. Carte bleu inactive </Text>
  <Text>Des frais peuvent ??tre appliqu??s dans le cas o?? l???Utilisateur effectue moins de quatre transactions par l???interm??diaire de sa Carte, dans un d??lai de quatre-vingt-dix (90) jours pour un motif de carte bleu inactive. (cf ??7)</Text>
  <Text fontWeight={"bold"} fontSize="17">11 - R??tractation </Text>
  <Text>?? compter de son inscription sur l???Application, tout Utilisateur b??n??ficie, conform??ment aux dispositions l??gales applicables, d???un droit de r??tractation exer??able pendant 14 jours. Compte-tenu du fait que Laymoon engage des frais lors de la cr??ation de compte, tels que : la v??rification d???identit??, la cr??ation de cartes Virtuelle et Physique ainsi que d???un IBAN, le client ne pourra ??tre rembours?? dans son int??gralit?? en cas de demande de r??tractation. Toute demande de r??tractation devra ??tre accompagn??e de la communication d???un relev?? d???identit?? bancaire afin de permettre ?? l???Entreprise de virer le solde du compte, d??duction faite de tout avantage dont aurait b??n??fici?? l???Utilisateur se r??tractant, r??solu de plein droit du fait de la r??tractation ?? l???adresse : contact@laymoon.fr</Text>
  <Text fontWeight={"bold"} fontSize="17">12 - Dur??e </Text>
  <Text>Les CG sont applicables pendant toute la dur??e de la relation contractuelle existante entre l???Utilisateur et l???Entreprise, laquelle est ?? dur??e ind??termin??e.</Text>
  <Text fontWeight={"bold"} fontSize="17">13 - Stipulations g??n??rales </Text>
  <Text fontWeight={"bold"} fontSize="16">13.1. Preuves </Text>
  <Text>La preuve des actes et op??rations ordonn??s et/ou r??alis??s par tout Utilisateur du Site ou de l???Application pourra ??tre valablement rapport??e au moyen des syst??mes mis en place ou utilis??s par Laymoon, ce que les Utilisateurs acceptent express??ment et irr??vocablement. </Text>
  <Text>La preuve pourra notamment r??sulter de tout enregistrement ou de tout support ??lectronique ou num??rique constituant la reproduction fiable, int??gre et historique des donn??es, conserv??es par l???Entreprise. </Text>
  <Text fontWeight={"bold"} fontSize="16">13.2. Donn??es personnelles.</Text>
  <Text>Laymoon s???engage ?? pr??server votre vie priv??e. Toutes les donn??es personnelles transmises par tout Utilisateur sont confidentielles et trait??es conform??ment aux dispositions l??gales et r??glementaires applicables, en particulier, celles pr??vues par le R??glement (UE) 2016/679 du 27 avril 2016 relatif ?? la protection des personnes physiques ?? l'??gard du traitement des donn??es ?? caract??re personnel et ?? la libre circulation de ces donn??es (RGPD) et par la Loi n?? 78-17 du 6 janvier 1978 relative ?? l'informatique, aux fichiers et aux libert??s dans sa version en vigueur et au D??cret n??2018-687 du 1er ao??t 2018. </Text><Text>
        Pour une information compl??te sur le traitement des donn??es personnelles par Laymoon et sur les droits des Utilisateurs associ??s, Laymoon invite les Utilisateurs ?? consulter sa politique de confidentialit?? accessible sur son Site, ?? partir du lien suivant : </Text><Text>
        Laymoon - Politique de confidentialit??</Text><Text>
        laquelle pr??cise notamment : </Text><Text>
        - Les fondements l??gaux sur lesquels repose la collecte des donn??es personnelles </Text><Text>
        - La nature des donn??es collect??es</Text><Text>
        - Les droits des Utilisateurs</Text><Text>
        - Les finalit??s des traitements
  </Text>
  <Text fontWeight={"bold"} fontSize="16">13.3. Propri??t?? intellectuelle </Text>
  <Text>Le contenu du Site et de l???Application demeure en tout temps, la propri??t?? exclusive de l???Entreprise. Les Utilisateurs n???acqui??rent aucun droit sur chacun des ??l??ments les composant, notamment mais non limitativement, les textes, logos, images, photographies, vid??os, marques, d??nominations sociales, noms de domaine sont la propri??t?? exclusive de Laymoon ou de ses partenaires. </Text><Text>
        Chacun de ces ??l??ments est prot??g?? par les lois relatives ?? la propri??t?? intellectuelle, notamment celles du droit d???auteur. </Text><Text>
        Toute reproduction ou repr??sentation, int??grale ou partielle d???un des ??l??ments composant le Site ou l???Application sans avoir obtenu l???autorisation de l???Entreprise est formellement interdite et constitue une violation du Code de la Propri??t?? Intellectuelle et engage la responsabilit?? de son auteur.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">13.4. Ind??pendance des clauses </Text>
  <Text fontWeight={"bold"} fontSize="16">13.5. Force majeure </Text>
  <Text>Aucune des Parties ne sera responsable de l???inex??cution ou du retard dans l???ex??cution de ses obligations si ce retard ou cette inex??cution r??sulte d???un cas de force majeure, telle que celleci est d??finie par la jurisprudence.</Text><Text>
        Dans l???hypoth??se o?? l???Entreprise envisagerait de se pr??valoir d'un cas de force majeure, elle devra en informer tout Utilisateur au pr??alable, par ??crit, au plus tard dans les cinq (5) jours calendaires suivant la survenance de l?????v??nement invoqu??. </Text><Text>
        En tout ??tat de cause, en cas de survenance d???un cas de force majeure, chaque partie mettra tout en ??uvre pour minimiser les effets dudit cas de force majeure.</Text><Text>
        Aux fins des pr??sentes, ne sera pas constitutifs d???un cas de force majeure toute perte d???emploi d???un Utilisateur.
  </Text>
  <Text fontWeight={"bold"} fontSize="16">13.6. R??clamations  </Text>
  <Text>Toute r??clamation en lien avec le Site, l???Application ou les Services propos??s par l???Entreprise pourra ??tre formul??e par tout Utilisateur aupr??s de l???Entreprise, par courrier adress?? au si??ge social, courriel au service clients ou contact t??l??phonique. </Text><Text>
        L???Entreprise s???engage ?? y r??pondre dans un d??lai maximal de deux (2) mois ?? compter de la r??ception de la r??clamation. </Text><Text>
        L???Entreprise et l???Utilisateur concern?? ?? l???origine de la r??clamation s???efforceront de faire leurs meilleurs efforts ?? l???effet de trouver toute solution amiable. 
  </Text>
  <Text fontWeight={"bold"} fontSize="16">14 - Droit applicable ??? Juridiction </Text>
  <Text fontWeight={"bold"} fontSize="16">14.1. Droit applicable  </Text>
  <Text>Les CG et tout document en r??sultant entre l???Entreprise et tout Utilisateur sont r??gis et interpr??t??s conform??ment au droit fran??ais. </Text>
  <Text fontWeight={"bold"} fontSize="16">14.2. Comp??tence juridictionnelle </Text>
  <Text>Tout diff??rent n?? de la validit??, l???interpr??tation ou l???ex??cution des pr??sentes sera soumis aux juridictions fran??aises comp??tentes.</Text>
 </ScrollView> 
 </Box>
 </Modal.Body>
 </Modal.Content>
</Modal>


      <Box
        style={{
          flexDirection: 'column',
          width: '100%',
          position: 'absolute',
          bottom: Platform.select({ios: 2, android: 0}),
        }}>
        <Box
          bg="white"
          p={4}
          shadow={2}
          style={{
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}>
          <HStack flexDirection="row">
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('Home1', {name: 'Home1'})}>
                <Image
                  mt={1}
                  width="6"
                  height="7"
                  alt="alt"
                  source={require('../../assets/images/home_grey.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1} pb={1}>
              <Pressable
                alignSelf="center"
                onPress={() =>
                  navigation.navigate('Status1', {name: 'Status1'})
                }>
                <Image
                  mt={1}
                  width="8"
                  height="7"
                  alt="alt"
                  source={require('../../assets/images/arrowNavbackground.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('Card1', {name: 'Card1'})}>
                <Image
                  width="35"
                  height="30"
                  alt="alt"
                  source={require('../../assets/images/cardNavBackground.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('Card4', {name: 'Card4'})}>
                <Image
                  mt={1}
                  width="6"
                  height="7"
                  alt="alt"
                  source={require('../../assets/images/listNavBackground.png')}
                />
              </Pressable>
            </Box>
            <Box flex={1}>
              <Pressable
                alignSelf="center"
                onPress={() => navigation.navigate('FAQ', {name: 'FAQ'})}>
                <Image
                  mt={1}
                  width="8"
                  height="6"
                  alt="alt"
                  source={require('../../assets/images/chatNavBackground.png')}
                />
              </Pressable>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;