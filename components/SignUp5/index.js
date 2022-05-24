import React, {useState} from "react";
import { ImageBackground, Dimensions } from "react-native";
import { Box, HStack, Text, Checkbox, Image, Pressable,ScrollView } from "native-base";
import styles from "./styles";
import Input from "../Shared/Input";
import AuthHeader from "../Shared/AuthHeader";
import Button from "../Shared/Button";
import AuthButtonLayout from "../Shared/AuthButtonLayout";
const screen = Dimensions.get("window");

const SignUp5 = ({ route, navigation }) => {
const [tcs, setTCs] = useState(false);
  const goToNextTab = () => {
    if(tcs)
    navigation.navigate("SignUp6", {
      name: "SignUp6",
    });
  };

  const goToPrev = () => {
    navigation.navigate("SignUp4", {
      name: "SignUp4",
    });
  };

  return (
    <Box
      style={styles.imageBackGround}
    >
      <AuthHeader title="Un dernier" title2="effort" />
      <HStack direction="row">
        <Box style={styles.formLayout}>
          <Box style={{ width: "90%", alignSelf: "center" }}>
            <Text p={5} style={styles.subtitle}>
              Conditions Générales
            </Text>
            <Box
              bg="gray.200"
              height={150}
              px={2}
              width={"100%"}
              borderRadius={6}
            ><ScrollView height={150}>
              <Text fontWeight={"bold"} fontSize="22">Politique de confidentialité</Text>
              <Text fontWeight={"bold"} fontSize="17">Contexte réglementaire</Text>
              <Text>ADL Capital s’engage à respecter la confiance que vous lui accordez et à appliquer les dispositions de la loi 78-17 du 6 janvier 1978 modifiée, relative à l’informatique, aux fichiers et aux libertés (www.cnil.fr), les dispositions du Règlement Européen UE 2016/679, relatif à la protection des données à caractère personnel ainsi que les principes déontologiques qui en découlent quant à l’exploitation des informations personnelles que vous pouvez être amené à lui communiquer dans le cadre de votre navigation sur son site internet (votre demande de souscription et/ou d’adhésion, ou votre demande de documentation) et ultérieurement en tant que client.</Text>
            <Text fontWeight={"bold"} fontSize="22">Que faisons-nous de vos données ?</Text>
            <Text>Vous êtes informés que les données de contact que vous fournissez lors d’une demande de documentation ou lors d’une demande de souscription seront utilisées par ADL Capital pour répondre à vos demandes et pourront dans ce cadre être également utilisées pour vous accompagner dans la souscription du produit concerné.</Text>
            <Text>Ces données seront supprimées si vous ne procédez pas à l’ouverture du produit.</Text>
            <Text>Vous êtes également informés que, lors de l’accès sur le site d´ADL Capital, des informations peuvent être temporairement conservées en mémoire ou sur votre disque dur conformément à notre politique cookies. Vous reconnaissez avoir été informé de cette pratique et vous autorisez ADL Capital à l’employer. L’acceptation des cookies est une condition sine qua non pour accéder au site. Remarque : les applications mobiles de ADL Capital ne font pas usage de cookies.</Text>
            <Text>Les clients sont informés que les données à caractère personnel recueillies par ADL Capital, lors de l’entrée en relation et ultérieurement : </Text>
            <Text>–  Sont utilisées par ADL Capital pour satisfaire à ses obligations légales et réglementaires, notamment ses obligations en matière de lutte contre la fraude, le blanchiment d’argent et le financement du terrorisme, l’évasion fiscale (FATCA et CRS), le suivi comptable des opérations bancaires, interrogations et déclarations auprès des fichiers centraux, enregistrement des opérations effectuées par téléphone, gestion de la clientèle fragile, détection, gestion et suivi des risques notamment par le biais de contrôles, gestion des titulaires décédés ou inactifs, contrôle des pièces, mobilité bancaire, authentification des clients ;</Text>
            <Text>– Sont nécessaires à l’exécution de la convention, notamment la communication avec les clients, instruction des demandes d’ouverture de produits et de services de ADL Capital, gestion des moyens de paiement, gestion des plafonds et découverts clients, des produits et services, gestion des sinistres et des incidents clients, notifications clients ;</Text>
            <Text>– Sont nécessaires à la poursuite des intérêts légitimes de ADL Capital, notamment pour l’enregistrement téléphonique et le suivi des communications clients, l’accompagnement dans le cadre de l’ouverture d’un produit ou d’un service de ADL Capital, gestion des impayés, gestion du risque et des outils d’autorisation, la réalisation d’études statistiques, la prospection et le ciblage autour des produits et services de ADL Capital et l’animation commerciale afin de permettre à ADL Capital d’améliorer la qualité de ses produits et services ainsi que la satisfaction de ses clients.</Text>
            <Text>Laymoon utilise des outils d’autorisation pour les paiements et dans le cadre des demandes d’ouverture de produits et services de ADL Capital. Sur la base de ces outils, ADL Capital peut décider d’accepter ou de refuser un paiement et/ou une demande d’un client. Ces outils se basent, selon les cas, sur les informations fournies par le client, la consultation des fichiers centraux, des statistiques relatives aux paiements ou encore des paramétrages prédéfinis par ADL Capital. L’utilisation de ces outils contribue à la politique globale de gestion du risque de ADL Capital.</Text>
            <Text fontWeight={"bold"} fontSize="17">Vos données sont-elles transmises à des tiers ?</Text>
            <Text>Laymoon est responsable du stockage, de l’accès et du traitement des données à caractère personnel en sa possession et peut être amené à échanger les données à caractère personnel de ses clients strictement nécessaires à la prestation avec ses prestataires ou partenaires pour la gestion de la relation client notamment Treezor.</Text>
            <Text>Mentions légales de notre fournisseur Treezor.</Text>
            <Text>Politique de confidentialité de notre fournisseur Treezor.</Text>
            <Text>A l’occasion de diverses opérations liées à des nécessités de gestion interne, hors opérations bancaires et financières,ADL Capital vous informe que vos données à caractère personnel peuvent faire l’objet d’un transfert dans un pays de l’Union Européenne ou hors Union Européenne. En cas de transferts de données à caractère personnel vers un pays hors Union Européenne, ADL Capital s’assure que le pays concerné bénéficie d’une protection adéquate et apporte le même niveau de garanties, ainsi ces transferts ne se font que vers des pays ayant fait l’objet d’une décision d’adéquation de la Commission Européenne.</Text>
            <Text>S’agissant plus spécifiquement des transferts de données à caractère personnel liées à des opérations bancaires et financières, ceux-ci sont réalisés strictement dans le respect des différentes réglementations et normes interbancaires qui leur sont applicables.</Text>
            <Text>Laymoon et ses prestataires sont soumis au secret professionnel à l’égard des données à caractère personnel des clients de ADL Capital.</Text>
            <Text>Laymoon s’engage à ne pas communiquer vos informations à des fins commerciales à ses partenaires.</Text>
            <Text fontWeight={"bold"} fontSize="17">Comment conservons-nous vos données ?</Text>
            <Text>Les données à caractère personnel sont conservées par ADL Capital a minima pendant les délais légaux de conservation et/ou de prescription, soit par exemple :</Text>
            <Text>– Pendant 5 ans à compter de l’exécution de l’opération,</Text>
            <Text>– Pendant la durée de la relation contractuelle augmentée des délais de prescription pour les éléments contractuels, et</Text>
            <Text>– Pendant 10 ans pour les informations comptables.</Text>
            <Text>Au-delà de ces délais, ADL Capital a la possibilité d’effacer les données archivées du client.</Text>
            <Text>Les données non effacées pourront être mises à votre disposition à votre demande.</Text>
            <Text fontWeight={"bold"} fontSize="17">Comment exercer vos droits sur vos données à caractère personnel :</Text>
            <Text>Vous pouvez exercer vos droits par une demande écrite, et en justifiant votre identité (copie recto/verso de votre carte d’identité), auprès du Délégué à la Protection des Données de ADL Capital à :</Text>
            <Text >ADL Capital 34 avenue des champs Elysées 75008 Paris ou par email à : dpo@laymoon.fr</Text>
            <Text>Vous pouvez à tout moment, après l’expiration des délais de conservation, demander l’effacement de vos données à caractère personnel conformément aux présentes.</Text>
            <Text>Vous pouvez également exercer à tout moment sur vos données à caractère personnel votre droit d’accès, droit de rectification, droit à la limitation des données, droit à la portabilité et droit d’opposition conformément aux présentes, et dans les conditions et limites prévues par les articles 15 à 21 du Règlement Européen UE 2016/679, relatif à la protection des données.</Text>
            <Text>Dans le cadre du droit d’accès, vous pouvez obtenir une copie des données à caractère personnel vous concernant et toutes les informations y afférentes auxquelles vous n’avez pas accès depuis votre espace Client.</Text>
            <Text>Dans le cadre de votre droit de rectification, vous pouvez modifier directement certaines informations dans votre espace Client ou en contactant le Service Relation Client ADL Capital. Pour toute donnée à caractère personnel non modifiable par ces moyens, vous pouvez en demander la rectification, le cas échéant sur présentation de justificatifs.</Text>
            <Text>Dans le cadre de votre droit à la portabilité, vous pouvez demander à ADL Capital de vous transmettre les données à caractère personnel vous concernant que vous avez fourni à ADL Capital dans le cadre de votre entrée en relation et conservée par ADL Capital. Vous pouvez également demander à ce que ADL Capital envoie directement ces données à caractère personnel à un autre responsable de traitement, auquel cas vous devez nous fournir les coordonnées du destinataire et le mode de transmission sécurisé sélectionné par celui-ci.</Text>
            <Text>Dans le cadre de votre droit d’opposition, vous pouvez demander à vous opposer, sans frais, à ce que les données à caractère personnel vous concernant soient utilisées à des fins de prospection commerciale ou à des fins statistiques par ADL Capital (hors traitements ayant pour base juridique le fonctionnement des produits et services fournis par ADL Capital, ou une obligation légale ou réglementaire), dans votre espace Client ou à défaut en contactant le DPO de ADL Capital.</Text>
            <Text>En cas de réponse non satisfaisante ou d’absence de réponse de ADL Capital dans les délais réglementaires, vous pouvez déposer une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés.</Text>
            <Text>Si vous souhaitez obtenir communication des entretiens téléphoniques enregistrés, vous devez en faire la demande écrite auprès du Délégué à la Protection des Données de ADL Capital à :</Text>
            <Text>ADL Capital 34 avenue des champs Elysées 75008 Paris ou par email à :dpo@laymoon.fr</Text>
            <Text mt={5} fontWeight={"bold"} fontSize="22">CONDITIONS GÉNÉRALES DU COMPTE</Text>
            <Text fontWeight={"bold"} fontSize="17">ADL Capital</Text>
            <Text fontWeight={"bold"} fontSize="17">Laymoon</Text>
            <Text fontWeight={"bold"} fontSize="17">Table des matières</Text>
            <Text>
                  1-	L’entreprise	4</Text><Text>
                  2-	Champs d’application des conditions générales	5</Text><Text>
                  3-	Mise à jour des Conditions générales	6</Text><Text>
                  4-	Objet	7</Text><Text>
                  5-	Le site internet	8</Text><Text>
                  6-	L’application	9</Text><Text>
                  6.1- Accès aux services	9</Text><Text>
                  6.2- Inscription	9</Text><Text>
                  6.3. Signature électronique des documents	10</Text><Text>
                  6.3.1. Définition	10</Text><Text>
                  6.3.2. Valeur probatoire	10</Text><Text>
                  6.3.3. Utilisation par l’Entreprise	10</Text><Text>
                  6.3.4. Consentement des Utilisateurs	10</Text><Text>
                  6.4. Disponibilité des services (maintenance de l’application)	10</Text><Text>
                  6.5. Parrainage	11</Text><Text>
                  7-	Les services	12</Text><Text>
                  7.1. Le Compte Principal	12</Text><Text>
                  7.1.1. Présentation	12</Text><Text>
                  7.1.2. Ouverture du Compte Principal	12</Text><Text>
                  7.1.3. Fonctionnement du Compte	12</Text><Text>
                  7.2. Le service de paiement	13</Text><Text>
                  7.2.1. Virements 	13</Text><Text>
                  7.2.2. Carte	13</Text><Text>
                  7.2.3. Transactions frauduleuses liées à la carte	14</Text><Text>
                  7.4. Le compte Coffre	14</Text><Text>
                  7.4.1. Présentation	14</Text><Text>
                  7.4.2. Ouverture du Compte Coffre	15</Text><Text>
                  7.4.3. Fonctionnement du Compte	15</Text><Text>
                  8-	Tarifs	16</Text><Text>
                  9-	Garanties et responsabilités	17</Text><Text>
                  9.1 Principe	17</Text><Text>
                  9.2 Limitations de responsabilité	17</Text><Text>
                  9.3 Responsabilité de l’Utilisateur	17</Text><Text>
                  10-	Suspensions et résiliation de l’accès aux services	18</Text><Text>
                  10.1. Résiliation du Compte Principal et des Services associés	18</Text><Text>
                  10.1.1. Résiliation ou suspension par Laymoon	18</Text><Text>
                  10.2. Compte Principal inactif	18</Text><Text>
                  10.3. Carte bleu inactive	19</Text><Text>
                  11-	Rétractation	20</Text><Text>
                  12-	Durée	21</Text><Text>
                  13-	Stipulations générales	22</Text><Text>
                  13.1. Preuves	22</Text><Text>
                  13.2. Données personnelles.	22</Text><Text>
                  13.3. Propriété intellectuelle	22</Text><Text>
                  13.4. Indépendance des clauses	22</Text><Text>
                  13.5. Force majeure	23</Text><Text>
                  13.6. Réclamations	23</Text><Text>
                  14-	Droit applicable – Juridiction	24</Text><Text>
                  13.1. Droit applicable	24</Text><Text>
                  13.2. Compétence juridictionnelle	24
                  </Text>
            <Text fontWeight={"bold"} fontSize="17">1 - L’entreprise</Text>
            <Text>Laymoon est un site édité par l’Entreprise ADL Capital, société par actions simplifiée au capital de 100 001 euros, immatriculée au RCS de Paris sous le numéro 897690160 et dont le siège social se situe au 34 Avenue des Champs Elysées 75008 Paris, France, est amenée à collecter et traiter certaines données à caractère personnel des personnes qui utilisent le site Internet qu’elle édite disponible à l’adresse URL www.Laymoon.eu (ci-après désigné le « Site ») ainsi que l’Application (ci-après désignées les « Personnes Concernées »). Laymoon est un prestataire de services digital pour les personnes majeures. </Text><Text>

                Laymoon est le gestionnaire du programme et un intermédiaire autorisé, agissant au nom de l'UAB "TREEZOR" - une Société par Actions Simplifiée constituée en France (numéro d'entreprise : 807 465 059  dont le siège social  est situé au 33 avenue de Wagram, 75017 Paris.  Treezor est un établissement de monnaie électronique ("EME") délivré par l’Autorité de Contrôle Prudentiel et de Résolution (ACPR) et est autorisée à fournir les services de paiement prévus aux 3° et 5° du II de l’article L. 314-1 du code monétaire et financier. Plus précisément, en sa qualité de prestataire de services de paiement, TREEZOR dispose des agréments pour l’émission et la gestion de monnaie électronique, l’exécution d’opérations de paiement associées à un compte, notamment l’exécution des prélèvements et des virements, y compris les ordres permanents, ainsi que l’émission d’instruments de paiement et l’acquisition d’ordres de paiement.</Text><Text>
                En sa qualité d'agent de prestataire de services de paiement de Treezor, au sens des articles L.523-1 et suivants du Code monétaire et financier, Laymoon fournit des services de paiement au nom et pour le compte de Treezor. A cet égard les Utilisateurs reconnaissent et acceptent le  Contrat Cadre qui définit les relations entre Treezor et les Utilisateurs accessible à l'adresse suivante :  https://www.laymoon.fr/conditions-generales-du-compte/</Text><Text>

                Le Site est hébergé par la société OVH SAS : 2 rue Kellermann – BP 80157 59053 ROUBAIX CEDEX 1.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">2 - Champs d’application des conditions générales</Text>
            <Text>Les présentes conditions générales (les « CG ») s’appliquent de façon exclusive entre l’Entreprise et tout Utilisateur de ses Services, que l’Utilisation intervienne via le Site ou l’Application. Les Services sont exclusivement réservés aux Utilisateurs, à l’exclusion de toute autre personne. Toute Utilisation des Services emporte de plein droit l’application et la pleine acceptation des présentes CG, dans leur version en vigueur à la date de l’Utilisation.
            </Text>
            <Text> Laymoon se réserve le droit de mettre à jour et de modifier librement, à tout moment les CG, après en avoir informé les Utilisateurs au préalable. Tout Utilisateur qui refuserait la nouvelle version des CG à compter de leur date d’entrée en vigueur sera alors tenu de cesser l’Utilisation des Services. L’Utilisateur ne consentant pas aux présentes ne pourra pas utiliser le Service proposé par Laymoon.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">3 - Mise à jour des Conditions générales</Text>
            <Text>Laymoon se réserve le droit de modifier tout ou partie des présentes.	</Text><Text>
                  Toute modification prendra effet à compter de sa publication sur le Site et ne s’appliquera qu’aux Utilisateurs utilisant les Services postérieurement à son entrée en vigueur. </Text><Text>
                  Laymoon s’engage à informer l’Utilisateur des modifications apportées aux présentes dès leur  mise en ligne sur le Site et l’Application.</Text><Text>
                  À défaut d’adhésion aux nouvelles CG, l’Utilisateur dispose d’un délai de soixante (60) jours à   compter de la date de notification pour en faire part à Laymoon par courrier électronique.</Text><Text>
                  Dans l’hypothèse où l’Utilisateur n’aurait pas notifié son désaccord dans le délai prévu cidessus, il sera réputé avoir accepté les nouvelles modifications apportées.</Text><Text>
                  En cas de changement de tarification, Laymoon s’engage à informer l’Utilisateur par notification  et par mail deux (2) mois avant la mise en vigueur des nouveaux tarifs.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">4 - Objet</Text>
            <Text>Les CG ont pour objet de définir les termes et modalités d’accès aux Services, en particulier, la mise à disposition, du Compte Principal, de la Carte et des Services de Paiement attachés au Compte Principal.</Text>
            <Text fontWeight={"bold"} fontSize="17">5 - Le site internet</Text>
            <Text>Le site internet de Laymoon a uniquement une vocation commerciale et publicitaire.</Text><Text>
                  Le Site est accessible à l’adresse suivante : https://Laymoon.eu/.</Text><Text>
                  Il contient :</Text><Text>
                  - Les informations réglementaires relatives au projet et au site web (mentions légales, politique de confidentialité etc …) ;</Text><Text>
                  - Les informations relatives aux produits proposés par ADL Capital ;</Text><Text>
                  - Des pages de vente appelées « Landing pages » permettant aux visiteurs de s’inscrire aux Newsletters d’ADL Capital, conformément à la réglementation européeenne en vigueur en matière de protection des données ;</Text><Text>
                  - Des pages d’informations et de communication contenues dans la partie « Blog » du site web.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">L’application</Text>
            <Text fontWeight={"bold"} fontSize="16">6.1- Accès aux services</Text>
            <Text>Les Services de l’Entreprise sont accessibles par l’intermédiaire de l’Application, sous réserve de s’être préalablement inscrit, en suivant la procédure prévue à cet effet (cf. § 6.2.). </Text><Text>
                  L’application est disponible depuis le site web ou en tapant le nom XXX sur les moteurs de recherche d’application App Store et Google Play, lesquels requièrent l’utilisation d’un identifiant et d’un mot de passe propres à l’Utilisateur. L’utilisation de l’Application requiert de disposer d’un smartphone disposant d’une connexion à internet.</Text><Text>
                  L’Entreprise ne pourra en aucun cas être tenue pour responsable des difficultés de téléchargement de l’Application à partir du Google Play Store ou de l’App Store.</Text><Text>
                  L’accès aux Services requiert également l’acceptation par l’Utilisateur du Contrat Laymoon et des éventuelles annexes, laquelle fait l’objet d’un accord tacite lors de l’inscription.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">6.2- Inscription</Text>
            <Text>L’inscription se déroule de la façon suivante :</Text><Text>
                  1°) Téléchargement de l’application Laymoon</Text><Text>
                  2°) Inscription à Laymoon </Text><Text>
                  3°) Une fois l’inscription validée, l’accès aux Services requiert, sur l’Espace Dédié de l’Utilisateur sur le Site ou l’Application de : </Text><Text>
                  - Remplir un formulaire détaillé comportant des Données Personnelles, en particulier, les nom(s), prénom(s), date et lieu de naissance, nationalité, adresse et pays de résidence, numéro de téléphone portable, et le cas échéant, la profession de l’Utilisateur ; </Text><Text>
                  - Prendre en photo recto-verso une pièce d’identité (carte d’identité, passeport), les photos d’écran, images ou photocopies ne seront pas acceptées, seule l‘originale peut être validée. </Text><Text>
                  Pour les personnes ne disposant pas de pièce d’identité française, un justificatif de domicile de moins de trois mois devra être envoyé à l’adresse suivante : contact@laymoon.fr; </Text><Text>
                  Un selfie sera également à effectuer depuis notre outil intégré afin de valider votre identité. </Text><Text>
                  - Remplir toutes les conditions énumérées lors de l’inscription. Les vérifications sont réalisées par notre partenaire et aucun remboursement ne sera effectué si l’une des conditions énumérées avant le premier paiement n’est pas respectée. </Text><Text>
                  L’Entreprise se réserve le droit de demander à ses Utilisateurs toute information ou document complémentaire dans le cadre de ses obligations légales et réglementaires. </Text><Text>
                  Les informations et documents fournis par l’Utilisateur doivent être exacts et conformes à la réalité, sous peine de suspension ou de cessation des Services, au choix de l’Entreprise. En cas de modification de tout ou partie des informations et documents communiqués, l’Utilisateur doit en informer l’Entreprise afin que celle-ci puisse les mettre à jour. En l’espèce, des frais peuvent être appliqués (cf. §8.)
            </Text>
            <Text fontWeight={"bold"} fontSize="17">6.3. Signature électronique des documents</Text>
            <Text fontWeight={"bold"} fontSize="16">6.3.1 Définition</Text>
            <Text> La signature numérique (parfois appelée signature électronique) est un système de signature permettant de garantir l'intégrité d'un document électronique et d'en authentifier l’auteur. Son apposition sur un document manifeste le consentement du signataire sur le document signé. </Text>
            <Text fontWeight={"bold"} fontSize="16">6.3.2. Valeur probatoire </Text>
            <Text>En application de l’article 1366 du code civil, la signature numérique a la même force probante que la signature manuscrite sous réserve que puisse être dûment identifiée la personne dont elle émane et que le support utilisé soit établi et conservé dans des conditions de nature à en garantir l’intégrité. </Text>
            <Text fontWeight={"bold"} fontSize="16">6.3.3. Utilisation par l’Entreprise  </Text>
            <Text>L’Entreprise utilise des outils techniques de signature numérique fournis par elle-même ou  par des  prestataires spécialisés répondant aux exigences légales et réglementaires applicables en pareille matière. Il en est de même pour l’archivage des documents des Utilisateurs générés par le Site et/ou l’Application.</Text>
            <Text fontWeight={"bold"} fontSize="16">6.3.4. Consentement des Utilisateurs </Text>
            <Text>Tout Utilisateur du Site ayant souscrit aux Services reconnaît être valablement engagé par sa  signature numérique, les actes signés électroniquement ayant la même force probante que ceux signés au format papier.</Text><Text>
                  Lors de la création du Compte Principal, Laymoon s’assurera de l’identité de l’Utilisateur. La validation de l’Utilisateur marque son consentement sur les documents contractuels le liant à l’Entreprise et acceptation des présentes. </Text><Text>
                  L’Utilisateur reconnaît en particulier que tout acte auquel est associé un procédé sécurisé d’authentification est présumé signé par lui-même, sauf preuve contraire.</Text><Text>
                  L’Utilisateur reconnaît que tout contrat établi via le Site ou l’Application prend effet, sauf  dispositions spécifiques contraires, à compter de la date d’envoi du message de confirmation.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">6.4. Disponibilité des services (maintenance de l’application)  </Text>
            <Text>Le Site et l’Application sont accessibles 24h/24, 7j/7 à l’ensemble des Utilisateurs.</Text><Text>
                  L’Entreprise se réserve le droit, sans préavis, ni indemnité, de suspendre temporairement ou définitivement le Site et l’Application ou l’accès à un ou plusieurs Services afin d’effectuer une </Text><Text>
                  mise à jour, des modifications ou encore un changement sur les méthodes opérationnelles, les serveurs et les heures d’accessibilité, sans que cette liste ne soit limitative.</Text><Text>
                  L’Entreprise se réserve le droit d’apporter au Site, à l’Application et aux Services toute amélioration et modification qu’elle jugera utile ou nécessaire dans le cadre du bon fonctionnement du Site, de l’Application et de ses Services.</Text><Text>
                  Pour conclure, Laymoon ne saurait être tenue responsable d’une interruption des Services, qu’elle soit volontaire ou non, étant précisé qu’elle s’engage à fournir ses meilleurs efforts pour limiter les interruptions qui lui seraient imputables.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">6.5. Parrainage </Text>
            <Text>Laymoon propose à ses Utilisateurs un système de parrainage leur permettant de voir leur Compte Principal crédité d’un montant de 1 euros par parrainage au bénéfice du parrain pendant une période de 2 ans, sous réserve de l’inscription finalisée du parrainé et de l’ouverture par celui-ci d’un Compte Principal. Les gains du Parrain seront crédités directement sur son Compte Principal Laymoon dès l’activation définitive de la carte bleu (ci-après la « Carte ») du parrainé. Si le parrainé use de son droit de rétraction, le parrainage devient alors caduc et l’Entreprise peut débiter le Compte Principal du parrain du montant du parrainage associé. Le nombre de parrainages n’est cependant pas limité. Laymoon se réserve le droit de mettre un terme à tout instant au parrainage ou d’en modifier les conditions ainsi que le montant, ce que l’Utilisateur reconnaît et accepte. Si l’Entreprise est amenée à constater des irrégularités d’un Utilisateur dans le cadre du parrainage, elle aura la faculté de prendre toute mesure adéquate afin de faire cesser ces dites, en ce compris, la suspension ou la clôture du Compte Principal de l’Utilisateur concerné.</Text>
            <Text fontWeight={"bold"} fontSize="17">7 - Les services</Text>
            <Text>Laymoon propose les services ci-après à ses Utilisateurs. Ces derniers pourront être complétés et/ou amendés par l’Entreprise. </Text>
            <Text fontWeight={"bold"} fontSize="16">7.1. Le Compte Principal </Text>
            <Text fontWeight={"bold"} fontSize="16">7.1.1. Présentation </Text>
            <Text>Le Compte Principal proposé par Laymoon est un compte de paiement en euros, sans autorisation de découvert. Le Compte Principal est ouvert dans les livres de Laymoon, société agréée en tant qu’établissement électronique de paiement et autorisée en conséquence à procéder aux opérations de paiement et à l’émission de la Carte. </Text><Text>
                  Chaque Compte Principal est attaché un numéro unique dénommé IBAN. Le Compte Principal permet la réalisation des opérations suivantes : </Text><Text>
                  - Des opérations au débit : enregistrement de paiements réalisés par la Carte, émission de virements. - Des opérations au crédit : réception de virements et/ou virements instantanés. 
            </Text>
            <Text fontWeight={"bold"} fontSize="16">7.1.2. Ouverture du Compte Principal </Text>
            <Text>Le Compte Principal est accessible aux majeurs ayant 18 ans révolus à la date d’ouverture.</Text><Text>
                  L’ouverture du Compte Principal requiert le respect des conditions suivantes : </Text><Text>
                  - Communication des informations demandées sur le Site et/ou l’Application</Text><Text>
                  - Transmission de l’ensemble des documents demandés (pièce d’identité ou passeport, copie d’un justificatif de domicile </Text><Text>
                  - Disposition d’un numéro de téléphone mobile avec indicatif français </Text><Text>
                  - Être résident d'un des pays de l'Union Européenne (hors outre-mer européen)</Text><Text>
                  - Acceptation des présentes CG Les sommes promises par l’Entreprise à l’Utilisateur au titre de l’ouverture du Compte Carte seront créditées sur le Compte Principal dans les quatre-vingt-dix jours suivant son ouverture. 
              </Text>
            <Text fontWeight={"bold"} fontSize="16">7.1.3. Fonctionnement du Compte </Text>
            <Text>Le Compte Principal peut être géré par l’intermédiaire de l’Application.</Text><Text>
                  Son solde correspond à la différence entre les opérations au crédit et les opérations au débit. Il doit toujours être créditeur, sous peine de refus des paiements ou des prélèvements présentés. Le cas échéant, des frais peuvent être appliqués (cf§8). </Text><Text>
                  Dans l’hypothèse où une opération serait présentée, acceptée par l’Entreprise mais aurait pour effet de mettre le Compte Principal à découvert, l’Utilisateur sera tenu d’approvisionner le Compte Principal sans délai. Des frais pour défaut de provision et/ou relance de paiement pourront lui être appliqués par l’Entreprise en cas de transaction refusée. </Text><Text>
                  L’ensemble des opérations du Compte Principal fera l’objet d’un relevé mensuel, accessible via l’Application. Sauf opération de maintenance, le Compte Principal est accessible 24h/24 et 7 j/7, au moyen d’un système à double authentification conformément à la réglementation en vigueur. </Text><Text>
                  Outre la consultation du solde, le Compte Principal permet la réalisation des opérations suivantes :</Text><Text>
                  - Enregistrement de comptes de bénéficiaires </Text><Text>
                  - Virements</Text><Text>
                  - Réception de toutes notifications et alertes </Text><Text>
                  - Gestion de la Carte (en particulier, toute opposition sur celle-ci)</Text><Text>
                  - Impression du relevé d’identité bancaire du Compte Principal</Text><Text>
                  - Mise à jour des informations personnelles </Text><Text>
                  - Communication de documents </Text><Text>
                  - Contacts avec l’équipe Laymoon </Text><Text>
                  L’ensemble des opérations de paiement sur le Compte Principal sont initiées par l’Utilisateur par le biais de l’Application et traitées par Laymoon.
             </Text>
            <Text fontWeight={"bold"} fontSize="16">7.2. Le service de paiement</Text>
            <Text fontWeight={"bold"} fontSize="16">7.2.1. Virements</Text>
            <Text>Laymoon vous permet de réaliser tous virements par l’intermédiaire de l’Application.</Text><Text>
                  La mise en place d’un virement requiert la communication à Laymoon des références IBAN et BIC du compte et de la banque du destinataire dans le cas d’un virement SWIFT.</Text><Text>
                  La mise en place et la réalisation de virements sont gratuites excepté lorsque les méthodes de  virements SWIFT ou SEPA Instant (virements instantanés) sont sélectionnées. Cependant, des  plafonds de gratuité peuvent être appliqués pour les virements SEPA. (cf §8)</Text><Text>
                  L’Utilisateur pourra, à tout moment consulter l’historique de ses virements, ajouter de nouveaux bénéficiaires ou en supprimer, et procéder à tout virement, sous réserve que le Compte Principal soit créditeur.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">7.2.2. Carte </Text>
            <Text>En ouvrant un Compte Principal, Laymoon vous donne accès gratuitement à une carte de paiement émise par Laymoon, son prestataire de paiement. </Text><Text>
                  La Carte peut être utilisée sans frais partout dans le monde. Des frais spécifiques peuvent cependant être appliqués selon la tarification en vigueur (cf §8). </Text><Text>
                  En cas de paiement ou de retrait dans une devise autre que l’euro, Laymoon appliquera un taux de conversion, lequel pourra donner lieu à une éventuelle régularisation sur le Compte Principal post opération. </Text><Text>
                  La Carte est personnelle et ne peut être prêtée par l’Utilisateur. </Text><Text>
                  Son utilisation requiert son activation par l’intermédiaire d’un paiement avec code PIN ou un retrait. La Carte fonctionne au moyen d’un code PIN confidentiel à 4 chiffres qui sera transmis à l’Utilisateur ou du cryptogramme mentionné sur l’Application dans la rubrique « Informations de ma carte ». En cas de composition erronée du code ou du cryptogramme à trois reprises, la Carte est automatiquement désactivée. </Text><Text>
                  La Carte comporte une durée de validité au-delà de laquelle elle deviendra inactive. Préalablement à son échéance, une nouvelle « Carte » sera adressée à l’Utilisateur. L’Utilisateur peut bloquer la Carte à tout moment au moyen de l’Application ou en contactant le service client de l’Entreprise.</Text><Text>
                  Les opérations de retrait requièrent l’utilisation de distributeurs du même réseau que la Carte. </Text><Text>
                  En cas de vol ou de perte de la Carte, tout Utilisateur est tenu de faire opposition dans les meilleurs délais. L’opposition peut être mise en place via l’Application ou en contactant le service client de Laymoon. Les paiements effectués via la Carte avant opposition demeurent à la charge de l’Utilisateur si ceux-ci ont été faits avec composition du code secret ou en cas d’agissements frauduleux de l’Utilisateur ou de négligence grave de ce dernier. En l’espèce, l’envoi d’une nouvelle carte peut engendrer des frais supplémentaires (cf §8).
            </Text>
            <Text fontWeight={"bold"} fontSize="16">7.2.3. Transactions frauduleuses liées à la carte </Text>
            <Text>En cas de transactions non autorisées, vous devez tout d'abord bloquer les paiements par carte à partir de votre Application et changer également vos numéros de carte virtuelle. Nous vous conseillons vivement de commander une nouvelle carte afin d’éviter que de nouvelles transactions frauduleuses ne se produisent. Il est important de le faire avant que nous prenions en charge votre demande. </Text><Text>
                  Cette demande doit être effectuée par envoi en courrier AR à l’adresse de notre siège social : </Text><Text>
                  ADL Capital, 34 Avenue des Champs-Elysées, 75008 Paris.</Text><Text>
                  Votre demande écrite doit mentionner les transactions identifiées comme frauduleuses ainsi que tous renseignements complémentaires utiles à votre identification (nom, prénom, date de naissance, code de parrainage).</Text><Text>
                  Dès réception de ce courrier, l’Entreprise prendra connaissance de votre cas et le traitera dans les délais légaux.</Text><Text>
                  Nous attirons votre attention sur le fait que cette démarche est uniquement destinée aux transactions frauduleuses, dans le cas où celle-ci serait destinée à bloquer des paiements suite à un accord avec un marchand, cela pourrait entraîner un litige commercial.</Text><Text>
                  Après investigations, s’il s’avère que le client ait fait une fausse déclaration, l’Entreprise se réserve le droit de débiter le Compte Principal du titulaire du montant de la somme précédemment contestée par le client qui aura été préalablement créditée lors de la prise en charge de la contestation par l’Entreprise ainsi que des frais supplémentaires liés aux investigations effectuées.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">7.4. Le compte Coffre </Text>
            <Text fontWeight={"bold"} fontSize="16">7.4.1. Présentation</Text>
            <Text>Le Compte Coffre proposé par Laymoon est un compte d’économie permettant aux utilisateurs d’épargner une partie de leurs revenus. Ce compte n’apporte ni dividendes ni frais supplémentaires pour l’utilisateur. </Text>
            <Text>Chaque Compte Coffre est attaché un numéro unique dénommé IBAN. Le Compte Coffre permet la réalisation des opérations suivantes : </Text><Text>
                  - Des opérations au débit : émission de virements. </Text><Text>
                  - Des opérations au crédit : réception de virements. 
            </Text>
            <Text fontWeight={"bold"} fontSize="16">7.4.2. Ouverture du Compte Coffre </Text>
            <Text>Le Compte Principal est accessible aux majeurs ayant 18 ans révolus à la date d’ouverture.</Text><Text>
                  L’ouverture du Compte Coffre est générée automatiquement avec l’ouverture du Compte Principal.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">7.4.3. Fonctionnement du Compte  </Text>
            <Text>Le Compte Principal peut être géré par l’intermédiaire de l’Application.</Text><Text>
                  Son solde correspond à la différence entre les opérations au crédit et les opérations au débit. Il ne peut qu’être créditeur.</Text><Text>
                  L’ensemble des opérations du Compte Principal fera l’objet d’un relevé mensuel, accessible via l’Application. Sauf opération de maintenance, le Compte Principal est accessible 24h/24 et 7 j/7, au moyen d’un système à double authentification conformément à la réglementation en vigueur. </Text><Text>
                  L’ensemble des opérations de paiement sur le Compte Coffre sont initiées par l’Utilisateur par le biais de l’Application et traitées par Laymoon.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">8 - Tarifs </Text>
            <Text>Les Services, Tarifs ainsi que l’ensemble des frais applicables par l’Entreprise sont consultables directement sur le Site internet Laymoon.fr en cliquant  sur la rubrique tarif</Text><Text>
                  Dans le cas d’un changement important, Laymoon s’engage à prévenir ses Utilisateurs dans un délai de deux (2) mois.</Text><Text>
                  N.B : le prélèvement mensuel du montant de la formule tarifaire choisie s’effectue chaque mois directement sur le compte Laymoon. En cas de provisions insuffisantes, tout paiement est bloqué et peut engendrer des frais supplémentaires.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">9 - Garanties et responsabilités </Text>
            <Text fontWeight={"bold"} fontSize="16"> 9.1 Principe </Text>
            <Text>Laymoon se réserve le droit d’apporter au Site, à l’Application et aux Services toute amélioration et modification qu’elle jugera utile ou nécessaire dans le cadre du bon fonctionnement du Site, de l’Application et de ses Services.</Text>
            <Text fontWeight={"bold"} fontSize="16">9.2 Limitations de responsabilité </Text>
            <Text>Laymoon ne saurait être tenue responsable d’une interruption des Services, qu’elle soit volontaire ou non, étant précisé qu’elle s’engage à fournir ses meilleurs efforts pour limiter les interruptions qui lui seraient imputables.</Text><Text>
                  Laymoon décline également toute responsabilité au titre de toute perte de données, survenance de tous bugs informatiques ou de tous dommages consécutifs à toute intrusion frauduleuse d’un tiers sur le Site ou l’Application, eux-mêmes consécutifs à toute faute ou négligence volontaire ou involontaire d’un Utilisateur. </Text><Text>
                  À titre de condition expresse du consentement de Laymoon au titre des Services, sa responsabilité à l’égard de tout Utilisateur ne saurait être supérieure au montant facturé à ce dernier au cours des six derniers mois précédant l’engagement de sa responsabilité par l’Utilisateur concerné. </Text><Text>
                  En tout état de cause, Laymoon ne saurait être responsable de tout dommage indirect causé à un Utilisateur, quelle qu’en soit la cause. </Text><Text>
                  Laymoon ne garantit pas à l’Utilisateur la pleine et entière satisfaction relative aux Services proposés par le biais du Site et/ou de l’Application.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">9.3 Responsabilité de l’Utilisateur </Text>
            <Text>L’Utilisateur est seul responsable de la confidentialité de ses identifiants et mots de passe et/ou de toute utilisation faite par lui du Site ou de l’Application et des conséquences qui y sont attachées.</Text><Text>
                  Tout Utilisateur s’interdit de porter atteinte, de quelque manière que ce soit, au Site ou à l’Application et de faire une utilisation de ceux-ci non conformes à leur finalité. Les Utilisateurs sont seuls responsables des informations communiquées à l’Entreprise et de leur éventuelle mise à jour. Tout Utilisateur garantit l’Entreprise contre toute action de tiers consécutive à tout manquement aux présentes, qu’il s’engage à respecter.
            </Text>
            <Text fontWeight={"bold"} fontSize="17">10 - Suspensions et résiliation de l’accès aux services </Text>
            <Text fontWeight={"bold"} fontSize="16">10.1. Résiliation du Compte Principal et des Services associés </Text>
            <Text>Les Services proposés par Laymoon le sont à durée indéterminée. Tout Utilisateur dispose de la  faculté de mettre un terme aux Services et de clôturer son Compte Carte sur simple demande au service client de Laymoon, par courrier recommandé avec accusé de réception adressé au siège social de l’Entreprise.</Text><Text>
                  En cas de clôture de tout Compte Principal et des Services associés, Laymoon prendra acte de la résiliation de l’Utilisateur au moyen de l’envoi d’un courriel à ce dernier. Le solde créditeur du Compte Principal sera restitué par Laymoon au titulaire au terme d’un délai maximum de 30 jours après présentation d’un autre RIB, par voie de virement sur le compte  dont les coordonnées seront communiquées par l’Utilisateur à Laymoon.</Text><Text>
                  La clôture du Compte Principal entraînera automatiquement et de plein droit, sans formalité additionnelle, le blocage définitif de la Carte.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">10.1.1. Résiliation ou suspension par Laymoon </Text>
            <Text>Laymoon dispose également de la faculté de suspension ou résiliation de tout Compte Principal moyennant un préavis de trois mois, sans motif, ou immédiat, pour juste motif, en particulier, en cas de constatation d’opérations irrégulières sur le Compte Principal (fraude, impayés répétés, blanchiment, etc.) ou de non-respect des présentes.</Text><Text>
                  Le choix entre la résiliation et la suspension appartient à l’Entreprise, sans recours possible. </Text><Text>
                  En cas de suspension, le Compte pourra être réactivé sur demande de l’Utilisateur, et ce, sous un délai de quinze jours après la suspension.</Text><Text>
                  Tout décès d’un Utilisateur entraîne de plein droit la suspension immédiate de la Carte et de son Compte Carte puis sa fermeture dans les trente jours suivant le transfert du solde au notaire en charge de la succession.</Text><Text>
                  En cas de gel du Compte Principal par nos services de conformité suite à un usage anormal de ce dernier, des frais seront prélevés compte tenu des investigations qui peuvent être diligentées. (cf§8)
            </Text>
            <Text fontWeight={"bold"} fontSize="16">10.2. Compte Principal inactif </Text>
            <Text>Conformément aux dispositions de l’article L. 312-19 du code monétaire et financier, Laymoon recensera chaque année la liste des comptes-cartes ouverts par les Utilisateurs devenus inactifs. </Text><Text>
                  Un compte est considéré comme inactif : </Text><Text>
                  1° Soit à l'issue d'une période de douze mois au cours de laquelle les deux conditions suivantes sont remplies : </Text><Text>
                  a) Le compte n'a fait l'objet d'aucune opération, hors inscription d'intérêts et débit par l'établissement tenant le compte de frais et commissions de toute nature ou versement de produits ou remboursement de titres de capital ou de créance ; </Text><Text>
                  b) Le titulaire du compte, son représentant légal ou la personne habilitée par lui ne s'est pas manifesté, sous quelque forme que ce soit, auprès de Laymoon. </Text><Text>
                  2° Soit, si son titulaire est décédé, à l'issue d'une période de douze mois suivant le décès au cours de laquelle aucun de ses ayants droit n'a informé l'établissement tenant le compte de sa volonté de faire valoir ses droits sur les avoirs et dépôts qui y sont inscrits. </Text><Text>
                  En cas de compte inactif, Laymoon en informera le titulaire ou son représentant légal ou, le cas échéant, ses ayants droit connus, par tout moyen à sa disposition et leur indiquera les conséquences qui y sont attachées, en particulier quant au sort des fonds, lesquels seront transférés à la Caisse des Dépôts et Consignations dans les délais légaux et réglementaires. </Text><Text>
                  En complément du transfert susvisé, Laymoon aura également la faculté de suspendre avec effet immédiat la Carte dès l’inactivité du Compte. En pareille situation, la Carte pourra être réactivée par son Utilisateur en contactant l’Entreprise.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">10.3. Carte bleu inactive </Text>
            <Text>Des frais peuvent être appliqués dans le cas où l’Utilisateur effectue moins de quatre transactions par l’intermédiaire de sa Carte, dans un délai de quatre-vingt-dix (90) jours pour un motif de carte bleu inactive. (cf §7)</Text>
            <Text fontWeight={"bold"} fontSize="17">11 - Rétractation </Text>
            <Text>À compter de son inscription sur l’Application, tout Utilisateur bénéficie, conformément aux dispositions légales applicables, d’un droit de rétractation exerçable pendant 14 jours. Compte-tenu du fait que Laymoon engage des frais lors de la création de compte, tels que : la vérification d’identité, la création de cartes Virtuelle et Physique ainsi que d’un IBAN, le client ne pourra être remboursé dans son intégralité en cas de demande de rétractation. Toute demande de rétractation devra être accompagnée de la communication d’un relevé d’identité bancaire afin de permettre à l’Entreprise de virer le solde du compte, déduction faite de tout avantage dont aurait bénéficié l’Utilisateur se rétractant, résolu de plein droit du fait de la rétractation à l’adresse : contact@laymoon.fr</Text>
            <Text fontWeight={"bold"} fontSize="17">12 - Durée </Text>
            <Text>Les CG sont applicables pendant toute la durée de la relation contractuelle existante entre l’Utilisateur et l’Entreprise, laquelle est à durée indéterminée.</Text>
            <Text fontWeight={"bold"} fontSize="17">13 - Stipulations générales </Text>
            <Text fontWeight={"bold"} fontSize="16">13.1. Preuves </Text>
            <Text>La preuve des actes et opérations ordonnés et/ou réalisés par tout Utilisateur du Site ou de l’Application pourra être valablement rapportée au moyen des systèmes mis en place ou utilisés par Laymoon, ce que les Utilisateurs acceptent expressément et irrévocablement. </Text>
            <Text>La preuve pourra notamment résulter de tout enregistrement ou de tout support électronique ou numérique constituant la reproduction fiable, intègre et historique des données, conservées par l’Entreprise. </Text>
            <Text fontWeight={"bold"} fontSize="16">13.2. Données personnelles.</Text>
            <Text>Laymoon s’engage à préserver votre vie privée. Toutes les données personnelles transmises par tout Utilisateur sont confidentielles et traitées conformément aux dispositions légales et réglementaires applicables, en particulier, celles prévues par le Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données (RGPD) et par la Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés dans sa version en vigueur et au Décret n°2018-687 du 1er août 2018. </Text><Text>
                  Pour une information complète sur le traitement des données personnelles par Laymoon et sur les droits des Utilisateurs associés, Laymoon invite les Utilisateurs à consulter sa politique de confidentialité accessible sur son Site, à partir du lien suivant : </Text><Text>
                  Laymoon - Politique de confidentialité</Text><Text>
                  laquelle précise notamment : </Text><Text>
                  - Les fondements légaux sur lesquels repose la collecte des données personnelles </Text><Text>
                  - La nature des données collectées</Text><Text>
                  - Les droits des Utilisateurs</Text><Text>
                  - Les finalités des traitements
            </Text>
            <Text fontWeight={"bold"} fontSize="16">13.3. Propriété intellectuelle </Text>
            <Text>Le contenu du Site et de l’Application demeure en tout temps, la propriété exclusive de l’Entreprise. Les Utilisateurs n’acquièrent aucun droit sur chacun des éléments les composant, notamment mais non limitativement, les textes, logos, images, photographies, vidéos, marques, dénominations sociales, noms de domaine sont la propriété exclusive de Laymoon ou de ses partenaires. </Text><Text>
                  Chacun de ces éléments est protégé par les lois relatives à la propriété intellectuelle, notamment celles du droit d’auteur. </Text><Text>
                  Toute reproduction ou représentation, intégrale ou partielle d’un des éléments composant le Site ou l’Application sans avoir obtenu l’autorisation de l’Entreprise est formellement interdite et constitue une violation du Code de la Propriété Intellectuelle et engage la responsabilité de son auteur.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">13.4. Indépendance des clauses </Text>
            <Text fontWeight={"bold"} fontSize="16">13.5. Force majeure </Text>
            <Text>Aucune des Parties ne sera responsable de l’inexécution ou du retard dans l’exécution de ses obligations si ce retard ou cette inexécution résulte d’un cas de force majeure, telle que celleci est définie par la jurisprudence.</Text><Text>
                  Dans l’hypothèse où l’Entreprise envisagerait de se prévaloir d'un cas de force majeure, elle devra en informer tout Utilisateur au préalable, par écrit, au plus tard dans les cinq (5) jours calendaires suivant la survenance de l’événement invoqué. </Text><Text>
                  En tout état de cause, en cas de survenance d’un cas de force majeure, chaque partie mettra tout en œuvre pour minimiser les effets dudit cas de force majeure.</Text><Text>
                  Aux fins des présentes, ne sera pas constitutifs d’un cas de force majeure toute perte d’emploi d’un Utilisateur.
            </Text>
            <Text fontWeight={"bold"} fontSize="16">13.6. Réclamations  </Text>
            <Text>Toute réclamation en lien avec le Site, l’Application ou les Services proposés par l’Entreprise pourra être formulée par tout Utilisateur auprès de l’Entreprise, par courrier adressé au siège social, courriel au service clients ou contact téléphonique. </Text><Text>
                  L’Entreprise s’engage à y répondre dans un délai maximal de deux (2) mois à compter de la réception de la réclamation. </Text><Text>
                  L’Entreprise et l’Utilisateur concerné à l’origine de la réclamation s’efforceront de faire leurs meilleurs efforts à l’effet de trouver toute solution amiable. 
            </Text>
            <Text fontWeight={"bold"} fontSize="16">14 - Droit applicable – Juridiction </Text>
            <Text fontWeight={"bold"} fontSize="16">14.1. Droit applicable  </Text>
            <Text>Les CG et tout document en résultant entre l’Entreprise et tout Utilisateur sont régis et interprétés conformément au droit français. </Text>
            <Text fontWeight={"bold"} fontSize="16">14.2. Compétence juridictionnelle </Text>
            <Text>Tout différent né de la validité, l’interprétation ou l’exécution des présentes sera soumis aux juridictions françaises compétentes.</Text>
           </ScrollView> 
           </Box>
          </Box>
          <HStack style={{ width: "90%", alignSelf: "center" }} direction="row">
          <Checkbox.Group onChange={value=>{
              value.length >0?
                setTCs(true): setTCs(false)
          }} accessibilityLabel="choose numbers">
            <Checkbox
              bg="gray.200"
              my={0.5}
              style={{
                borderRadius: 4,
                borderColor: "#707070",
              }}
              value="1"
            />
            </Checkbox.Group>
            <Text my={0.5} color="#6B6B6B" px={1}>
              Je certifie avoir pris connaissance des CG
            </Text>
          </HStack>
          <Box width="90%" alignSelf="center">
            <AuthButtonLayout
              navigation={navigation}
              onPress={goToNextTab}
              title="Précédent"
              page="SignUp6"
              buttonText="Terminer"
              goToPrev={goToPrev}
            />
          </Box>
        </Box>
      </HStack>
      <Box p={screen.height / 5} width="100%" bg={"white"}></Box>
    </Box>
  );
};

export default SignUp5;