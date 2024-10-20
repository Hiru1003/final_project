import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/BirdInfo.css'; 
import NavPage from './Nav';
import SriLankaJunglefowl from '../Assets/EndemicBirds/Sri Lanka Junglefowl.webp';
import Spurfowl from '../Assets/EndemicBirds/SriLankaSpurfowl.jpg';
import IndianPeafowl from '../Assets/AllBirds/Indian Peafowl.webp';
import RainQuail from '../Assets/AllBirds/Rain Quail.jpeg';
import AsianBlueQuail from '../Assets/AllBirds/Asian Blue Quail.webp';
import JungleBlushQail from '../Assets/AllBirds/Jungle Blush Qail.jpg';
import PaintedFrancolin from '../Assets/AllBirds/Painted Francolin.jpeg';
import GreyFrancolin from '../Assets/AllBirds/Grey Francolin.png';
import LesserWhistlingDuck from '../Assets/AllBirds/Lesser Whistling Duck.jpg';
import GreylagGoose from '../Assets/AllBirds/GreylagGoose.jpg';
import KnobbedDuck from '../Assets/AllBirds/Knob-billed Duck.jpg';
import CottonPygmyGoose from '../Assets/AllBirds/Cotton Pygmy-goose.jpeg';
import TuftedDuck from '../Assets/AllBirds/Tufted Duck.jpg';
import Garganey from '../Assets/AllBirds/Garganey.jpeg';
import Gadwall from '../Assets/AllBirds/Gadwall.jpeg';
import EurasianWigeon from '../Assets/AllBirds/Eurasian Wigeon.webp';
import IndianSpotbilledDuck from '../Assets/AllBirds/Indian Spot-billed Duck.webp';
import NorthernPintail from '../Assets/AllBirds/Northern Pintail.jpg';
import CommonTeal from '../Assets/AllBirds/Common Teal.jpg';
import LittleGrebe from '../Assets/AllBirds/Little Grebe.jpg';
import GreaterFlamingo from '../Assets/AllBirds/GreaterFlamingo.webp';
import WhitetailedTropicbird from '../Assets/AllBirds/WhitetailedTropicbird.png';
import SriLankaWoodPigeon from '../Assets/EndemicBirds/Sri Lanka Wood Pigeon.jpg';
import EurasianCollaredDove from '../Assets/AllBirds/EurasianCollaredDove.jpg';
import RedCollareddove from '../Assets/AllBirds/RedCollareddove.webp';
import WesternSpottedDove from '../Assets/AllBirds/WesternSpottedDove.webp';
import GreyCappedEmeraldDove from '../Assets/AllBirds/GreyCappedEmeraldDove.jpg';
import OrangeBrestedGreenPigeon from '../Assets/AllBirds/OrangeBrestedGreenPigeon.jpg';
import SriLankaGreenPigeon from '../Assets/AllBirds/SriLankaGreenPigeon.jpg';
import YellowFootedGreenPigeon from '../Assets/AllBirds/YellowFootedGreenPigeon.jpg';
import GreenImperialPigeon from '../Assets/AllBirds/GreenImperialPigeon.jpg';
import SriLankaFrogmouth from '../Assets/AllBirds/SriLankaFrogmouth.jpeg';
import JungleNightjar from '../Assets/AllBirds/JungleNightjar.jpg';
import JerdonsNightjar from '../Assets/AllBirds/JerdonsNightjar.jpg';
import IndianNightjar from '../Assets/AllBirds/IndianNightjar.jpg';
import CrestedTreeswift from '../Assets/AllBirds/CrestedTreeswift.jpeg';
import BrownBackedNeedletail from '../Assets/AllBirds/BrownBackedNeedletail.jpg';
import IndianSwiftlet from '../Assets/AllBirds/IndianSwiftlet.jpeg';
import AsianPalmSwift from '../Assets/AllBirds/AsianPalmSwift.jpg';
import AlpineSwift from '../Assets/AllBirds/AlpineSwift.jpg';
import LittleSwift from '../Assets/AllBirds/LittleSwift.jpeg';
import GreenBilledCoucal from '../Assets/EndemicBirds/SriLankaGreatCoucal.jpg';
import GreaterCoucal from '../Assets/AllBirds/GreaterCoucal.jpg';
import SirkeerMalkoha from '../Assets/AllBirds/SirkeerMalkoha.webp';
import RedFacedMalkoha from '../Assets/EndemicBirds/RedfacedMalkoha.jpg';
import BlueFacedMalkoha from '../Assets/AllBirds/BlueFacedMalkoha.jpg';
import JacobinCuckoo from '../Assets/AllBirds/JacobinCuckoo.webp';
import ChestnutWingedCuckoo from '../Assets/AllBirds/ChestnutWingedCuckoo.jpg';
import WesternKoel from '../Assets/AllBirds/WesternKoel.webp';
import AsianEmeraldCuckoo from '../Assets/AllBirds/AsianEmeraldCuckoo.jpg';
import BandedBayCuckoo from '../Assets/AllBirds/BandedBayCuckoo.jpg';
import GreyBelliedCuckoo from '../Assets/AllBirds/GreyBelliedCuckoo.jpeg';
import ForkTailedDrongoCuckoo from '../Assets/AllBirds/ForkTailedDrongoCuckoo.jpg';
import CommonHawkCuckoo from '../Assets/AllBirds/CommonHawkCuckoo.webp';
import IndianCuckoo from '../Assets/AllBirds/IndianCuckoo.webp';
import CommonCuckoo from '../Assets/AllBirds/CommonCuckoo.avif';
import LesserCuckoo from '../Assets/AllBirds/LesserCuckoo.jpeg';
import SlatyLeggedCrake from '../Assets/AllBirds/SlatyLeggedCrake.jpg';
import SlatyBreastedRail from '../Assets/AllBirds/SlatyBreastedRail.webp';
import Corncrake from '../Assets/AllBirds/Corncrake.webp';
import RuddyBreastedCrake from '../Assets/AllBirds/RuddyBreastedCrake.jpg';
import BaillonsCrake from '../Assets/AllBirds/BaillonsCrake.jpg';
import WhiteBreastedWaterhen from '../Assets/AllBirds/WhiteBreastedWaterhen.jpg';
import Watercock from '../Assets/AllBirds/Watercock.jpg';
import PurpleSwamphen from '../Assets/AllBirds/PurpleSwamphen.jpg';
import CommonMoorhen from '../Assets/AllBirds/CommonMoorhen.jpg';
import CommonCoot from '../Assets/AllBirds/CommonCoot.jpg';
import WilsonsStormPetrel from '../Assets/AllBirds/WilsonsStormPetrel.jpeg';
import SwinhoesStormPetrel from '../Assets/AllBirds/SwinhoesStormPetrel.jpeg';
import WedgeTailedShearwater from '../Assets/AllBirds/WedgeTailedShearwater.jpeg';
import ShortTailedShearwater from '../Assets/AllBirds/ShortTailedShearwater.jpg';
import FleshFootedShearwater from '../Assets/AllBirds/FleshFootedShearwater.avif';
import LesserAdjutant from '../Assets/AllBirds/LesserAdjutant.jpg';
import PaintedStork from '../Assets/AllBirds/PaintedStork.jpg';
import AsianOpenbill from '../Assets/AllBirds/AsianOpenbill.jpeg';
import BlackStork from '../Assets/AllBirds/BlackStork.jpg';
import AsianWoollyneck from '../Assets/AllBirds/AsianWoollyneck.jpeg';
import WhiteStork from '../Assets/AllBirds/WhiteStork.jpg';
import BlackNeckedStork from '../Assets/AllBirds/BlackNeckedStork.jpeg';
import EurasianSpoonbill from '../Assets/AllBirds/EurasianSpoonbill.jpg';
import BlackHeadedIbis from '../Assets/AllBirds/BlackHeadedIbis.jpg';
import GlossyIbis from '../Assets/AllBirds/GlossyIbis.jpg';
import EurasianBittern from '../Assets/AllBirds/EurasianBittern.jpg';
import YellowBittern from '../Assets/AllBirds/YellowBittern.jpg';
import CinnamonBittern from '../Assets/AllBirds/CinnamonBittern.jpeg';
import BlackBittern from '../Assets/AllBirds/BlackBittern.jpg';
import MalayNightheron from '../Assets/AllBirds/MalayNightheron.jpg';
import BlackCrownedNightheron from '../Assets/AllBirds/BlackCrownedNightheron.jpg';
import GreenBackedHeron from '../Assets/AllBirds/GreenBackedHeron.jpg';
import IndianPondheron from '../Assets/AllBirds/IndianPondheron.jpeg';
import CattleEgret from '../Assets/AllBirds/CattleEgret.jpeg';
import GreyHeron from '../Assets/AllBirds/GreyHeron.webp';
import GoliathHeron from '../Assets/AllBirds/GoliathHeron.jpg';
import PurpleHeron from '../Assets/AllBirds/PurpleHeron.webp';
import GreatWhiteEgret from '../Assets/AllBirds/GreatWhiteEgret.jpg';
import IntermediateEgret from '../Assets/AllBirds/IntermediateEgret.webp';
import LittleEgret from '../Assets/AllBirds/LittleEgret.webp';
import WesternReefEgret from '../Assets/AllBirds/WesternReefEgret.jpeg';
import SpotBilledPelican from '../Assets/AllBirds/SpotBilledPelican.jpg';
import LesserFrigatebird from '../Assets/AllBirds/LesserFrigatebird.jpg';
import GreatFrigatebird from '../Assets/AllBirds/GreatFrigatebird.jpg';
import ChristmasIslandFrigatebird from '../Assets/AllBirds/ChristmasIslandFrigatebird.jpeg';
import RedFootedBooby from '../Assets/AllBirds/RedFootedBooby.jpg';
import BrownBooby from '../Assets/AllBirds/BrownBooby.webp';
import MaskedBooby from '../Assets/AllBirds/MaskedBooby.jpg';
import LittleCormorant from '../Assets/AllBirds/LittleCormorant.jpg';
import GreatCormorant from '../Assets/AllBirds/GreatCormorant.jpg';
import IndianCormorant from '../Assets/AllBirds/IndianCormorant.jpeg';
import OrientalDarter from '../Assets/AllBirds/OrientalDarter.jpg';
import IndianThickknee from '../Assets/AllBirds/IndianThickknee.jpg';
import GreatThickknee from '../Assets/AllBirds/GreatThickknee.webp';
import EurasianOystercatcher from '../Assets/AllBirds/EurasianOystercatcher.jpg';
import PiedAvocet from '../Assets/AllBirds/PiedAvocet.jpeg';
import BlackWingedStilt from '../Assets/AllBirds/BlackWingedStilt.jpeg';
import GreyPlover from '../Assets/AllBirds/GreyPlover.png';
import PacificGoldenPlover from '../Assets/AllBirds/PacificGoldenPlover.jpg';
import CommonRingedPlover from '../Assets/AllBirds/CommonRingedPlover.jpeg';
import LittleRingedPlover from '../Assets/AllBirds/LittleRingedPlover.jpg';
import KentishPlover from '../Assets/AllBirds/KentishPlover.jpeg';
import TibetanSandplover from '../Assets/AllBirds/TibetanSandplover.jpeg';
import GreaterSandplover from '../Assets/AllBirds/GreaterSandplover.jpg';
import CaspianPlover from '../Assets/AllBirds/CaspianPlover.jpg';
import YellowWattledLapwing from '../Assets/AllBirds/YellowWattledLapwing.webp';
import RedWattledLapwing from '../Assets/AllBirds/RedWattledLapwing.jpeg';
import SociableLapwing from '../Assets/AllBirds/SociableLapwing.jpg';
import GreaterPaintedSnipe from '../Assets/AllBirds/GreaterPaintedSnipe.webp';
import PheasantTailedJacana from '../Assets/AllBirds/PheasantTailedJacana.jpg';
import Whimbrel from '../Assets/AllBirds/Whimbrel.jpeg';
import EurasianCurlew from '../Assets/AllBirds/EurasianCurlew.jpg';
import BarTailedGodwit from '../Assets/AllBirds/BarTailedGodwit.webp';
import BlackTailedGodwit from '../Assets/AllBirds/BlackTailedGodwit.jpg';
import RuddyTurnstone from '../Assets/AllBirds/RuddyTurnstone.jpeg';
import GreatKnot from '../Assets/AllBirds/GreatKnot.jpeg';
import RedKnot from '../Assets/AllBirds/RedKnot.jpg';
import Ruff from '../Assets/AllBirds/Ruff.jpg';
import BroadBilledSandpiper from '../Assets/AllBirds/BroadBilledSandpiper.webp';
import CurlewSandpiper from '../Assets/AllBirds/CurlewSandpiper.jpg';
import TemmincksStint from '../Assets/AllBirds/TemmincksStint.jpg';
import LongToedStint from '../Assets/AllBirds/LongToedStint.jpg';
import SpoonBilledSandpiper from '../Assets/AllBirds/SpoonBilledSandpiper.jpg';
import RedNeckedStint from '../Assets/AllBirds/RedNeckedStint.jpg';
import Sanderling from '../Assets/AllBirds/Sanderling.jpg';
import Dunlin from '../Assets/AllBirds/Dunlin.jpg';
import LittleStint from '../Assets/AllBirds/LittleStint.jpg';
import EurasianWoodcock from '../Assets/AllBirds/EurasianWoodcock.jpeg';
import PinTailedSnipe from '../Assets/AllBirds/PinTailedSnipe.jpg';
import SwinhoesSnipe from '../Assets/AllBirds/SwinhoesSnipe.jpeg';
import CommonSnipe from '../Assets/AllBirds/CommonSnipe.jpg';
import JackSnipe from '../Assets/AllBirds/JackSnipe.webp';
import TerekSandpiper from '../Assets/AllBirds/TerekSandpiper.avif';
import CommonSandpiper from '../Assets/AllBirds/CommonSandpiper.jpg';
import GreenSandpiper from '../Assets/AllBirds/GreenSandpiper.jpg';
import SpottedRedshank from '../Assets/AllBirds/SpottedRedshank.jpeg';
import CommonGreenshank from '../Assets/AllBirds/CommonGreenshank.jpg';
import CommonRedshank from '../Assets/AllBirds/CommonRedshank.jpg';
import WoodSandpiper from '../Assets/AllBirds/WoodSandpiper.jpg';
import MarshSandpiper from '../Assets/AllBirds/MarshSandpiper.webp';
import BarredButtonquail from '../Assets/AllBirds/BarredButtonquail.jpeg';
import CrabPlover from '../Assets/AllBirds/CrabPlover.jpeg';
import IndianCourser from '../Assets/AllBirds/IndianCourser.jpeg';
import CollaredPratincole from '../Assets/AllBirds/CollaredPratincole.jpg';
import OrientalPratincole from '../Assets/AllBirds/OrientalPratincole.jpeg';
import LittlePratincole from '../Assets/AllBirds/LittlePratincole.jpeg';
import BrownNoddy from '../Assets/AllBirds/BrownNoddy.jpg';
import CommonWhiteTern from '../Assets/AllBirds/CommonWhiteTern.jpg';
import BrownHeadedGull from '../Assets/AllBirds/BrownHeadedGull.jpg';
import BlackHeadedGull from '../Assets/AllBirds/BlackHeadedGull.jpg';
import PallassGull from '../Assets/AllBirds/PallassGull.png';
import SootyTern from '../Assets/AllBirds/SootyTern.jpeg';
import BridledTern from '../Assets/AllBirds/BridledTern.jpeg';
import LittleTern from '../Assets/AllBirds/LittleTern.jpg';
import SaunderssTern from '../Assets/AllBirds/SaunderssTern.jpg';
import CommonGullBilledTern from '../Assets/AllBirds/CommonGullBilledTern.jpg';
import CaspianTern from '../Assets/AllBirds/CaspianTern.jpg';
import WhiskeredTern from '../Assets/AllBirds/WhiskeredTern.webp';
import WhiteWingedTern from '../Assets/AllBirds/WhiteWingedTern.jpg';
import BlackTern from '../Assets/AllBirds/BlackTern.jpeg';
import RoseateTern from '../Assets/AllBirds/RoseateTern.webp';
import CommonTern from '../Assets/AllBirds/CommonTern.jpeg';
import LesserCrestedTern from '../Assets/AllBirds/LesserCrestedTern.webp';
import SandwichTern from '../Assets/AllBirds/SandwichTern.jpg';
import GreaterCrestedTern from '../Assets/AllBirds/GreaterCrestedTern.webp';
import ArcticJaeger from '../Assets/AllBirds/ArcticJaeger.webp';
import PomarineJaeger from '../Assets/AllBirds/PomarineJaeger.jpeg';
import BrownSkua from '../Assets/AllBirds/BrownSkua.jpg';
import SriLankaBayOwl from '../Assets/AllBirds/SriLankaBayOwl.jpeg';
import CommonBarnOwl from '../Assets/AllBirds/CommonBarnOwl.webp';
import BrownBoobook from '../Assets/AllBirds/BrownBoobook.jpg';
import JungleOwlet from '../Assets/AllBirds/JungleOwlet.jpeg';
import ChestnutBackedOwlet from '../Assets/AllBirds/ChestnutBackedOwlet.jpg';
import SerendibScopsOwl from '../Assets/EndemicBirds/SerendibScopsOwl.jpg';
import IndianScopsOwl from '../Assets/AllBirds/IndianScopsOwl.jpg';
import OrientalScopsOwl from '../Assets/AllBirds/OrientalScopsOwl.webp';
import BrownWoodOwl from '../Assets/AllBirds/BrownWoodOwl.jpeg';
import SpotBelliedEagleOwl from '../Assets/AllBirds/SpotBelliedEagleOwl.jpg';
import BrownFishOwl from '../Assets/AllBirds/BrownFishOwl.jpg';
import Osprey from '../Assets/AllBirds/Osprey.jpg';
import BlackWingedKite from '../Assets/AllBirds/BlackWingedKite.jpeg';
import OrientalHoneyBuzzard from '../Assets/AllBirds/OrientalHoneyBuzzard.jpg';
import JerdonsBaza from '../Assets/AllBirds/JerdonsBaza.webp';
import BlackBaza from '../Assets/AllBirds/BlackBaza.jpg';
import CrestedSerpentEagle from '../Assets/AllBirds/CrestedSerpentEagle.jpg';
import MountainHawkEagle from '../Assets/AllBirds/MountainHawkEagle.jpg';
import ChangeableHawkEagle from '../Assets/AllBirds/ChangeableHawkEagle.jpg';
import RufousBelliedEagle from '../Assets/AllBirds/RufousBelliedEagle.jpeg';
import BlackEagle from '../Assets/AllBirds/BlackEagle.webp';
import BootedEagle from '../Assets/AllBirds/BootedEagle.jpg';
import WesternMarshHarrier from '../Assets/AllBirds/WesternMarshHarrier.jpg';
import PallidHarrier from '../Assets/AllBirds/PallidHarrier.jpg';
import PiedHarrier from '../Assets/AllBirds/PiedHarrier.jpeg';
import MontagusHarrier from '../Assets/AllBirds/MontagusHarrier.jpg';
import CrestedGoshawk from '../Assets/AllBirds/CrestedGoshawk.jpeg';
import Shikra from '../Assets/AllBirds/Shikra.jpg';
import Besra from '../Assets/AllBirds/Besra.jpeg';
import WhiteBelliedSeaEagle from '../Assets/AllBirds/WhiteBelliedSeaEagle.webp';
import GreyHeadedFishEagle from '../Assets/AllBirds/GreyHeadedFishEagle.jpg';
import BrahminyKite from '../Assets/AllBirds/BrahminyKite.jpeg';
import BlackKite from '../Assets/AllBirds/BlackKite.jpeg';
import EurasianBuzzard from '../Assets/AllBirds/EurasianBuzzard.webp';
import MalabarTrogon from '../Assets/AllBirds/MalabarTrogon.webp';
import SriLankaGreyHornbill from '../Assets/EndemicBirds/Sri Lanka Grey Hornbill.jpg';
import MalabarPiedHornbill from '../Assets/AllBirds/MalabarPiedHornbill.webp';
import CommonHoopoe from '../Assets/AllBirds/CommonHoopoe.jpg';
import AsianGreenBeeEater from '../Assets/AllBirds/AsianGreenBeeEater.jpeg';
import ChestnutHeadedBeeEater from '../Assets/AllBirds/ChestnutHeadedBeeEater.webp';
import BlueTailedBeeEater from '../Assets/AllBirds/BlueTailedBeeEater.webp';
import EuropeanBeeEater from '../Assets/AllBirds/EuropeanBeeEater.jpg';
import IndianRoller from '../Assets/AllBirds/IndianRoller.jpeg';
import OrientalDollarbird from '../Assets/AllBirds/OrientalDollarbird.jpeg';
import BlackBackedDwarfKingfisher from '../Assets/AllBirds/BlackBackedDwarfKingfisher.webp';
import BlueEaredKingfisher from '../Assets/AllBirds/BlueEaredKingfisher.jpeg';
import CommonKingfisher from '../Assets/AllBirds/CommonKingfisher.jpg';
import PiedKingfisher from '../Assets/AllBirds/PiedKingfisher.jpg';
import StorkBilledKingfisher from '../Assets/AllBirds/StorkBilledKingfisher.webp';
import WhiteBreastedKingfisher from '../Assets/AllBirds/WhiteBreastedKingfisher.jpeg';
import CoppersmithBarbet from '../Assets/AllBirds/CoppersmithBarbet.jpeg';
import SriLankaBarbet from '../Assets/EndemicBirds/CrimsonFrontedBarbet.webp';
import BrownHeadedBarbet from '../Assets/AllBirds/BrownHeadedBarbet.jpeg';
import YellowFrontedBarbet from '../Assets/EndemicBirds/YellowFrontedBarbet.jpg';
import GreaterSriLankaFlameback from  '../Assets/EndemicBirds/SriLankaFlameback.jpg';
import WhiteNapedWoodpecker from '../Assets/AllBirds/WhiteNapedWoodpecker.jpg';
import BlackRumpedFlameback from '../Assets/AllBirds/BlackRumpedFlameback.jpg';
import LesserSriLankaFlameback from '../Assets/AllBirds/LesserSriLankaFlameback.jpg';
import RufousWoodpecker from '../Assets/AllBirds/RufousWoodpecker.jpeg';
import LesserYellownape from '../Assets/AllBirds/LesserYellownape.jpg';
import StreakThroatedWoodpecker from '../Assets/AllBirds/StreakThroatedWoodpecker.jpg';
import IndianPygmyWoodpecker from '../Assets/AllBirds/IndianPygmyWoodpecker.jpg';
import YellowCrownedWoodpecker from '../Assets/AllBirds/YellowCrownedWoodpecker.jpeg';
import CommonKestrel from '../Assets/AllBirds/CommonKestrel.webp';
import AmurFalcon from '../Assets/AllBirds/AmurFalcon.jpeg';
import OrientalHobby from '../Assets/AllBirds/OrientalHobby.webp';
import PeregrineFalcon from '../Assets/AllBirds/PeregrineFalcon.jpg';
import SriLankaHangingParrot from '../Assets/EndemicBirds/Sri Lanka Hanging Parrot.jpeg';
import PlumHeadedParakeet from '../Assets/AllBirds/PlumHeadedParakeet.jpg';
import RoseRingedParakeet from '../Assets/AllBirds/RoseRingedParakeet.webp';
import AlexandrineParakeet from '../Assets/AllBirds/AlexandrineParakeet.jpeg';
import EmeraldCollaredParakeet from '../Assets/EndemicBirds/LayardsParakeet.jpg';
import IndianPitta from '../Assets/AllBirds/IndianPitta.jpeg';
import BlackHoodedOriole from '../Assets/AllBirds/BlackHoodedOriole.webp';
import EurasianGoldenOriole from '../Assets/AllBirds/EurasianGoldenOriole.jpg';
import IndianGoldenOriole from '../Assets/AllBirds/IndianGoldenOriole.jpg';
import SmallMinivet from '../Assets/AllBirds/SmallMinivet.jpg';
import ScarletMinivet from '../Assets/AllBirds/ScarletMinivet.jpeg';
import IndianCuckooshrike from '../Assets/AllBirds/IndianCuckooshrike.jpeg';
import BlackHeadedCuckooshrike from '../Assets/AllBirds/BlackHeadedCuckooshrike.webp';
import AshyWoodswallow from '../Assets/AllBirds/AshyWoodswallow.jpg';
import BarWingedFlycatcherShrike from '../Assets/AllBirds/BarWingedFlycatcherShrike.jpeg';
import SriLankaWoodshrike from '../Assets/EndemicBirds/SriLankaWoodshrike.jpeg';
import CommonIora from '../Assets/AllBirds/CommonIora.webp';
import MarshallsIora from '../Assets/AllBirds/MarshallsIora.jpg';
import WhiteBrowedFantail from '../Assets/AllBirds/WhiteBrowedFantail.jpg';
import BlackDrongo from '../Assets/AllBirds/BlackDrongo.webp';
import AshyDrongo from '../Assets/AllBirds/AshyDrongo.jpeg';
import WhiteBelliedDrongo from '../Assets/AllBirds/WhiteBelliedDrongo.avif';
import GreaterRacquetTailedDrongo from '../Assets/AllBirds/GreaterRacquetTailedDrongo.webp';
import SriLankaDrongo from '../Assets/AllBirds/SriLankaDrongo.jpg';
import BlackNapedMonarch from '../Assets/AllBirds/BlackNapedMonarch.jpg';
import IndianParadiseFlycatcher from '../Assets/AllBirds/IndianParadiseFlycatcher.jpeg';
import BrownShrike from '../Assets/AllBirds/BrownShrike.jpeg';
import LongTailedShrike from '../Assets/AllBirds/LongTailedShrike.jpeg';
import SriLankaBlueMagpie from '../Assets/EndemicBirds/Sri Lanka Blue Magpie.jpeg';
import HouseCrow from '../Assets/AllBirds/HouseCrow.jpg';
import GreyHeadedCanaryFlycatcher from '../Assets/AllBirds/GreyHeadedCanaryFlycatcher.jpg';
import AshyCrownedSparrowLark from '../Assets/AllBirds/AshyCrownedSparrowLark.jpg';
import JerdonsBushlark from '../Assets/AllBirds/JerdonsBushlark.jpg';
import OrientalSkylark from '../Assets/AllBirds/OrientalSkylark.jpeg';
import ZittingCisticola from '../Assets/AllBirds/ZittingCisticola.jpg';
import GreyBreastedPrinia from '../Assets/AllBirds/GreyBreastedPrinia.jpg';
import JunglePrinia from '../Assets/AllBirds/JunglePrinia.jpg';
import AshyPrinia from '../Assets/AllBirds/AshyPrinia.jpg';
import PlainPrinia from '../Assets/AllBirds/PlainPrinia.webp';
import CommonTailorbird from '../Assets/AllBirds/CommonTailorbird.webp';
import BootedWarbler from '../Assets/AllBirds/BootedWarbler.jpeg';
import SykessWarbler from '../Assets/AllBirds/SykessWarbler.jpg';
import BlythsReedWarbler from '../Assets/AllBirds/BlythsReedWarbler.jpg';
import ClamorousReedWarbler from '../Assets/AllBirds/ClamorousReedWarbler.webp';
import PallassGrasshopperWarbler from '../Assets/AllBirds/PallassGrasshopperWarbler.jpg';
import LanceolatedWarbler from '../Assets/AllBirds/LanceolatedWarbler.webp';
import SriLankaWarbler from '../Assets/EndemicBirds/SriLankaBushWarbler.jpg';
import SriLankaSwallow from '../Assets/AllBirds/SriLankaSwallow.jpg';
import HouseSwallow from '../Assets/AllBirds/HouseSwallow.jpeg';
import BarnSwallow from '../Assets/AllBirds/BarnSwallow.jpeg';
import SquareTailedBulbul from '../Assets/AllBirds/SquareTailedBulbul.jpg';
import BlackCappedBulbul from '../Assets/EndemicBirds/SriLankaBlackCappedBulbul.jpg';
import RedVentedBulbul from '../Assets/AllBirds/RedVentedBulbul.jpg';
import YellowEaredBulbul from '../Assets/AllBirds/YellowEaredBulbul.jpg';
import WhiteBrowedBulbul from '../Assets/AllBirds/WhiteBrowedBulbul.jpeg';
import YellowBrowedBulbul from '../Assets/AllBirds/YellowBrowedBulbul.jpg';
import GreenWarbler from '../Assets/AllBirds/GreenWarbler.jpg';
import GreenishWarbler from '../Assets/AllBirds/GreenishWarbler.jpeg';
import LargeBilledLeafWarbler from '../Assets/AllBirds/LargeBilledLeafWarbler.jpg';
import LesserWhitethroat from '../Assets/AllBirds/LesserWhitethroat.jpg';
import YellowEyedBabbler from '../Assets/AllBirds/YellowEyedBabbler.jpeg';
import SriLankaWhiteEye from '../Assets/EndemicBirds/SriLankaWhiteEye.jpg';
import IndianWhiteEye from '../Assets/AllBirds/IndianWhiteEye.webp';
import SriLankaScimitarBabbler from  '../Assets/EndemicBirds/SriLankaScimitarBabbler.jpg';
import TawnyBelliedBabbler from '../Assets/AllBirds/TawnyBelliedBabbler.jpeg';
import DarkFrontedBabbler from '../Assets/AllBirds/DarkFrontedBabbler.jpg';
import BrownCappedBabbler from '../Assets/AllBirds/BrownCappedBabbler.jpeg';
import AshyFrontedBabbler from '../Assets/AllBirds/AshyFrontedBabbler.jpg';
import OrangeBilledBabbler from  '../Assets/EndemicBirds/OrangebilledBabbler.jpg';
import YellowBilledBabbler from '../Assets/AllBirds/YellowBilledBabbler.jpg';
import VelvetFrontedNuthatch from '../Assets/AllBirds/VelvetFrontedNuthatch.jpeg';
import RosyStarling from '../Assets/AllBirds/RosyStarling.webp';
import WhiteFacedStarling from '../Assets/EndemicBirds/Ceylon White-headed Starling.webp';
import BrahminyStarling from '../Assets/AllBirds/BrahminyStarling.jpeg';
import CommonMyna from '../Assets/AllBirds/CommonMyna.jpeg';
import SriLankaHillMyna from '../Assets/EndemicBirds/SriLankaHillMyna.jpg';
import SouthernHillMyna from '../Assets/AllBirds/SouthernHillMyna.jpeg';
import WhitesThrush from '../Assets/AllBirds/WhitesThrush.jpg';
import PiedThrush from '../Assets/AllBirds/PiedThrush.jpg';
import SpotWingedThrush from '../Assets/AllBirds/SpotWingedThrush.jpg';
import OrangeHeadedThrush from '../Assets/AllBirds/OrangeHeadedThrush.jpeg';
import IndianBlackbird from '../Assets/AllBirds/IndianBlackbird.jpeg';
import EyebrowedThrush from '../Assets/AllBirds/EyebrowedThrush.webp';
import OrientalMagpieRobin from '../Assets/AllBirds/OrientalMagpieRobin.jpg';
import IndianRobin from '../Assets/AllBirds/IndianRobin.jpg';
import WhiteRumpedShama from '../Assets/AllBirds/WhiteRumpedShama.jpeg';
import BrownBreastedFlycatcher from '../Assets/AllBirds/BrownBreastedFlycatcher.webp';
import AsianBrownFlycatcher from '../Assets/AllBirds/AsianBrownFlycatcher.webp';
import DullBlueFlycatcher from '../Assets/EndemicBirds/SriLankaDullBlueFlycatcher.jpeg';
import TickellsBlueFlycatcher from '../Assets/AllBirds/TickellsBlueFlycatcher.jpeg';
import BlueThroatedBlueFlycatcher from '../Assets/AllBirds/BlueThroatedBlueFlycatcher.jpeg';
import IndianBlueRobin from '../Assets/AllBirds/IndianBlueRobin.jpeg';
import Bluethroat from '../Assets/AllBirds/Bluethroat.jpeg';
import SriLankaWhistlingThrush from '../Assets/EndemicBirds/SriLankaWhistlingThrush.jpg';
import KashmirFlycatcher from '../Assets/AllBirds/KashmirFlycatcher.jpg';
import BlueRockThrush from '../Assets/AllBirds/BlueRockThrush.webp';
import PiedBushchat from '../Assets/AllBirds/PiedBushchat.jpg';
import PiedWheatear from '../Assets/AllBirds/PiedWheatear.jpg';
import AsianFairyBluebird from '../Assets/AllBirds/AsianFairyBluebird.jpeg';
import GoldenFrontedLeafbird from '../Assets/AllBirds/GoldenFrontedLeafbird.jpg';
import JerdonsLeafbird from '../Assets/AllBirds/JerdonsLeafbird.jpg';
import WhiteThroatedFlowerpecker from '../Assets/EndemicBirds/White-throated Flowerpecker.jpg';
import ThickBilledFlowerpecker from '../Assets/AllBirds/ThickBilledFlowerpecker.jpg';
import PaleBilledFlowerpecker from '../Assets/AllBirds/PaleBilledFlowerpecker.jpg';
import PurpleRumpedSunbird from '../Assets/AllBirds/PurpleRumpedSunbird.jpeg';
import PurpleSunbird from '../Assets/AllBirds/PurpleSunbird.jpeg';
import LotensSunbird from '../Assets/AllBirds/LotensSunbird.webp';
import StreakedWeaver from '../Assets/AllBirds/StreakedWeaver.jpg';
import BayaWeaver from '../Assets/AllBirds/BayaWeaver.jpeg';
import IndianSilverbill from '../Assets/AllBirds/IndianSilverbill.jpeg';
import WhiteRumpedMunia from '../Assets/AllBirds/WhiteRumpedMunia.jpeg';
import ScalyBreastedMunia from '../Assets/AllBirds/ScalyBreastedMunia.webp';
import BlackThroatedMunia from '../Assets/AllBirds/BlackThroatedMunia.jpeg';
import TricolouredMunia from '../Assets/AllBirds/TricolouredMunia.jpeg';
import HouseSparrow from '../Assets/AllBirds/HouseSparrow.jpeg';
import ForestWagtail from '../Assets/AllBirds/ForestWagtail.jpeg';
import RichardsPipit from '../Assets/AllBirds/RichardsPipit.jpeg';
import PaddyfieldPipit from '../Assets/AllBirds/PaddyfieldPipit.webp';
import BlythsPipit from '../Assets/AllBirds/BlythsPipit.jpeg';
import WesternYellowWagtail from '../Assets/AllBirds/WesternYellowWagtail.jpeg';
import GreyWagtail from '../Assets/AllBirds/GreyWagtail.jpeg';
import WhiteBrowedWagtail from '../Assets/AllBirds/WhiteBrowedWagtail.jpeg';
import WhiteWagtail from '../Assets/AllBirds/WhiteWagtail.jpeg';


const birdData = [
    {
        id: 1,
        name: 'Sri Lanka Spurfowl',
        scientificName: 'Galloperdix bicalcarata',
        image: Spurfowl,
        description: 'The Sri Lanka Spurfowl is a secretive and elusive bird species endemic to Sri Lanka. This bird is often heard more than seen, with its loud, ringing calls echoing through the dense forests it inhabits. The male is distinct with dark plumage and striking spurs on its legs, while the female is more subtly colored. Spurfowls forage on the ground, scratching through leaf litter for insects, seeds, and fruits.',
        habitat: 'Tropical rainforests and dense undergrowth',
        diet: 'Insects, seeds, and fruits',
        lifespan: '8-12 years',
        size: 'Length 32-38 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Known for their shy nature, these birds are territorial and often remain hidden in dense vegetation.',
        breedingSeason: 'March to May',
    },
    {
        id: 2,
        name: 'Indian Peafowl',
        scientificName: 'Pavo cristatus',
        image: IndianPeafowl,
        description: 'The Indian Peafowl, commonly referred to as the Peacock, is famous for its iridescent tail feathers that form a stunning fan display during courtship. Native to the Indian subcontinent, it is now found in many parts of the world. Males boast a vivid blue-green plumage, while females, known as peahens, are more muted in color. Indian Peafowls are ground-dwelling birds that prefer open forests and agricultural areas.',
        habitat: 'Open forests, scrublands, and agricultural areas',
        diet: 'Seeds, insects, fruits, and small reptiles',
        lifespan: '15-20 years',
        size: 'Length 100-115 cm, Wingspan 140-160 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Males are known for their impressive courtship displays, showcasing their colorful feathers to attract females.',
        breedingSeason: 'April to September',
    },
    {
        id: 3,
        name: 'Rain Quail',
        scientificName: 'Coturnix coromandelica',
        image: RainQuail,
        description: 'The Rain Quail, a small ground-dwelling bird, is found across South Asia, including India and Sri Lanka. It is well-adapted to grasslands and agricultural fields. The male is distinctive with bold black and white patterns on its chest, while the female is more subtly marked. Known for its soft, whistling calls, the Rain Quail is often seen foraging for seeds and insects, especially after the monsoon rains.',
        habitat: 'Grasslands, agricultural fields, and scrublands',
        diet: 'Seeds, insects, and small invertebrates',
        lifespan: '2-4 years',
        size: 'Length 16-20 cm, Wingspan 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Rain Quails are typically seen in small groups, foraging on the ground for food.',
        breedingSeason: 'June to September',
    },
    {
        id: 4,
        name: 'Asian Blue Quail',
        scientificName: 'Coturnix chinensis',
        image: AsianBlueQuail,
        description: 'The Asian Blue Quail, also known as the King Quail, is a small but striking bird native to parts of Asia, including Sri Lanka. Males exhibit a rich blue hue on their plumage, while females are more brownish. These quails are ground-dwellers that thrive in grasslands and agricultural fields. They are known for their quick, darting movements and their ability to blend into their surroundings. Their diet consists of seeds, insects, and small invertebrates.',
        habitat: 'Grasslands, agricultural fields, and wetlands',
        diet: 'Seeds, insects, and small invertebrates',
        lifespan: '2-3 years',
        size: 'Length 12-15 cm, Wingspan 22-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These quails are shy and prefer to remain hidden in dense vegetation. They are known for their rapid, ground-hugging flight.',
        breedingSeason: 'June to September',
    },
    {
        id: 5,
        name: 'Jungle Blush Quail',
        scientificName: 'Perdicula asiatica',
        image: JungleBlushQail,
        description: 'The Jungle Blush Quail is a small, colorful bird found in the scrublands and forests of South Asia, including Sri Lanka. Males are particularly vibrant with a mix of reddish-brown and white plumage, while females are more subdued. These birds are ground-dwellers, often seen foraging for seeds, insects, and small fruits. They are shy and elusive, making them difficult to spot in the wild. Their soft, repetitive calls can often be heard in the early morning.',
        habitat: 'Scrublands, open forests, and grasslands',
        diet: 'Seeds, insects, and fruits',
        lifespan: '3-5 years',
        size: 'Length 15-18 cm, Wingspan 25-28 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These quails are shy and tend to remain hidden in dense vegetation, emerging only to forage.',
        breedingSeason: 'June to August',
    },
    {
        id: 6,
        name: 'Painted Francolin',
        scientificName: 'Francolinus pictus',
        image: PaintedFrancolin,
        description: 'The Painted Francolin is a beautifully patterned bird native to the Indian subcontinent. Males are striking with a mix of chestnut, black, and white markings, while females are more modestly colored. They are ground-dwellers, foraging for seeds, insects, and small fruits. Painted Francolins are typically found in scrublands, grasslands, and cultivated fields, often seen in pairs or small groups. Their loud, repetitive calls are a common sound during the breeding season.',
        habitat: 'Grasslands, scrublands, and agricultural fields',
        diet: 'Seeds, insects, and fruits',
        lifespan: '3-5 years',
        size: 'Length 28-32 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These birds are usually shy but become more active during the breeding season with their loud calls.',
        breedingSeason: 'June to September',
    },
    {
        id: 7,
        name: 'Grey Francolin',
        scientificName: 'Francolinus pondicerianus',
        image: GreyFrancolin,
        description: 'The Grey Francolin is a ground-dwelling bird found in open grasslands and agricultural areas across the Indian subcontinent. Known for its distinctive grey-brown plumage and black markings, this bird is often seen in small flocks foraging for seeds, grains, and insects. Their distinctive, loud, cackling calls are heard frequently, especially during the breeding season. They are social birds, often seen moving in pairs or small groups.',
        habitat: 'Grasslands, scrublands, and farmlands',
        diet: 'Seeds, grains, and insects',
        lifespan: '4-6 years',
        size: 'Length 30-35 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These birds are known for their rapid movements on the ground and their tendency to take flight only when disturbed.',
        breedingSeason: 'May to August',
    },
    {
        id: 8,
        name: 'Sri Lanka Junglefowl',
        scientificName: 'Gallus lafayettii',
        image: SriLankaJunglefowl,
        description: 'The Sri Lanka Junglefowl is a brightly colored bird endemic to Sri Lanka and holds the title of the national bird. Males are known for their striking plumage, showcasing vibrant shades of red, orange, and yellow. Females exhibit more subdued colors. These birds are typically found in forested areas, where they prefer to forage among the undergrowth, often scratching the ground. Their distinct vocalizations are a key part of their territorial behavior.',
        habitat: 'Tropical forests, dense scrublands, and plantations',
        diet: 'Seeds, insects, and small fruits',
        lifespan: '10-15 years',
        size: 'Length 66-73 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Sri Lanka Junglefowl is a shy and elusive bird, often found foraging on the forest floor. Males are territorial and engage in vocal displays.',
        breedingSeason: 'February to May',
    },
    {
        id: 9,
        name: 'Lesser Whistling Duck',
        scientificName: 'Dendrocygna javanica',
        image: LesserWhistlingDuck,
        description: 'The Lesser Whistling Duck is a medium-sized duck commonly found in wetlands across South Asia. Known for its high-pitched whistling calls, this bird often forms large flocks around lakes and ponds. It has brown plumage with darker wings and a lighter belly. These ducks are excellent swimmers and divers, feeding on aquatic plants, seeds, and small invertebrates. They are most active during dusk and dawn, often resting during the day.',
        habitat: 'Wetlands, lakes, and ponds',
        diet: 'Aquatic plants, seeds, and invertebrates',
        lifespan: '5-10 years',
        size: 'Length 38-43 cm, Wingspan 60-65 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These ducks are social birds, often forming large flocks near water bodies.',
        breedingSeason: 'July to October',
    },
    {
        id: 10,
        name: 'Greylag Goose',
        scientificName: 'Anser anser',
        image: GreylagGoose,
        description: 'The Greylag Goose is a large waterfowl species native to Europe and Asia. It has a grey body with a distinctive pink bill and pale legs. These birds are known for their strong migratory patterns, traveling long distances to breed and feed. Greylag Geese are commonly seen in wetlands, lakes, and agricultural fields. They are grazers, feeding on grasses, roots, and grains. These geese are highly social and often form large flocks during migration.',
        habitat: 'Wetlands, lakes, and agricultural fields',
        diet: 'Grasses, roots, and grains',
        lifespan: '15-20 years',
        size: 'Length 74-84 cm, Wingspan 147-180 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Greylag Geese are known for their loud honking calls and their strong, coordinated flight during migration.',
        breedingSeason: 'April to June',
    },
    {
        id: 11,
        name: 'Knob-billed Duck',
        scientificName: 'Sarkidiornis melanotos',
        image: KnobbedDuck,
        description: 'The Knob-billed Duck, also known as the Comb Duck, is a large waterfowl species with a distinctive knob on the male’s bill. Native to tropical wetlands, it is commonly found across parts of Africa, Asia, and South America. Males are larger and exhibit the characteristic knob, while females are smaller. These birds prefer shallow wetlands where they feed on aquatic plants, small fish, and invertebrates. They are strong flyers and are known to migrate seasonally.',
        habitat: 'Wetlands, lakes, and ponds',
        diet: 'Aquatic plants, small fish, and invertebrates',
        lifespan: '10-15 years',
        size: 'Length 56-76 cm, Wingspan 116-145 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Knob-billed Ducks are shy but often form small flocks during migration.',
        breedingSeason: 'June to September',
    },
    {
        id: 12,
        name: 'Cotton Pygmy-goose',
        scientificName: 'Nettapus coromandelianus',
        image: CottonPygmyGoose,
        description: 'The Cotton Pygmy-goose is one of the smallest waterfowl species, known for its delicate size and vibrant green and white plumage. Found in freshwater wetlands across South and Southeast Asia, this bird is an excellent swimmer and diver. The male has striking green and white feathers, while the female is duller in comparison. They feed on aquatic vegetation, seeds, and small invertebrates, often seen in pairs or small groups.',
        habitat: 'Freshwater wetlands, ponds, and lakes',
        diet: 'Aquatic vegetation, seeds, and invertebrates',
        lifespan: '3-6 years',
        size: 'Length 26-32 cm, Wingspan 40-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Cotton Pygmy-geese are often seen in pairs, foraging on floating vegetation.',
        breedingSeason: 'July to October',
    },
    {
        id: 13,
        name: 'Tufted Duck',
        scientificName: 'Aythya fuligula',
        image: TuftedDuck,
        description: 'The Tufted Duck is a diving duck species found across Eurasia. Males are easily recognizable by their black-and-white plumage and the distinctive tuft on the back of their heads, while females are brownish. These ducks are commonly seen in freshwater lakes and reservoirs, where they dive to feed on aquatic plants and invertebrates. Tufted Ducks are social birds, often forming large flocks during winter migration.',
        habitat: 'Freshwater lakes, reservoirs, and ponds',
        diet: 'Aquatic plants and invertebrates',
        lifespan: '10-15 years',
        size: 'Length 40-47 cm, Wingspan 65-75 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Tufted Ducks are active swimmers and divers, often seen foraging underwater for food.',
        breedingSeason: 'May to July',
    },
    {
        id: 14,
        name: 'Garganey',
        scientificName: 'Spatula querquedula',
        image: Garganey,
        description: 'The Garganey is a small dabbling duck known for its migratory habits, traveling between Europe, Asia, and Africa. Males have striking brown, white, and grey plumage with a distinctive white stripe over the eye, while females are mottled brown. Garganeys prefer shallow freshwater wetlands, where they feed on aquatic plants, insects, and crustaceans. They are shy and elusive birds, often seen during migration seasons.',
        habitat: 'Shallow freshwater wetlands and marshes',
        diet: 'Aquatic plants, insects, and crustaceans',
        lifespan: '7-10 years',
        size: 'Length 37-41 cm, Wingspan 60-75 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Garganeys are migratory birds, often traveling long distances between breeding and wintering grounds.',
        breedingSeason: 'May to July',
    },
    {
        id: 16,
        name: 'Gadwall',
        scientificName: 'Mareca strepera',
        image: Gadwall,
        description: 'The Gadwall is a medium-sized dabbling duck with understated but elegant plumage. Males have gray and brown tones, while females are mottled brown. These ducks are often found in freshwater lakes, marshes, and ponds, where they feed on aquatic plants. Gadwalls are migratory birds, often seen in North America, Europe, and Asia. They are known for their quiet and unobtrusive nature.',
        habitat: 'Lakes, marshes, and ponds',
        diet: 'Aquatic plants and seeds',
        lifespan: '10-12 years',
        size: 'Length 46-56 cm, Wingspan 78-90 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Gadwalls are relatively quiet and prefer to stay in shallow waters, often feeding alongside other ducks.',
        breedingSeason: 'April to June',
    },
    {
        id: 17,
        name: 'Eurasian Wigeon',
        scientificName: 'Mareca penelope',
        image: EurasianWigeon,
        description: 'The Eurasian Wigeon is a dabbling duck species recognized by its distinctively rounded head and short bill. Males are striking with reddish-brown heads, gray bodies, and a white wing patch, while females are mottled brown. Found across Europe and Asia, these birds migrate to warmer climates during winter. They forage for grasses, seeds, and aquatic plants in wetlands.',
        habitat: 'Wetlands, lakes, and grasslands',
        diet: 'Grasses, seeds, and aquatic plants',
        lifespan: '12-15 years',
        size: 'Length 45-51 cm, Wingspan 75-86 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Wigeons are social ducks, often found in large flocks during migration.',
        breedingSeason: 'May to July',
    },
    {
        id: 18,
        name: 'Indian Spot-billed Duck',
        scientificName: 'Anas poecilorhyncha',
        image: IndianSpotbilledDuck,
        description: 'The Indian Spot-billed Duck is a large dabbling duck native to South Asia. It is easily recognized by the distinct yellow and red spots on its bill. These ducks prefer freshwater wetlands, where they forage for aquatic plants, insects, and small fish. They are non-migratory and tend to stay in one region, often forming flocks near water bodies.',
        habitat: 'Lakes, rivers, and marshes',
        diet: 'Aquatic plants, insects, and small fish',
        lifespan: '10-14 years',
        size: 'Length 55-63 cm, Wingspan 80-95 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Spot-billed Ducks are active during the day and often form small flocks, especially near water sources.',
        breedingSeason: 'June to September',
    },
    {
        id: 19,
        name: 'Northern Pintail',
        scientificName: 'Anas acuta',
        image: NorthernPintail,
        description: 'The Northern Pintail is an elegant and slender dabbling duck, known for its long neck and distinctive pointed tail. Males have a chocolate-brown head and white neck stripe, while females are mottled brown. These birds are migratory, traveling long distances between their breeding and wintering grounds. Northern Pintails are commonly found in wetlands, where they feed on seeds and aquatic invertebrates.',
        habitat: 'Wetlands, lakes, and marshes',
        diet: 'Seeds and aquatic invertebrates',
        lifespan: '15-20 years',
        size: 'Length 50-65 cm, Wingspan 80-95 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Northern Pintails are graceful in both flight and water, often forming large flocks during migration.',
        breedingSeason: 'April to June',
    },
    {
        id: 20,
        name: 'Common Teal',
        scientificName: 'Anas crecca',
        image: CommonTeal,
        description: 'The Common Teal is one of the smallest dabbling ducks, known for its rapid flight and distinctive green wing patch. Males have a chestnut head with a green eye stripe, while females are mottled brown. These ducks are migratory, often seen in wetlands and shallow lakes during winter. They feed on aquatic plants and invertebrates.',
        habitat: 'Wetlands, lakes, and marshes',
        diet: 'Aquatic plants and invertebrates',
        lifespan: '12-14 years',
        size: 'Length 34-38 cm, Wingspan 58-64 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Teals are agile in flight and often form large flocks during migration.',
        breedingSeason: 'May to July',
    },
    {
        id: 21,
        name: 'Little Grebe',
        scientificName: 'Tachybaptus ruficollis',
        image: LittleGrebe,
        description: 'The Little Grebe, or Dabchick, is a small waterbird commonly found in freshwater ponds and lakes across Europe and Asia. It is characterized by its compact size, dark plumage, and distinctive diving behavior. These birds are excellent swimmers and divers, feeding mainly on small fish and aquatic invertebrates. They are known for their loud, trilling calls.',
        habitat: 'Lakes, ponds, and marshes',
        diet: 'Small fish and aquatic invertebrates',
        lifespan: '5-8 years',
        size: 'Length 23-29 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Grebes are shy birds, often diving underwater when disturbed.',
        breedingSeason: 'April to July',
    },
    {
        id: 22,
        name: 'Greater Flamingo',
        scientificName: 'Phoenicopterus roseus',
        image: GreaterFlamingo,
        description: 'The Greater Flamingo is the largest and most widespread species of flamingo. Known for their distinctive pink feathers and long legs, these birds inhabit saltwater lagoons, lakes, and estuaries. Flamingos feed by filtering small organisms such as algae, crustaceans, and plankton from the water using their specialized bills. They are social birds, often seen in large colonies.',
        habitat: 'Saltwater lagoons, lakes, and estuaries',
        diet: 'Algae, crustaceans, and plankton',
        lifespan: '30-50 years',
        size: 'Length 110-150 cm, Wingspan 140-165 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Greater Flamingos are highly social, often seen feeding and nesting in large flocks.',
        breedingSeason: 'April to June',
    },
    {
        id: 23,
        name: 'White-tailed Tropicbird',
        scientificName: 'Phaethon lepturus',
        image: WhitetailedTropicbird,
        description: 'The White-tailed Tropicbird is a striking seabird with long white tail feathers and black markings on its wings. It is found in tropical oceans and is known for its graceful flight and aerial displays. Tropicbirds feed primarily on fish and squid, which they catch by diving into the water. They nest on remote islands, where they lay a single egg on bare ground or cliff ledges.',
        habitat: 'Tropical oceans and remote islands',
        diet: 'Fish and squid',
        lifespan: '15-20 years',
        size: 'Length 71-80 cm (including tail), Wingspan 90-95 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-tailed Tropicbirds are powerful fliers, often seen gliding above the ocean in search of food.',
        breedingSeason: 'March to June',
    },
    {
        id: 24,
        name: 'Sri Lanka Woodpigeon',
        scientificName: 'Columba torringtoniae',
        image: SriLankaWoodPigeon,
        description: 'The Sri Lanka Woodpigeon is an endemic bird species to Sri Lanka, known for its deep grey plumage and distinctive white-and-black barred neck. It inhabits montane forests and is typically found in small flocks. These pigeons feed on a variety of fruits and seeds. Due to habitat loss, the Sri Lanka Woodpigeon is considered near-threatened.',
        habitat: 'Montane forests',
        diet: 'Fruits and seeds',
        lifespan: '6-8 years',
        size: 'Length 36-40 cm, Wingspan 58-65 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'These pigeons are often shy and elusive, making them difficult to spot in their forest habitats.',
        breedingSeason: 'March to May',
    },
    {
        id: 25,
        name: 'Eurasian Collared-dove',
        scientificName: 'Streptopelia decaocto',
        image: EurasianCollaredDove,
        description: 'The Eurasian Collared-dove is a widespread dove species, easily identified by the black "collar" on the back of its neck. It has a pale grey body and is known for its monotonous cooing calls. These birds are highly adaptable, often found in urban areas, farmlands, and gardens. Collared-doves feed on grains, seeds, and small invertebrates.',
        habitat: 'Urban areas, farmlands, and gardens',
        diet: 'Grains, seeds, and small invertebrates',
        lifespan: '10-15 years',
        size: 'Length 32-34 cm, Wingspan 47-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Collared-doves are social birds, often found in pairs or small flocks.',
        breedingSeason: 'February to October',
    },
    {
        id: 26,
        name: 'Red Collared-dove',
        scientificName: 'Streptopelia tranquebarica',
        image: RedCollareddove,
        description: 'The Red Collared-dove, also known as the Red Turtle Dove, is a small dove species with a striking reddish-brown body and a black collar around its neck. Males have more vivid coloring than females. They are commonly found in open grasslands, farmlands, and urban areas, where they forage on the ground for grains and seeds.',
        habitat: 'Grasslands, farmlands, and urban areas',
        diet: 'Grains and seeds',
        lifespan: '10-14 years',
        size: 'Length 23-26 cm, Wingspan 42-47 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Red Collared-doves are often seen in pairs or small flocks, foraging on the ground for food.',
        breedingSeason: 'March to September',
    },
    {
        id: 27,
        name: 'Western Spotted Dove',
        scientificName: 'Spilopelia suratensis',
        image: WesternSpottedDove,
        description: 'The Western Spotted Dove is a common species of pigeon characterized by a distinct spotted pattern on its neck and upper body. These birds are widespread across South Asia and are known for their gentle cooing calls. They thrive in both urban and rural environments, feeding on seeds, grains, and small fruits.',
        habitat: 'Urban areas, farmlands, and forests',
        diet: 'Seeds, grains, and fruits',
        lifespan: '8-12 years',
        size: 'Length 28-32 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Spotted Doves are often found in pairs and are known for their soft, distinctive calls.',
        breedingSeason: 'April to August',
    },
    {
        id: 28,
        name: 'Grey-capped Emerald Dove',
        scientificName: 'Chalcophaps indica',
        image: GreyCappedEmeraldDove,
        description: 'The Grey-capped Emerald Dove is a striking bird with metallic green wings and a grey crown. It is often seen walking on the forest floor, searching for fallen fruits and seeds. This species is widespread across South and Southeast Asia and is a resident breeder in Sri Lanka’s forests. They are known for their graceful flight and soft, cooing calls.',
        habitat: 'Forests and dense woodlands',
        diet: 'Fruits and seeds',
        lifespan: '12-15 years',
        size: 'Length 23-27 cm, Wingspan 40-44 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Emerald Doves are shy birds, preferring to stay hidden in dense vegetation.',
        breedingSeason: 'April to September',
    },
    {
        id: 29,
        name: 'Orange-breasted Green-pigeon',
        scientificName: 'Treron bicinctus',
        image: OrangeBrestedGreenPigeon,
        description: 'The Orange-breasted Green-pigeon is a colorful pigeon with bright green plumage and an orange breast. It is commonly found in tropical and subtropical forests across South Asia. These pigeons feed primarily on fruits, especially figs, and are often seen in large flocks high in the canopy. Their soft, melodious calls are a common sound in their habitats.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Fruits, mainly figs',
        lifespan: '10-12 years',
        size: 'Length 27-31 cm, Wingspan 42-46 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Orange-breasted Green-pigeons are social birds, often seen feeding in the treetops.',
        breedingSeason: 'March to June',
    },
    {
        id: 30,
        name: 'Sri Lanka Green-pigeon',
        scientificName: 'Treron pompadora',
        image: SriLankaGreenPigeon,
        description: 'The Sri Lanka Green-pigeon is an endemic species to Sri Lanka, distinguished by its vibrant green plumage and pinkish head. These birds are primarily frugivores, feeding on a variety of fruits in the forest canopy. They are social birds, often seen in pairs or small flocks, and are a common sight in Sri Lanka’s wet-zone forests.',
        habitat: 'Wet-zone forests',
        diet: 'Fruits and berries',
        lifespan: '10-13 years',
        size: 'Length 25-29 cm, Wingspan 40-44 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Sri Lanka Green-pigeons are shy and elusive, often staying high in the forest canopy.',
        breedingSeason: 'February to May',
    },
    {
        id: 31,
        name: 'Yellow-footed Green-pigeon',
        scientificName: 'Treron phoenicoptera',
        image: YellowFootedGreenPigeon,
        description: 'The Yellow-footed Green-pigeon, also known as the Yellow-legged Green-pigeon, is a frugivorous bird found across the Indian subcontinent. It has a distinctive green body with yellow feet and legs. These birds are highly arboreal, spending most of their time in the canopy, where they feed on a variety of fruits, especially figs.',
        habitat: 'Forests and wooded areas',
        diet: 'Fruits and figs',
        lifespan: '9-12 years',
        size: 'Length 29-33 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Yellow-footed Green-pigeons are gregarious birds, often seen in small groups.',
        breedingSeason: 'April to July',
    },
    {
        id: 32,
        name: 'Green Imperial-pigeon',
        scientificName: 'Ducula aenea',
        image: GreenImperialPigeon,
        description: 'The Green Imperial-pigeon is a large and striking bird with glossy green plumage and a light grey head. Found in tropical forests and mangroves, these birds feed on fruits and berries. They are highly arboreal and often form large flocks. Their deep, booming calls are a common sound in their habitats.',
        habitat: 'Tropical forests and mangroves',
        diet: 'Fruits and berries',
        lifespan: '10-15 years',
        size: 'Length 40-45 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Green Imperial-pigeons are often seen flying between trees, searching for fruiting trees.',
        breedingSeason: 'March to June',
    },
    {
        id: 33,
        name: 'Sri Lanka Frogmouth',
        scientificName: 'Batrachostomus moniliger',
        image: SriLankaFrogmouth,
        description: 'The Sri Lanka Frogmouth is an elusive nocturnal bird with a wide, frog-like mouth, used to catch insects at night. It has mottled brown plumage that provides excellent camouflage in the dense forests of Sri Lanka. These birds are difficult to spot due to their excellent disguise and preference for dense undergrowth.',
        habitat: 'Dense forests and thickets',
        diet: 'Insects and small invertebrates',
        lifespan: '5-8 years',
        size: 'Length 23-25 cm, Wingspan 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Sri Lanka Frogmouths are nocturnal and remain motionless during the day, blending into their surroundings.',
        breedingSeason: 'March to May',
    },
    {
        id: 34,
        name: 'Jungle Nightjar',
        scientificName: 'Caprimulgus indicus',
        image: JungleNightjar,
        description: 'The Jungle Nightjar, or Large-tailed Nightjar, is a nocturnal bird that inhabits forests and scrublands. It is camouflaged with brown, grey, and white plumage, making it nearly invisible during the day. At night, they hunt for insects, flying silently through the undergrowth. Their distinctive calls are often heard during twilight and night.',
        habitat: 'Forests and scrublands',
        diet: 'Insects',
        lifespan: '6-10 years',
        size: 'Length 24-28 cm, Wingspan 52-58 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jungle Nightjars are crepuscular and nocturnal, remaining inactive during the day.',
        breedingSeason: 'April to June',
    },
    {
        id: 35,
        name: 'Jerdon\'s Nightjar',
        scientificName: 'Caprimulgus atripennis',
        image: JerdonsNightjar,
        description: 'Jerdon\'s Nightjar, also known as the Black-winged Nightjar, is a nocturnal bird that is active at dusk and dawn. It is found in open grasslands and forests across South Asia. Its cryptic brown plumage makes it difficult to spot during the day. At night, they feed on insects, catching them mid-air during silent flight.',
        habitat: 'Open grasslands and forests',
        diet: 'Insects',
        lifespan: '6-9 years',
        size: 'Length 23-26 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jerdon\'s Nightjars are nocturnal and are known for their distinct repetitive calls heard during twilight.',
        breedingSeason: 'April to August',
    },
    {
        id: 36,
        name: 'Indian Nightjar',
        scientificName: 'Caprimulgus asiaticus',
        image: IndianNightjar,
        description: 'The Indian Nightjar is a nocturnal bird known for its distinctive chirring calls during dusk and dawn. Its cryptic brown, grey, and white plumage helps it blend into the forest floor during the day. This bird is primarily insectivorous, feeding on moths and beetles, and is widely distributed across South Asia.',
        habitat: 'Grasslands, scrublands, and forests',
        diet: 'Insects, especially moths and beetles',
        lifespan: '6-9 years',
        size: 'Length 23-26 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Nightjars are crepuscular and nocturnal, often seen hunting insects at dusk and dawn.',
        breedingSeason: 'March to July',
    },
    {
        id: 37,
        name: 'Crested Treeswift',
        scientificName: 'Hemiprocne coronata',
        image: CrestedTreeswift,
        description: 'The Crested Treeswift is an elegant bird with long, slender wings and a crest on its head. It is often seen perched high in trees or gliding gracefully through the air in search of flying insects. These birds are found in forests and open woodlands across South Asia. They are known for their swift flight and aerial acrobatics.',
        habitat: 'Forests and open woodlands',
        diet: 'Flying insects',
        lifespan: '5-8 years',
        size: 'Length 20-25 cm, Wingspan 48-53 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Crested Treeswifts are highly aerial and can often be seen catching insects in mid-flight.',
        breedingSeason: 'February to May',
    },
    {
        id: 38,
        name: 'Brown-backed Needletail',
        scientificName: 'Hirundapus giganteus',
        image: BrownBackedNeedletail,
        description: 'The Brown-backed Needletail is one of the fastest-flying birds in the world, with a robust body and long, pointed wings. These swifts are adept at catching insects on the wing and can be seen performing rapid aerial maneuvers in pursuit of prey. They inhabit forested areas and open landscapes across South and Southeast Asia.',
        habitat: 'Forests and open landscapes',
        diet: 'Flying insects',
        lifespan: '8-10 years',
        size: 'Length 20-22 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown-backed Needletails are powerful fliers, often seen in flocks darting through the air in search of insects.',
        breedingSeason: 'May to August',
    },
    {
        id: 39,
        name: 'Indian Swiftlet',
        scientificName: 'Aerodramus unicolor',
        image: IndianSwiftlet,
        description: 'The Indian Swiftlet is a small, fast-flying bird commonly found in caves and rocky cliffs, where it builds its nests. These birds are aerial insectivores, catching insects on the wing. They are known for their ability to navigate in complete darkness within caves using echolocation, a trait unique among swiftlets.',
        habitat: 'Caves, cliffs, and urban areas',
        diet: 'Flying insects',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm, Wingspan 26-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Swiftlets are highly social and form large colonies in caves, where they build nests out of saliva.',
        breedingSeason: 'March to June',
    },
    {
        id: 40,
        name: 'Asian Palm-swift',
        scientificName: 'Cypsiurus balasiensis',
        image: AsianPalmSwift,
        description: 'The Asian Palm-swift is a small, agile bird often found near palm trees, where it builds its nest. These birds are highly aerial and spend most of their time in flight, catching insects on the wing. They are widespread across tropical Asia and are known for their distinctive nests, made from palm fibers and attached to palm leaves.',
        habitat: 'Palm groves and open landscapes',
        diet: 'Flying insects',
        lifespan: '5-7 years',
        size: 'Length 13-15 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Asian Palm-swifts are constantly on the wing, rarely perching, and are often seen darting through the air near palm trees.',
        breedingSeason: 'April to July',
    },
    {
        id: 41,
        name: 'Alpine Swift',
        scientificName: 'Tachymarptis melba',
        image: AlpineSwift,
        description: 'The Alpine Swift is a large, powerful bird with a white belly and dark brown upperparts. It is a remarkable long-distance migrant, known for spending most of its life in the air. These birds feed exclusively on flying insects and are capable of flying non-stop for days. They are often seen soaring high in the sky in search of prey.',
        habitat: 'Mountains, cliffs, and urban areas',
        diet: 'Flying insects',
        lifespan: '8-12 years',
        size: 'Length 20-23 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Alpine Swifts are expert fliers, capable of performing extended aerial journeys across vast distances.',
        breedingSeason: 'June to August',
    },
    {
        id: 42,
        name: 'Little Swift',
        scientificName: 'Apus affinis',
        image: LittleSwift,
        description: 'The Little Swift is a small, fast-flying bird commonly found in urban areas and near cliffs. It builds cup-shaped nests under the eaves of buildings or in rock crevices. These birds are highly social and often seen in large flocks, darting through the air in search of flying insects. Their short, forked tail distinguishes them from other swifts.',
        habitat: 'Urban areas and cliffs',
        diet: 'Flying insects',
        lifespan: '6-9 years',
        size: 'Length 12-14 cm, Wingspan 28-32 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Swifts are fast and agile fliers, frequently seen swooping over rooftops in large flocks.',
        breedingSeason: 'April to July',
    },
    {
        id: 43,
        name: 'Green-billed Coucal',
        scientificName: 'Centropus chlororhynchos',
        image: GreenBilledCoucal,
        description: 'The Green-billed Coucal is a shy and elusive bird, endemic to the wet-zone forests of Sri Lanka. It has a distinctive green bill, and its plumage is dark brown with a greenish gloss. This species is known for its slow, deliberate movements as it forages through dense undergrowth for insects, small vertebrates, and fruits.',
        habitat: 'Wet-zone forests',
        diet: 'Insects, small vertebrates, and fruits',
        lifespan: '10-12 years',
        size: 'Length 43-46 cm, Wingspan 50-55 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'Green-billed Coucals are solitary birds, often seen creeping through the undergrowth in search of food.',
        breedingSeason: 'May to August',
    },
    {
        id: 44,
        name: 'Greater Coucal',
        scientificName: 'Centropus sinensis',
        image: GreaterCoucal,
        description: 'The Greater Coucal, also known as the Crow Pheasant, is a large, crow-like bird with glossy black plumage and chestnut wings. It is commonly found in thick vegetation and forests across South and Southeast Asia. This bird feeds on a variety of prey, including insects, small mammals, and reptiles, as well as fruits and seeds.',
        habitat: 'Forests, scrublands, and agricultural areas',
        diet: 'Insects, small mammals, reptiles, fruits, and seeds',
        lifespan: '10-15 years',
        size: 'Length 48-52 cm, Wingspan 60-65 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Greater Coucals are ground-dwelling birds that are often seen moving stealthily through dense vegetation.',
        breedingSeason: 'March to September',
    },
    {
        id: 45,
        name: 'Sirkeer Malkoha',
        scientificName: 'Taccocua leschenaultii',
        image: SirkeerMalkoha,
        description: 'The Sirkeer Malkoha is a striking bird with a long tail, bare skin around the eyes, and a curved bill. It is found in dry scrublands and forests across India and Sri Lanka. This bird primarily feeds on insects, small reptiles, and fruits, foraging slowly through dense vegetation. Its distinctive appearance and slow movements make it a fascinating species to observe.',
        habitat: 'Dry scrublands and forests',
        diet: 'Insects, small reptiles, and fruits',
        lifespan: '7-9 years',
        size: 'Length 40-45 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Sirkeer Malkohas are shy birds, often seen moving slowly through thickets in search of food.',
        breedingSeason: 'April to August',
    },
    {
        id: 46,
        name: 'Red-faced Malkoha',
        scientificName: 'Phaenicophaeus pyrrhocephalus',
        image: RedFacedMalkoha,
        description: 'The Red-faced Malkoha is a striking bird with a vivid red face and a long tail. It is found in dense forests across South and Southeast Asia, often foraging in the understory for insects and small fruits. Its long tail and colorful face make it easily identifiable.',
        habitat: 'Dense forests and woodlands',
        diet: 'Insects, small reptiles, and fruits',
        lifespan: '5-7 years',
        size: 'Length 40-45 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Red-faced Malkohas are arboreal and can often be seen creeping through the dense foliage, foraging for food.',
        breedingSeason: 'April to August',
    },
    {
        id: 47,
        name: 'Blue-faced Malkoha',
        scientificName: 'Phaenicophaeus viridis',
        image: BlueFacedMalkoha,
        description: 'The Blue-faced Malkoha is a large, striking bird with a distinctive blue face and greenish plumage. It is native to the forests and woodlands of Southeast Asia, where it is often found perched quietly in dense undergrowth, feeding on insects and fruits.',
        habitat: 'Forests and woodlands',
        diet: 'Insects and fruits',
        lifespan: '6-8 years',
        size: 'Length 38-45 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Blue-faced Malkoha is mostly sedentary, feeding and nesting in dense forest environments.',
        breedingSeason: 'March to August',
    },
    {
        id: 48,
        name: 'Jacobin Cuckoo',
        scientificName: 'Clamator jacobinus',
        image: JacobinCuckoo,
        description: 'The Jacobin Cuckoo is a medium-sized cuckoo known for its striking black-and-white plumage and long tail. It is found in a variety of habitats, including forests, open woodlands, and urban areas. These birds are parasitic, often laying their eggs in the nests of other bird species.',
        habitat: 'Forests, woodlands, and urban areas',
        diet: 'Insects, especially caterpillars and beetles',
        lifespan: '6-10 years',
        size: 'Length 30-35 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jacobin Cuckoos are known for their parasitic nesting habits, where they lay eggs in the nests of smaller birds.',
        breedingSeason: 'May to July',
    },
    {
        id: 49,
        name: 'Chestnut-winged Cuckoo',
        scientificName: 'Clamator coromandus',
        image: ChestnutWingedCuckoo,
        description: 'The Chestnut-winged Cuckoo is a large cuckoo with a distinctive chestnut-colored wing. It is often found in tropical forests and woodlands across South Asia. Like many cuckoos, it is parasitic, laying its eggs in the nests of smaller birds.',
        habitat: 'Tropical forests and woodlands',
        diet: 'Insects, small reptiles, and fruits',
        lifespan: '5-8 years',
        size: 'Length 35-40 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This cuckoo is often seen perched in trees, waiting for prey or searching for nest hosts to lay its eggs.',
        breedingSeason: 'April to August',
    },
    {
        id: 50,
        name: 'Western Koel',
        scientificName: 'Eudynamys melanorhynchus',
        image: WesternKoel,
        description: 'The Western Koel is a large cuckoo known for its distinctively loud calls during the breeding season. It is found in open woodlands and gardens across South Asia. The male is glossy black with a red eye, while the female is brown with streaks. The Western Koel is parasitic, laying eggs in the nests of other birds.',
        habitat: 'Woodlands, gardens, and urban areas',
        diet: 'Fruits, seeds, and insects',
        lifespan: '8-12 years',
        size: 'Length 42-45 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Western Koels are often heard calling loudly from trees, particularly during the breeding season, and are known for their parasitic nesting habits.',
        breedingSeason: 'March to July',
    },
    {
        id: 51,
        name: 'Asian Emerald Cuckoo',
        scientificName: 'Chrysococcyx maculatus',
        image: AsianEmeraldCuckoo,
        description: 'The Asian Emerald Cuckoo is a small, colorful bird with an iridescent emerald green plumage. It is typically found in forested areas across Southeast Asia, where it feeds on insects and small invertebrates. Like other cuckoos, it is parasitic and lays its eggs in the nests of other birds.',
        habitat: 'Forests and woodlands',
        diet: 'Insects and small invertebrates',
        lifespan: '4-7 years',
        size: 'Length 16-18 cm, Wingspan 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Asian Emerald Cuckoo is a quiet, elusive bird often seen flitting through the canopy in search of food.',
        breedingSeason: 'April to July',
    },
    {
        id: 52,
        name: 'Banded Bay Cuckoo',
        scientificName: 'Cacomantis sonneratii',
        image: BandedBayCuckoo,
        description: 'The Banded Bay Cuckoo is a small, slender cuckoo with distinctive black and white bands on its wings and tail. It inhabits tropical forests and mangroves and is known for its parasitic nesting behavior, laying its eggs in the nests of smaller birds.',
        habitat: 'Tropical forests and mangroves',
        diet: 'Insects and small invertebrates',
        lifespan: '5-6 years',
        size: 'Length 22-25 cm, Wingspan 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Banded Bay Cuckoos are solitary birds, foraging for insects and small creatures on the forest floor and in the canopy.',
        breedingSeason: 'April to August',
    },
    {
        id: 53,
        name: 'Grey-bellied Cuckoo',
        scientificName: 'Cacomantis passerinus',
        image: GreyBelliedCuckoo,
        description: 'The Grey-bellied Cuckoo is a small cuckoo with a greyish belly and brown upperparts. It is found in forests and scrublands across South Asia, often near water sources. Like other cuckoos, it is parasitic and lays its eggs in the nests of other birds.',
        habitat: 'Forests, scrublands, and near water',
        diet: 'Insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm, Wingspan 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Grey-bellied Cuckoos are usually seen moving slowly through dense vegetation in search of food.',
        breedingSeason: 'May to August',
    },
    {
        id: 54,
        name: 'Fork-tailed Drongo-cuckoo',
        scientificName: 'Surniculus dicruroides',
        image: ForkTailedDrongoCuckoo,
        description: 'The Fork-tailed Drongo-cuckoo is a medium-sized cuckoo with a distinctive forked tail and black plumage. It is native to forests across South Asia, where it lays its eggs in the nests of other birds, particularly drongos. These cuckoos are known for their distinctive calls and acrobatic flight.',
        habitat: 'Forests and woodlands',
        diet: 'Insects, small vertebrates, and fruits',
        lifespan: '6-8 years',
        size: 'Length 35-40 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This cuckoo is a skilled flyer, often seen darting through the forest canopy and making use of its forked tail for agility.',
        breedingSeason: 'April to June',
    },
    {
        id: 55,
        name: 'Common Hawk-cuckoo',
        scientificName: 'Hierococcyx varius',
        image: CommonHawkCuckoo,
        description: 'The Common Hawk-cuckoo, also known as the Brainfever Bird due to its distinctive call, is a large cuckoo found across South Asia. It is often seen perched in trees, where it hunts for insects and small prey. Its distinctive call is heard regularly during the breeding season.',
        habitat: 'Forests and woodlands',
        diet: 'Insects, small reptiles, and birds',
        lifespan: '7-10 years',
        size: 'Length 38-45 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This cuckoo is known for its loud, repetitive calls, which it uses to mark its territory and attract mates during the breeding season.',
        breedingSeason: 'March to June',
    },
    {
        id: 56,
        name: 'Indian Cuckoo',
        scientificName: 'Cuculus micropterus',
        image: IndianCuckoo,
        description: 'The Indian Cuckoo is a medium-sized cuckoo found across India. It is a parasitic bird, laying its eggs in the nests of other birds, especially small passerines. It is a shy bird, often found in dense vegetation, where it feeds on insects and small invertebrates.',
        habitat: 'Forests, scrublands, and grasslands',
        diet: 'Insects and small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 30-35 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Indian Cuckoo is often heard calling in the early morning or late evening during the breeding season, while it moves through the foliage in search of food.',
        breedingSeason: 'April to July',
    },
    {
        id: 57,
        name: 'Common Cuckoo',
        scientificName: 'Cuculus canorus',
        image: CommonCuckoo,
        description: 'The Common Cuckoo is a well-known species found across Europe, Asia, and North Africa. It is famous for its parasitic nesting behavior, laying its eggs in the nests of other birds. The cuckoo’s call is a common sound during spring and summer.',
        habitat: 'Woodlands, grasslands, and gardens',
        diet: 'Insects, caterpillars, and small vertebrates',
        lifespan: '5-10 years',
        size: 'Length 33-35 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Cuckoos are solitary birds that lay their eggs in the nests of other birds, avoiding parental care of their young.',
        breedingSeason: 'March to July',
    },
    {
        id: 58,
        name: 'Lesser Cuckoo',
        scientificName: 'Cuculus poliocephalus',
        image: LesserCuckoo,
        description: 'The Lesser Cuckoo is a small cuckoo that breeds in open areas, such as grasslands and scrublands. It is a parasitic bird, laying its eggs in the nests of smaller birds like warblers and babblers. Its call is a distinctive, repetitive “cu-coo.”',
        habitat: 'Grasslands, scrublands, and open forests',
        diet: 'Insects and small invertebrates',
        lifespan: '3-6 years',
        size: 'Length 26-30 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Lesser Cuckoos are often seen foraging in the undergrowth or along the edges of fields, where they hunt insects.',
        breedingSeason: 'April to June',
    },
    {
        id: 59,
        name: 'Slaty-legged Crake',
        scientificName: 'Rallina eurizonoides',
        image: SlatyLeggedCrake,
        description: 'The Slaty-legged Crake is a small, secretive bird found in wetland areas across South Asia. It has a slaty-grey plumage and is often seen in dense vegetation near water sources. This bird is primarily nocturnal, coming out during the night to forage for insects, small crustaceans, and seeds.',
        habitat: 'Wetlands, marshes, and ponds',
        diet: 'Insects, small crustaceans, and seeds',
        lifespan: '4-6 years',
        size: 'Length 25-30 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Slaty-legged Crakes are shy and often hide in dense vegetation, making them hard to spot. They are more active at dusk and dawn.',
        breedingSeason: 'April to August',
    },
    {
        id: 60,
        name: 'Slaty-breasted Rail',
        scientificName: 'Lewinia striata',
        image: SlatyBreastedRail,
        description: 'The Slaty-breasted Rail is a large, stocky rail found in marshes and wetlands across South Asia. It is known for its greyish-blue plumage and distinctive vocalizations. These birds are secretive and rarely seen in the open, preferring to stay close to dense vegetation and water.',
        habitat: 'Marshes, wetlands, and swampy areas',
        diet: 'Insects, small vertebrates, and seeds',
        lifespan: '6-9 years',
        size: 'Length 40-50 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Slaty-breasted Rails are often heard calling from within dense vegetation, where they hide during the day.',
        breedingSeason: 'April to August',
    },
    {
        id: 61,
        name: 'Corncrake',
        scientificName: 'Crex crex',
        image: Corncrake,
        description: 'The Corncrake is a small, secretive bird found in tall grasslands across Europe and Asia. Known for its distinctive "crex-crex" call, it is rarely seen as it prefers to remain hidden in dense vegetation. The Corncrake has a streaked brown body with a pale underside. These birds are migratory, spending winters in sub-Saharan Africa. They primarily feed on insects, seeds, and small invertebrates, and are considered a species of conservation concern in several regions.',
        habitat: 'Grasslands, wetlands, and agricultural fields',
        diet: 'Insects, seeds, small invertebrates',
        lifespan: '3-4 years',
        size: 'Length 23-27 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Corncrake is known for its elusive behavior, often hiding in tall grass and only emerging at dusk to forage.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 62,
        name: 'Ruddy-breasted Crake',
        scientificName: 'Porzana fusca',
        image: RuddyBreastedCrake,
        description: 'The Ruddy-breasted Crake is a small and shy bird found in dense marshes and reed beds in South and Southeast Asia. Its distinctive red-brown chest and legs give it a striking appearance. Typically, these birds are difficult to spot due to their preference for remaining hidden among thick vegetation. They are most active at dawn and dusk and feed on insects, small invertebrates, and seeds. They are known for their soft, melodious calls that echo through wetlands.',
        habitat: 'Marshes, reed beds, wetlands',
        diet: 'Insects, small invertebrates, seeds',
        lifespan: 'Up to 4 years',
        size: 'Length 23-25 cm, Wingspan 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Ruddy-breasted Crake is a secretive and elusive species, often heard rather than seen.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 63,
        name: 'Baillon\'s Crake',
        scientificName: 'Porzana pusilla',
        image: BaillonsCrake,
        description: 'Baillon\'s Crake is a small waterbird found in wetlands and marshes across Europe, Asia, and Africa. Characterized by its small size and distinctive plumage, this bird has a dark back, pale underparts, and a light brown head. Known for its quick movements, it is rarely seen as it prefers to stay hidden among reeds and vegetation. Baillon\'s Crake feeds on insects, small aquatic invertebrates, and seeds, and is usually more active at night or dawn.',
        habitat: 'Wetlands, marshes, reed beds',
        diet: 'Insects, small aquatic invertebrates, seeds',
        lifespan: '3-5 years',
        size: 'Length 18-22 cm, Wingspan 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Baillon\'s Crake is elusive, often heard more frequently than seen.',
        breedingSeason: 'April to September'
    },
    
    {
        id: 64,
        name: 'White-breasted Waterhen',
        scientificName: 'Amaurornis phoenicurus',
        image: WhiteBreastedWaterhen,
        description: 'The White-breasted Waterhen is a large, striking bird found in wetland habitats across South and Southeast Asia. It has a distinctive white breast, dark brown body, and a long, slender red bill. These birds are often seen foraging on the ground near water, feeding on insects, small amphibians, and seeds. White-breasted Waterhens are highly adaptable and can be found in a variety of wetland environments, from ponds to rivers, often in the company of other waterbirds.',
        habitat: 'Wetlands, marshes, riversides',
        diet: 'Insects, small amphibians, seeds',
        lifespan: '4-6 years',
        size: 'Length 30-35 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These birds are active during the day and are often seen walking along water edges in search of food.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 65,
        name: 'Watercock',
        scientificName: 'Gallicrex cinerea',
        image: Watercock,
        description: 'The Watercock is a large, striking bird native to Southeast Asia, often found in wetlands and reed beds. It has a distinctive black body with a prominent red wattle around its face, giving it a unique appearance. The Watercock is known for its solitary behavior, typically foraging alone in shallow waters. It feeds on a diet of insects, aquatic plants, and seeds, and is rarely seen during daylight, preferring to forage at dawn or dusk.',
        habitat: 'Wetlands, marshes, reed beds',
        diet: 'Insects, aquatic plants, seeds',
        lifespan: '5-7 years',
        size: 'Length 35-45 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Watercocks are solitary, usually foraging alone, and are most active at twilight.',
        breedingSeason: 'June to September'
    },
    
    {
        id: 66,
        name: 'Purple Swamphen',
        scientificName: 'Porphyrio porphyrio',
        image: PurpleSwamphen,
        description: 'The Purple Swamphen is a large, colorful bird commonly found in wetlands across Asia and Europe. Known for its vibrant purple-blue plumage and striking red bill, it is a dominant species in its wetland habitat. These birds are often seen foraging for seeds, insects, and aquatic plants in shallow waters, where they are highly adaptable. Purple Swamphens are strong swimmers and can be seen wading through the water with ease, using their large feet to navigate through reeds and marshes.',
        habitat: 'Wetlands, marshes, ponds',
        diet: 'Seeds, insects, aquatic plants',
        lifespan: '7-10 years',
        size: 'Length 35-42 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Purple Swamphens are social birds, often found in small groups foraging and vocalizing together.',
        breedingSeason: 'April to August'
    },
    {
        id: 67,
        name: 'Common Moorhen',
        scientificName: 'Gallinula chloropus',
        image: CommonMoorhen,
        description: 'The Common Moorhen is a medium-sized water bird found in freshwater habitats like lakes, rivers, and marshes. It has a dark body with a white streak along its side and a red bill. Common Moorhens are omnivorous, feeding on plants, insects, and small invertebrates. Known for their fast movements and ability to hide in dense vegetation, they are adaptable birds that can thrive in urban and rural areas alike.',
        habitat: 'Lakes, rivers, marshes',
        diet: 'Plants, insects, small invertebrates',
        lifespan: '5-10 years',
        size: 'Length 30-35 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Moorhens are known for their erratic swimming and diving behaviors. They are often seen in groups near water.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 68,
        name: 'Common Coot',
        scientificName: 'Fulica atra',
        image: CommonCoot,
        description: 'The Common Coot is a medium-sized water bird found in lakes, rivers, and marshes. It has a black body with a white face and a short, thick bill. Coots are omnivorous, feeding on aquatic plants, insects, and small invertebrates. They are known for their erratic swimming and diving behaviors, and they are highly adaptable, thriving in both urban and rural habitats. Coots are often seen in groups, especially during breeding season.',
        habitat: 'Lakes, rivers, marshes',
        diet: 'Aquatic plants, insects, small invertebrates',
        lifespan: '5-10 years',
        size: 'Length 35-40 cm, Wingspan 55-65 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Coots are often seen in groups and are known for their fast swimming and diving abilities.',
        breedingSeason: 'March to July'
    },
    
    {
        id: 69,
        name: 'Wilson\'s Storm-petrel',
        scientificName: 'Oceanites oceanicus',
        image: WilsonsStormPetrel,
        description: 'Wilson\'s Storm-petrel is a small seabird known for its graceful flight and hovering over the ocean to feed. It has dark plumage with white patches on its wings. Found in temperate and polar regions, especially during summer months, this bird catches small fish and zooplankton by skimming the water’s surface. Wilson\'s Storm-petrels are highly migratory and are often seen far from land, following ships in open waters.',
        habitat: 'Open ocean, coastal waters',
        diet: 'Small fish, zooplankton',
        lifespan: '6-8 years',
        size: 'Length 17-22 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Wilson\'s Storm-petrels are known for their long-distance flights and their feeding behavior, skimming the water for food.',
        breedingSeason: 'June to September'
    },
    
    {
        id: 70,
        name: 'Swinhoe\'s Storm-petrel',
        scientificName: 'Oceanodroma monorhis',
        image: SwinhoesStormPetrel,
        description: 'Swinhoe\'s Storm-petrel is a small seabird found in the western Pacific. With dark feathers and a white rump, these birds hover above the ocean, dipping their beaks into the water to catch small marine organisms. They are known for their long migrations and are often seen in large numbers during the breeding season. Swinhoe\'s Storm-petrels are migratory and often follow ships far from land.',
        habitat: 'Open ocean, coastal waters',
        diet: 'Small marine organisms, plankton',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Swinhoe\'s Storm-petrels are migratory seabirds that hover over the ocean surface while feeding.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 71,
        name: 'Wedge-tailed Shearwater',
        scientificName: 'Ardenna pacifica',
        image: WedgeTailedShearwater,
        description: 'The Wedge-tailed Shearwater is a medium-sized seabird found in the Indian and Pacific Oceans. It has long wings and a characteristic wedge-shaped tail. These birds are exceptional fliers, often gliding over the ocean. They breed in colonies on tropical islands and primarily feed on small fish, squid, and invertebrates. Wedge-tailed Shearwaters are highly migratory, traveling vast distances between their breeding and feeding grounds.',
        habitat: 'Tropical islands, open ocean',
        diet: 'Small fish, squid, invertebrates',
        lifespan: '10-15 years',
        size: 'Length 40-50 cm, Wingspan 90-110 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Wedge-tailed Shearwaters are known for their long-distance migrations and exceptional flying abilities.',
        breedingSeason: 'September to March'
    },
    
    {
        id: 72,
        name: 'Short-tailed Shearwater',
        scientificName: 'Ardenna tenuirostris',
        image: ShortTailedShearwater,
        description: 'The Short-tailed Shearwater is a medium-sized seabird found in the southern oceans, particularly around Australia and New Zealand. They are known for their short, forked tails and dark plumage with light undersides. These birds are powerful fliers and can travel vast distances during migration. They breed in burrows on remote islands and feed on small fish, squid, and other marine organisms. Short-tailed Shearwaters are highly migratory and breed in colonies.',
        habitat: 'Southern oceans, remote islands',
        diet: 'Small fish, squid, marine organisms',
        lifespan: '10-15 years',
        size: 'Length 40-45 cm, Wingspan 90-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Short-tailed Shearwaters are known for their long-distance migrations and strong flying abilities.',
        breedingSeason: 'October to March'
    },
    {
        id: 73,
        name: 'Flesh-footed Shearwater',
        scientificName: 'Puffinus carneipes',
        image: FleshFootedShearwater,
        description: 'The Flesh-footed Shearwater is a large seabird found in the southern oceans. It has distinctive pale flesh-colored legs and feet. These birds are powerful fliers and can cover vast distances while migrating. They feed on small fish, squid, and other marine life, diving into the water to catch prey. Flesh-footed Shearwaters breed on remote islands and are known for their long migratory patterns across the Indian and Pacific Oceans.',
        habitat: 'Open ocean, remote islands',
        diet: 'Small fish, squid, marine organisms',
        lifespan: '10-15 years',
        size: 'Length 45-50 cm, Wingspan 90-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Flesh-footed Shearwaters are known for their strong migration habits and long-distance flights over the open ocean.',
        breedingSeason: 'November to March'
    },
    
    {
        id: 74,
        name: 'Lesser Adjutant',
        scientificName: 'Leptoptilos javanicus',
        image: LesserAdjutant,
        description: 'The Lesser Adjutant is a large stork found in South and Southeast Asia. It has a distinctive bare neck and head, which is often pale in color. These storks are scavengers, feeding on small animals, carrion, and fish. Lesser Adjutants are often seen in wetlands, marshes, and along rivers, where they search for food. They are known for their slow, deliberate movements and large wingspan, which they use to glide gracefully over their habitats.',
        habitat: 'Wetlands, marshes, rivers',
        diet: 'Small animals, carrion, fish',
        lifespan: '15-20 years',
        size: 'Height 100-120 cm, Wingspan 200-230 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'Lesser Adjutants are often solitary or found in small groups, foraging for food in wetland areas.',
        breedingSeason: 'December to May'
    },
    
    {
        id: 75,
        name: 'Painted Stork',
        scientificName: 'Mycteria leucocephala',
        image: PaintedStork,
        description: 'The Painted Stork is a large, brightly colored stork found in wetlands across the Indian subcontinent. It has a striking pink and white body with a long, curved bill. These birds are often seen wading through shallow waters in search of fish, frogs, and small invertebrates. Painted Storks are known for their distinctive flying posture, with their necks extended forward and legs trailing behind. They breed in colonies and are highly social during the breeding season.',
        habitat: 'Wetlands, rivers, shallow lakes',
        diet: 'Fish, frogs, small invertebrates',
        lifespan: '20-25 years',
        size: 'Height 90-105 cm, Wingspan 145-160 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Painted Storks are social birds, often seen in large flocks during the breeding season, foraging and nesting together.',
        breedingSeason: 'November to April'
    },
    
    {
        id: 76,
        name: 'Asian Openbill',
        scientificName: 'Anastomus oscitans',
        image: AsianOpenbill,
        description: 'The Asian Openbill is a medium-sized stork found across South and Southeast Asia. It has distinctive black and white plumage with a unique gap in its bill, which gives it its name. These birds are known for feeding on snails, which they extract from water using their specialized bill. Asian Openbills are often seen in wetlands, marshes, and flooded fields, where they hunt for food. They are highly social and often form large groups, especially during the breeding season.',
        habitat: 'Wetlands, marshes, flooded fields',
        diet: 'Snails, small aquatic animals',
        lifespan: '10-15 years',
        size: 'Height 75-90 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Asian Openbills are social birds often found in large groups during breeding season, foraging for snails and other aquatic creatures.',
        breedingSeason: 'July to November'
    },
    
    {
        id: 77,
        name: 'Black Stork',
        scientificName: 'Ciconia nigra',
        image: BlackStork,
        description: 'The Black Stork is a large, striking bird known for its dark plumage and long, slender neck. Found in forests and wetlands across Europe, Asia, and Africa, these storks are often solitary and highly secretive. They feed on fish, amphibians, and small reptiles, using their sharp beaks to catch prey. Black Storks are migratory, traveling long distances between their breeding grounds and wintering areas. They are considered a symbol of good luck in many cultures.',
        habitat: 'Forests, wetlands, rivers',
        diet: 'Fish, amphibians, small reptiles',
        lifespan: '20-25 years',
        size: 'Height 90-100 cm, Wingspan 180-200 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Black Storks are known for their solitary nature, often found alone or in small groups, quietly hunting near water.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 78,
        name: 'Asian Woollyneck',
        scientificName: 'Ciconia episcopus',
        image: AsianWoollyneck,
        description: 'The Asian Woollyneck is a large stork found in wetlands across South and Southeast Asia. It is characterized by its long neck, which is covered in fine white feathers that resemble wool. These birds feed on fish, amphibians, and insects, wading through shallow waters to catch prey. Woollynecks are highly social and often found in large colonies, especially during the breeding season. They are also known for their distinctive call, which is often heard during courtship.',
        habitat: 'Wetlands, marshes, rivers',
        diet: 'Fish, amphibians, insects',
        lifespan: '15-20 years',
        size: 'Height 90-105 cm, Wingspan 160-180 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Asian Woollynecks are social birds, often seen in large groups during breeding and foraging.',
        breedingSeason: 'May to August'
    },
    
    {
        id: 79,
        name: 'White Stork',
        scientificName: 'Ciconia ciconia',
        image: WhiteStork,
        description: 'The White Stork is a large, elegant bird known for its long legs and long, straight bill. Found in Europe, Asia, and Africa, White Storks are often associated with wetland habitats such as marshes, lakes, and rivers. These birds feed on a variety of small animals, including insects, frogs, and small reptiles. White Storks are migratory and are famous for their long-distance journeys, traveling from Europe to Africa during the winter.',
        habitat: 'Wetlands, marshes, rivers',
        diet: 'Insects, frogs, small reptiles',
        lifespan: '20-25 years',
        size: 'Height 100-115 cm, Wingspan 175-215 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White Storks are known for their impressive migratory behavior, traveling thousands of kilometers between breeding and wintering grounds.',
        breedingSeason: 'March to July'
    },
    
    {
        id: 80,
        name: 'Black-necked Stork',
        scientificName: 'Ephippiorhynchus asiaticus',
        image: BlackNeckedStork,
        description: 'The Black-necked Stork is a large stork species found in South and Southeast Asia. It is known for its striking black neck, which contrasts with its white body and black wings. These birds are often found in wetlands and rivers, where they feed on fish, amphibians, and small reptiles. Black-necked Storks are strong fliers and are known for their graceful movements. They are solitary birds and are often seen hunting alone or in small groups.',
        habitat: 'Wetlands, rivers, lakes',
        diet: 'Fish, amphibians, small reptiles',
        lifespan: '15-20 years',
        size: 'Height 100-115 cm, Wingspan 180-200 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-necked Storks are solitary birds, known for their graceful movements and hunting skills in wetland areas.',
        breedingSeason: 'June to September'
    },
    {
        id: 81,
        name: 'Eurasian Spoonbill',
        scientificName: 'Platalea leucorodia',
        image: EurasianSpoonbill,
        description: 'The Eurasian Spoonbill is a large wading bird characterized by its long, spoon-shaped bill. Found across Europe, Asia, and parts of Africa, these birds inhabit shallow wetlands, where they forage for small fish, crustaceans, and insects. Spoonbills are known for their graceful foraging behavior, sweeping their bills through the water to catch prey. During breeding season, they often form large colonies in trees or on the ground, where they build nests out of twigs and reeds.',
        habitat: 'Wetlands, shallow lakes, rivers',
        diet: 'Small fish, crustaceans, insects',
        lifespan: '15-20 years',
        size: 'Height 80-100 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Spoonbills are social birds, often seen in large flocks during migration and breeding season.',
        breedingSeason: 'April to July'
    },
    
    {
        id: 82,
        name: 'Black-headed Ibis',
        scientificName: 'Threskiornis melanocephalus',
        image: BlackHeadedIbis,
        description: 'The Black-headed Ibis is a large wading bird known for its dark head and neck, which contrasts with its white body. These birds are found in wetlands and shallow waters across South Asia, where they feed on fish, frogs, and small invertebrates. Black-headed Ibises have a distinctive foraging technique, using their long bills to probe the mud for prey. They often nest in colonies in trees or on the ground near water.',
        habitat: 'Wetlands, rivers, ponds',
        diet: 'Fish, frogs, small invertebrates',
        lifespan: '10-15 years',
        size: 'Height 70-80 cm, Wingspan 100-110 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Black-headed Ibises are often found in small groups, especially during the breeding season when they form large colonies.',
        breedingSeason: 'May to August'
    },
    
    {
        id: 83,
        name: 'Glossy Ibis',
        scientificName: 'Plegadis falcinellus',
        image: GlossyIbis,
        description: 'The Glossy Ibis is a medium-sized wading bird with striking iridescent plumage that changes color depending on the light. Found in wetlands across Europe, Asia, and Africa, these birds are often seen foraging for fish, insects, and small invertebrates in shallow water. Glossy Ibises are known for their long, curved bills, which they use to probe the mud and water for prey. They breed in colonies and build their nests in trees or on the ground.',
        habitat: 'Wetlands, marshes, rivers',
        diet: 'Fish, insects, small invertebrates',
        lifespan: '10-15 years',
        size: 'Height 55-65 cm, Wingspan 80-90 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Glossy Ibises are social birds, often seen in large flocks while foraging and breeding.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 84,
        name: 'Eurasian Bittern',
        scientificName: 'Botaurus stellaris',
        image: EurasianBittern,
        description: 'The Eurasian Bittern is a large, secretive wader found in marshes and reed beds across Europe and Asia. It is known for its cryptic plumage, which helps it blend into its surroundings. These birds are primarily nocturnal and feed on small fish, amphibians, and invertebrates. The Eurasian Bittern is a skilled hunter, using its long neck and sharp bill to catch prey. Its booming calls during the breeding season are distinctive and can be heard over long distances.',
        habitat: 'Marshes, reed beds, wetlands',
        diet: 'Small fish, amphibians, invertebrates',
        lifespan: '10-15 years',
        size: 'Height 60-80 cm, Wingspan 85-90 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Eurasian Bitterns are solitary and secretive birds, often staying hidden in dense vegetation.',
        breedingSeason: 'February to May'
    },
    
    {
        id: 85,
        name: 'Yellow Bittern',
        scientificName: 'Ixobrychus sinensis',
        image: YellowBittern,
        description: 'The Yellow Bittern is a small, slender wading bird found in wetlands and marshes across Asia. It has distinctive yellow-brown plumage with darker streaks on its back. Yellow Bitterns are often seen foraging in shallow water, where they hunt for small fish, amphibians, and invertebrates. They are known for their stealthy hunting technique, often remaining motionless for long periods before striking at prey. They are generally solitary birds and nest in dense vegetation near water.',
        habitat: 'Wetlands, marshes, ponds',
        diet: 'Small fish, amphibians, invertebrates',
        lifespan: '5-10 years',
        size: 'Height 35-40 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Yellow Bitterns are solitary and secretive birds, often seen moving stealthily through dense vegetation.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 86,
        name: 'Cinnamon Bittern',
        scientificName: 'Ixobrychus cinnamomeus',
        image: CinnamonBittern,
        description: 'The Cinnamon Bittern is a small, elusive wading bird found in wetlands and marshes in Asia. It has rich cinnamon-brown plumage and is known for its ability to remain hidden in dense vegetation. These birds feed on small fish, insects, and invertebrates, using their long bill to catch prey in shallow water. Cinnamon Bitterns are often difficult to spot due to their camouflage, but their distinct calls can be heard during the breeding season.',
        habitat: 'Wetlands, marshes, swamps',
        diet: 'Small fish, insects, invertebrates',
        lifespan: '5-10 years',
        size: 'Height 35-40 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Cinnamon Bitterns are solitary and cryptic birds, using their camouflage to remain hidden from predators.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 87,
        name: 'Black Bittern',
        scientificName: 'Ixobrychus flavicollis',
        image: BlackBittern,
        description: 'The Black Bittern is a medium-sized wading bird found in wetlands and swamps across Asia. It has dark plumage with a distinctive yellow neck and is known for its stealthy hunting behavior. These birds primarily feed on small fish, amphibians, and insects, using their sharp bill to catch prey in shallow water. Black Bitterns are solitary birds and are often found hiding in dense vegetation, making them difficult to spot.',
        habitat: 'Wetlands, swamps, rivers',
        diet: 'Small fish, amphibians, insects',
        lifespan: '10-15 years',
        size: 'Height 45-50 cm, Wingspan 60-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black Bitterns are solitary and elusive, often staying hidden in dense vegetation near water.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 88,
        name: 'Malay Night-heron',
        scientificName: 'Gorsachius melanolophus',
        image: MalayNightheron,
        description: 'The Malay Night-heron is a large, nocturnal heron found in forests and wetlands in Southeast Asia. These birds are known for their dark plumage and large, rounded heads. Malay Night-herons are primarily insectivores, feeding on insects, small vertebrates, and invertebrates found in the water. They are often seen hunting at night and are known for their stealthy, silent approach to capturing prey. These herons are generally solitary and prefer dense forested areas near water.',
        habitat: 'Forests, wetlands, rivers',
        diet: 'Insects, small vertebrates, invertebrates',
        lifespan: '10-15 years',
        size: 'Height 50-60 cm, Wingspan 80-90 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Malay Night-herons are nocturnal and solitary, often hunting at night and staying hidden during the day.',
        breedingSeason: 'May to September'
    },
    {
        id: 89,
        name: 'Black-crowned Night-heron',
        scientificName: 'Nycticorax nycticorax',
        image: BlackCrownedNightheron,
        description: 'The Black-crowned Night-heron is a medium-sized heron known for its black crown and white body. These birds are commonly found in wetlands, lakes, and rivers worldwide. Black-crowned Night-herons are nocturnal hunters, foraging for small fish, amphibians, and insects during the night. They are known for their stealthy hunting behavior and can often be seen standing motionless in the water before striking at prey.',
        habitat: 'Wetlands, lakes, rivers',
        diet: 'Small fish, amphibians, insects',
        lifespan: '10-15 years',
        size: 'Height 55-65 cm, Wingspan 90-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-crowned Night-herons are solitary hunters and are most active during the night.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 90,
        name: 'Green-backed Heron',
        scientificName: 'Butorides striata',
        image: GreenBackedHeron,
        description: 'The Green-backed Heron is a small wading bird that is widely distributed across Asia and Africa. These herons are known for their distinctive greenish back and are often found in wetlands, marshes, and near water bodies. They are skilled hunters, using their long bills to catch small fish, crustaceans, and insects. Green-backed Herons are often seen standing motionless in the water, waiting for their prey to approach.',
        habitat: 'Wetlands, marshes, ponds',
        diet: 'Small fish, crustaceans, insects',
        lifespan: '5-10 years',
        size: 'Height 30-35 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Green-backed Herons are solitary hunters, typically foraging alone during the day.',
        breedingSeason: 'May to August'
    },
    
    {
        id: 91,
        name: 'Indian Pond-heron',
        scientificName: 'Ardeola grayii',
        image: IndianPondheron,
        description: 'The Indian Pond-heron is a small heron native to the Indian subcontinent. It has distinctive brown and white plumage and is commonly found near shallow water bodies such as ponds, marshes, and rivers. Pond-herons are often seen standing motionless in the water, waiting to catch small fish, insects, and amphibians. They are known for their distinctive hunched posture and can be quite elusive in their natural habitat.',
        habitat: 'Ponds, marshes, rivers',
        diet: 'Small fish, insects, amphibians',
        lifespan: '5-10 years',
        size: 'Height 40-50 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Pond-herons are solitary foragers, often hunting alone during the day.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 92,
        name: 'Cattle Egret',
        scientificName: 'Bubulcus ibis',
        image: CattleEgret,
        description: 'The Cattle Egret is a small white heron commonly found in grasslands and agricultural areas. It is often seen in the company of grazing livestock, where it feeds on insects disturbed by the movement of animals. Cattle Egrets are known for their characteristic white plumage and yellowish-orange coloration during the breeding season. These birds are highly adaptable and can be found in a wide range of habitats, including wetlands, farmland, and grasslands.',
        habitat: 'Grasslands, farmland, wetlands',
        diet: 'Insects, small invertebrates',
        lifespan: '5-10 years',
        size: 'Height 45-50 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Cattle Egrets often forage in groups, following livestock and other animals to catch insects.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 93,
        name: 'Grey Heron',
        scientificName: 'Ardea cinerea',
        image: GreyHeron,
        description: 'The Grey Heron is a large, long-legged wader that is found in wetlands and along waterways across Europe, Asia, and parts of Africa. It is easily recognizable by its grey and white plumage, long neck, and sharp bill. Grey Herons are skilled hunters, primarily feeding on fish, amphibians, and small mammals. They can often be seen standing motionless in the water, waiting to catch prey with their long bills.',
        habitat: 'Wetlands, lakes, rivers',
        diet: 'Fish, amphibians, small mammals',
        lifespan: '15-20 years',
        size: 'Height 90-100 cm, Wingspan 175-195 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Grey Herons are solitary and can be seen hunting alone in their preferred habitat.',
        breedingSeason: 'February to April'
    },
    
    {
        id: 94,
        name: 'Goliath Heron',
        scientificName: 'Ardea goliath',
        image: GoliathHeron,
        description: 'The Goliath Heron is the largest heron in the world, found in wetlands and rivers in sub-Saharan Africa and parts of Asia. Known for its immense size and powerful hunting ability, the Goliath Heron primarily feeds on large fish, including catfish and tilapia. These birds are often seen standing still in shallow water, waiting to strike at prey with their strong, sharp bills.',
        habitat: 'Wetlands, rivers, lakes',
        diet: 'Large fish, amphibians',
        lifespan: '15-20 years',
        size: 'Height 120-150 cm, Wingspan 200-220 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Goliath Herons are solitary hunters, known for their impressive size and powerful strikes.',
        breedingSeason: 'August to November'
    },
    
    {
        id: 95,
        name: 'Purple Heron',
        scientificName: 'Ardea purpurea',
        image: PurpleHeron,
        description: 'The Purple Heron is a medium-sized wading bird with distinctive purple plumage on its neck and chest. These birds are typically found in wetlands and marshes across Europe, Africa, and Asia. Purple Herons are skilled hunters, primarily feeding on fish, amphibians, and small invertebrates. They often stand motionless in shallow water, waiting for prey to approach within striking distance.',
        habitat: 'Wetlands, marshes, rivers',
        diet: 'Fish, amphibians, small invertebrates',
        lifespan: '10-15 years',
        size: 'Height 85-95 cm, Wingspan 150-170 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Purple Herons are solitary birds that forage alone in shallow water.',
        breedingSeason: 'April to July'
    },
    
    {
        id: 96,
        name: 'Great White Egret',
        scientificName: 'Ardea alba',
        image: GreatWhiteEgret,
        description: 'The Great White Egret is a large wading bird known for its elegant white plumage and long, slender neck. These birds are commonly found in wetlands, ponds, and marshes, where they feed on fish, amphibians, and small invertebrates. Great White Egrets are known for their graceful foraging behavior, standing still in the water and slowly extending their necks to catch prey.',
        habitat: 'Wetlands, marshes, ponds',
        diet: 'Fish, amphibians, small invertebrates',
        lifespan: '15-20 years',
        size: 'Height 90-100 cm, Wingspan 150-170 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Great White Egrets are solitary foragers, often hunting alone in wetlands.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 97,
        name: 'Intermediate Egret',
        scientificName: 'Ardea intermedia',
        image: IntermediateEgret,
        description: 'The Intermediate Egret is a medium-sized heron found in wetlands and shallow waters across Asia and Africa. It has striking white plumage and a long, slender neck. These birds feed primarily on small fish, amphibians, and insects, using their sharp bill to catch prey in the water. Intermediate Egrets are often seen standing motionless in the water, waiting for their prey to come close.',
        habitat: 'Wetlands, marshes, ponds',
        diet: 'Small fish, amphibians, insects',
        lifespan: '10-15 years',
        size: 'Height 65-75 cm, Wingspan 100-110 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Intermediate Egrets are solitary hunters, often seen waiting quietly in shallow water.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 98,
        name: 'Little Egret',
        scientificName: 'Egretta garzetta',
        image: LittleEgret,
        description: 'The Little Egret is a small wading bird that is commonly found in wetlands, lakes, and coastal habitats around the world. It is known for its all-white plumage and slender body. Little Egrets feed on small fish, amphibians, and invertebrates, often foraging in shallow water where they use their sharp bills to catch prey. They are also known for their elegant flight, which is marked by slow, graceful wingbeats.',
        habitat: 'Wetlands, lakes, coastal habitats',
        diet: 'Small fish, amphibians, invertebrates',
        lifespan: '5-10 years',
        size: 'Height 50-60 cm, Wingspan 90-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Egrets are solitary birds, typically found foraging alone in shallow water.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 99,
        name: 'Western Reef-egret',
        scientificName: 'Egretta gularis',
        image: WesternReefEgret,
        description: 'The Western Reef-egret is a large wading bird found in coastal regions and tidal wetlands. It is easily identified by its dark plumage and is often seen in rocky coastal areas hunting for small fish and crustaceans. Western Reef-egrets are known for their powerful beaks, which they use to catch prey in the water.',
        habitat: 'Coastal regions, tidal wetlands',
        diet: 'Small fish, crustaceans',
        lifespan: '10-15 years',
        size: 'Height 60-70 cm, Wingspan 100-120 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Western Reef-egrets are skilled hunters, using their sharp bills to catch fish and other small prey in coastal areas.',
        breedingSeason: 'May to August'
    },
    
    {
        id: 100,
        name: 'Spot-billed Pelican',
        scientificName: 'Pelecanus philippensis',
        image: SpotBilledPelican,
        description: 'The Spot-billed Pelican is a large waterbird found in freshwater and coastal regions across South Asia. It is known for its distinctive bill, which has dark spots near the tip. These pelicans are social birds and are often found in large colonies near lakes, rivers, and wetlands. They feed primarily on fish, which they catch by scooping water with their large bills.',
        habitat: 'Lakes, rivers, wetlands',
        diet: 'Fish',
        lifespan: '15-20 years',
        size: 'Height 100-110 cm, Wingspan 200-230 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'Spot-billed Pelicans are highly social birds and often forage in groups.',
        breedingSeason: 'November to February'
    },
    {
        id: 101,
        name: 'Lesser Frigatebird',
        scientificName: 'Fregata ariel',
        image: LesserFrigatebird,
        description: 'The Lesser Frigatebird is a large seabird found in tropical oceans worldwide. These birds are known for their impressive aerial abilities, soaring and gliding for long distances without needing to flap their wings frequently. They feed primarily on fish, snatching prey from the surface of the water using their sharp beaks. Lesser Frigatebirds are often seen in colonies on islands, nesting in trees and bushes, and are characterized by their distinctive long, pointed wings and forked tails.',
        habitat: 'Tropical oceans, islands',
        diet: 'Fish, squid, and other small marine animals',
        lifespan: '20-30 years',
        size: 'Length 50-60 cm, Wingspan 130-150 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Lesser Frigatebirds are known for their aerial prowess and are highly social birds, often found in large colonies during breeding season.',
        breedingSeason: 'May to October'
    },
    {
        id: 102,
        name: 'Great Frigatebird',
        scientificName: 'Fregata minor',
        image: GreatFrigatebird,
        description: 'The Great Frigatebird is a large seabird that is primarily found in tropical and subtropical oceans. These birds are known for their massive wingspan and excellent flying skills, spending much of their life in flight. They feed by stealing fish from other birds or snatching prey from the water. The Great Frigatebird is easily recognized by its large size, long wings, and forked tail, as well as its striking red throat pouch, which males inflate during the breeding season to attract females.',
        habitat: 'Tropical oceans, coastal islands',
        diet: 'Fish, squid, and other small marine animals',
        lifespan: '20-25 years',
        size: 'Length 70-90 cm, Wingspan 200-230 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Great Frigatebird is an aggressive predator and a highly skilled flyer, often seen gliding over oceans and stealing food from other birds.',
        breedingSeason: 'March to September'
    },
    {
        id: 103,
        name: 'Christmas Island Frigatebird',
        scientificName: 'Fregata andrewsi',
        image: ChristmasIslandFrigatebird,
        description: 'The Christmas Island Frigatebird is a critically endangered seabird found on Christmas Island in the Indian Ocean. It has a relatively small population and is threatened by habitat loss and predation from invasive species. These birds are known for their impressive flying abilities, often soaring for hours without touching the ground. The Christmas Island Frigatebird feeds primarily on fish and squid, which it catches in mid-air by snatching them from the water.',
        habitat: 'Christmas Island, tropical oceans',
        diet: 'Fish, squid',
        lifespan: '20-30 years',
        size: 'Length 70-80 cm, Wingspan 160-180 cm',
        conservationStatus: 'Critically Endangered',
        behavior: 'This species is solitary during non-breeding months, but forms large colonies during the breeding season, where they are vulnerable to predators.',
        breedingSeason: 'November to March'
    },
    {
        id: 104,
        name: 'Red-footed Booby',
        scientificName: 'Sula sula',
        image: RedFootedBooby,
        description: 'The Red-footed Booby is a medium-sized seabird commonly found in tropical oceans around the world. It is easily identified by its red feet and long wingspan. These birds are strong fliers and are excellent at diving into the water to catch fish. They have a variety of plumage colors, including white, brown, and black, depending on their age and location. Red-footed Boobies nest on cliffs and trees, where they often lay their eggs in colonies.',
        habitat: 'Tropical oceans, islands',
        diet: 'Fish, squid, and other small marine creatures',
        lifespan: '10-20 years',
        size: 'Length 65-70 cm, Wingspan 110-120 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Red-footed Boobies are social birds that often form large nesting colonies and are known for their diving and fishing skills.',
        breedingSeason: 'March to September'
    },
    {
        id: 105,
        name: 'Brown Booby',
        scientificName: 'Sula leucogaster',
        image: BrownBooby,
        description: 'The Brown Booby is a large seabird found in tropical and subtropical oceans worldwide. It is recognized by its brownish plumage, which helps it blend into the coastal rock formations where it nests. These birds are exceptional divers, plunging into the water to catch fish and squid. Brown Boobies are typically solitary during non-breeding seasons but come together in large groups during the breeding period, where they build nests on cliffs or trees.',
        habitat: 'Tropical oceans, islands, coastal cliffs',
        diet: 'Fish, squid, and other small marine animals',
        lifespan: '15-25 years',
        size: 'Length 70-80 cm, Wingspan 140-150 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown Boobies are strong divers and often hunt alone or in small groups, using their keen eyesight to locate fish beneath the surface.',
        breedingSeason: 'April to August'
    },
    {
        id: 106,
        name: 'Masked Booby',
        scientificName: 'Sula dactylatra',
        image: MaskedBooby,
        description: 'The Masked Booby is a large seabird that can be found in tropical oceans, known for its white plumage and striking black mask around its eyes. These birds are skilled hunters, diving from great heights to capture fish and squid in their strong beaks. The Masked Booby is often seen in large colonies on remote islands, where they nest and raise their young. These birds are also excellent fliers, spending much of their time soaring over the ocean.',
        habitat: 'Tropical oceans, remote islands',
        diet: 'Fish, squid, and other small marine creatures',
        lifespan: '10-20 years',
        size: 'Length 70-90 cm, Wingspan 150-160 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Masked Booby is a solitary hunter, often seen diving into the ocean to catch its prey. They nest in large colonies on isolated islands.',
        breedingSeason: 'May to September'
    },
    {
        id: 107,
        name: 'Little Cormorant',
        scientificName: 'Microcarbo niger',
        image: LittleCormorant,
        description: 'The Little Cormorant is a small-sized waterbird found across Asia, particularly in wetlands and coastal areas. These birds are known for their diving skills, which they use to hunt for fish and other aquatic prey. They have dark plumage and are often seen perched on rocks or drying their wings after diving. Little Cormorants are often seen in flocks, feeding and nesting together in colonies near freshwater lakes and rivers.',
        habitat: 'Freshwater lakes, rivers, coastal wetlands',
        diet: 'Fish, aquatic insects, and small invertebrates',
        lifespan: '10-15 years',
        size: 'Length 50-60 cm, Wingspan 100-110 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Cormorants are excellent divers and are often seen hunting in groups. They are also known for drying their wings after diving.',
        breedingSeason: 'January to April'
    },
    {
        id: 108,
        name: 'Great Cormorant',
        scientificName: 'Phalacrocorax carbo',
        image: GreatCormorant,
        description: 'The Great Cormorant is a large waterbird found across Europe, Asia, and North Africa. These birds are strong swimmers and divers, often hunting in groups to catch fish. Great Cormorants have long, dark plumage and are easily recognized by their hooked bills and sharp eyesight. They are commonly found near large bodies of water, where they nest on trees or cliffs, often forming large colonies during the breeding season.',
        habitat: 'Coastal areas, rivers, lakes',
        diet: 'Fish, aquatic invertebrates',
        lifespan: '15-20 years',
        size: 'Length 70-90 cm, Wingspan 120-150 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Great Cormorants are social birds that often hunt in groups and nest in colonies on cliffs or trees. They are strong divers and hunters.',
        breedingSeason: 'March to July'
    },
    {
        id: 109,
        name: 'Indian Cormorant',
        scientificName: 'Phalacrocorax fuscicollis',
        image: IndianCormorant,
        description: 'The Indian Cormorant is a large waterbird native to South Asia, found in a wide variety of aquatic habitats, from rivers and lakes to coastal areas. These birds are skilled divers and hunters, often seen diving for fish and aquatic invertebrates. Indian Cormorants have dark plumage, a hooked bill, and are excellent swimmers, using their webbed feet to navigate through the water with ease.',
        habitat: 'Rivers, lakes, coastal wetlands',
        diet: 'Fish, aquatic invertebrates',
        lifespan: '12-18 years',
        size: 'Length 65-80 cm, Wingspan 120-140 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Cormorants are skilled hunters and divers. They are often seen perched on rocks or trees drying their wings after hunting.',
        breedingSeason: 'November to April'
    },
    {
        id: 110,
        name: 'Oriental Darter',
        scientificName: 'Anhinga melanogaster',
        image: OrientalDarter,
        description: 'The Oriental Darter, also known as the Snakebird, is a large waterbird found in Southeast Asia. These birds are characterized by their long, slender necks and sharp bills. They are often seen swimming and diving underwater to catch fish, where their necks give them the appearance of a snake. Oriental Darters are typically found near lakes, rivers, and wetlands, where they build their nests in trees and shrubs near the water.',
        habitat: 'Lakes, rivers, wetlands',
        diet: 'Fish, aquatic invertebrates',
        lifespan: '15-20 years',
        size: 'Length 80-90 cm, Wingspan 100-120 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Oriental Darters are excellent swimmers and divers, using their long necks to catch fish in the water. They are typically seen alone or in small groups near water.',
        breedingSeason: 'November to March'
    },
    {
        id: 111,
        name: 'Indian Thick-knee',
        scientificName: 'Burhinus indicus',
        image: IndianThickknee,
        description: 'The Indian Thick-knee, also known as the Indian Stone-curlew, is a medium-sized wader found in grasslands and open country across India and parts of Southeast Asia. These birds are known for their distinctive thick legs and large, round eyes, which provide excellent night vision. Indian Thick-knees are typically ground-dwelling birds, often found in pairs or small groups, and they feed on insects, small reptiles, and other invertebrates.',
        habitat: 'Grasslands, open country',
        diet: 'Insects, small reptiles, invertebrates',
        lifespan: '10-15 years',
        size: 'Length 40-50 cm, Wingspan 90-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Thick-knees are nocturnal feeders, often hunting at night using their excellent vision. They are known for their distinctive calls, which can be heard during their breeding season.',
        breedingSeason: 'June to August'
    },
    {
        id: 112,
        name: 'Great Thick-knee',
        scientificName: 'Esacus recurvirostris',
        image: GreatThickknee,
        description: 'The Great Thick-knee is a large wader species found in parts of South Asia and Southeast Asia. It is easily recognized by its thick, yellow legs and large eyes, which help it hunt at night. These birds are typically found in open, arid environments, where they feed on a variety of invertebrates, small fish, and amphibians. Great Thick-knees are ground nesters, often laying their eggs in shallow depressions in the sand or dirt.',
        habitat: 'Arid and semi-arid regions',
        diet: 'Invertebrates, small fish, amphibians',
        lifespan: '15-20 years',
        size: 'Length 50-60 cm, Wingspan 100-110 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Great Thick-knees are nocturnal feeders, using their keen eyesight to locate prey at night. They are often seen alone or in pairs during the breeding season.',
        breedingSeason: 'March to July'
    },
    {
        id: 113,
        name: 'Eurasian Oystercatcher',
        scientificName: 'Haematopus ostralegus',
        image: EurasianOystercatcher,
        description: 'The Eurasian Oystercatcher is a large wader bird found along coastal regions of Europe and Asia. They are known for their striking black and white plumage, bright orange beaks, and strong legs. These birds are typically found on rocky shorelines, mudflats, and sandy beaches, where they forage for shellfish, crustaceans, and small fish by probing the sand with their beaks.',
        habitat: 'Coastal regions, mudflats, sandy beaches',
        diet: 'Shellfish, crustaceans, small fish',
        lifespan: '15-25 years',
        size: 'Length 40-50 cm, Wingspan 80-90 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Oystercatchers are strong foragers and are often seen probing the sand or mud for prey. They are known for their loud calls, which can be heard during their breeding season.',
        breedingSeason: 'April to June'
    },
    {
        id: 114,
        name: 'Pied Avocet',
        scientificName: 'Recurvirostra avosetta',
        image: PiedAvocet,
        description: 'The Pied Avocet is a striking wader bird with black and white plumage and long, slender legs. Found in wetlands, mudflats, and coastal lagoons, the Pied Avocet is known for its distinctive upward-curved bill, which it uses to sweep through the water in search of small invertebrates. These birds are often seen in large flocks during migration, and they are easily recognized by their elegant appearance and distinctive feeding behavior.',
        habitat: 'Wetlands, mudflats, coastal lagoons',
        diet: 'Small invertebrates, crustaceans, insects',
        lifespan: '10-20 years',
        size: 'Length 40-45 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pied Avocets are social birds, often feeding in large groups during migration. They are known for their unique feeding behavior, where they sweep their bills through the water.',
        breedingSeason: 'April to July'
    },
    {
        id: 115,
        name: 'Black-winged Stilt',
        scientificName: 'Himantopus himantopus',
        image: BlackWingedStilt,
        description: 'The Black-winged Stilt is a medium-sized wader bird with long, slender legs and a long, straight bill. Found in wetlands, estuaries, and coastal areas, these birds are known for their elegant appearance and distinctive black wings. Black-winged Stilts feed on small invertebrates, aquatic insects, and crustaceans, and they are often seen walking through shallow waters while probing the mud for food.',
        habitat: 'Wetlands, estuaries, coastal areas',
        diet: 'Small invertebrates, aquatic insects, crustaceans',
        lifespan: '10-15 years',
        size: 'Length 35-40 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-winged Stilts are often seen walking through shallow waters, probing the mud for prey. They are known for their elegant and graceful movements.',
        breedingSeason: 'May to August'
    },
    {
        id: 116,
        name: 'Grey Plover',
        scientificName: 'Pluvialis squatarola',
        image: GreyPlover,
        description: 'The Grey Plover is a medium-sized wader bird found along coastal regions of Europe, Asia, and North America. These birds are easily recognized by their grey plumage during the winter months and their black-and-white appearance during the breeding season. Grey Plovers feed on a variety of invertebrates, small fish, and crustaceans, and they are often seen in mudflats, sandy beaches, and rocky shorelines.',
        habitat: 'Coastal regions, mudflats, sandy beaches',
        diet: 'Invertebrates, small fish, crustaceans',
        lifespan: '10-15 years',
        size: 'Length 30-35 cm, Wingspan 60-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Grey Plovers are typically seen foraging alone or in small groups, using their sharp beaks to probe the sand for food.',
        breedingSeason: 'May to July'
    },
    {
        id: 117,
        name: 'Pacific Golden Plover',
        scientificName: 'Pluvialis fulva',
        image: PacificGoldenPlover,
        description: 'The Pacific Golden Plover is a migratory wader bird found in coastal regions of the Pacific Ocean, from Alaska to New Zealand. These birds are known for their striking golden-brown plumage during the breeding season and their pale, speckled appearance in winter. Pacific Golden Plovers are often seen on mudflats and sandy beaches, where they feed on small invertebrates, insects, and crustaceans.',
        habitat: 'Coastal regions, mudflats, sandy beaches',
        diet: 'Invertebrates, insects, crustaceans',
        lifespan: '15-20 years',
        size: 'Length 25-30 cm, Wingspan 60-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pacific Golden Plovers are migratory birds, often seen in large flocks during migration periods. They are known for their elegant appearance and are excellent foragers.',
        breedingSeason: 'May to August'
    },
    {
        id: 118,
        name: 'Common Ringed Plover',
        scientificName: 'Charadrius hiaticula',
        image: CommonRingedPlover,
        description: 'The Common Ringed Plover is a small wader bird found in coastal regions, rivers, and wetlands across Europe and Asia. These birds are easily recognized by their distinctive black ring around their neck and their compact size. They are often seen running along the shore, probing the sand for small invertebrates, crustaceans, and insects.',
        habitat: 'Coastal regions, rivers, wetlands',
        diet: 'Small invertebrates, crustaceans, insects',
        lifespan: '10-12 years',
        size: 'Length 18-20 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Ringed Plovers are known for their fast, erratic movements as they forage along the shore, using their sharp beaks to catch prey.',
        breedingSeason: 'May to July'
    },
    {
        id: 119,
        name: 'Little Ringed Plover',
        scientificName: 'Charadrius dubius',
        image: LittleRingedPlover,
        description: 'The Little Ringed Plover is a small, migratory wader bird found in wetlands, rivers, and coastal areas. They are characterized by their yellow-ringed eyes and distinctive black ring around their neck. These birds are often seen foraging for small invertebrates and insects along the water\'s edge, where they use their sharp beaks to probe the sand.',
        habitat: 'Wetlands, rivers, coastal areas',
        diet: 'Small invertebrates, insects',
        lifespan: '8-10 years',
        size: 'Length 15-18 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Ringed Plovers are typically solitary birds that forage along the water\'s edge for food. They are also known for their distinctive calls during the breeding season.',
        breedingSeason: 'April to June'
    },
    {
        id: 120,
        name: 'Kentish Plover',
        scientificName: 'Charadrius alexandrinus',
        image: KentishPlover,
        description: "The Kentish Plover is a small wader bird found in coastal regions, salt flats, and estuaries. It has pale sandy-colored plumage and distinctive black markings on its head and neck. These birds feed on small invertebrates, crustaceans, and insects, which they find by probing the sand with their sharp bills. Kentish Plovers are known for their quick movements and sharp calls, often seen alone or in pairs. Their breeding season is from April to July.",
        habitat: 'Coastal regions, salt flats, estuaries',
        diet: 'Small invertebrates, crustaceans, insects',
        lifespan: '8-12 years',
        size: 'Length 15-18 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Kentish Plovers are typically seen alone or in pairs, foraging along the shoreline for small prey. They are known for their quick movements and sharp calls.',
        breedingSeason: 'April to July'
    },
    { 
        id: 121, 
        name: 'Tibetan Sandplover', 
        scientificName: 'Charadrius atrifrons',
        image: TibetanSandplover,
        description: "The Tibetan Sandplover is a small wader bird found in the sandy shores and deserts of Central Asia. It has pale plumage with a distinct dark ring around its neck. These plovers feed on insects, crustaceans, and small invertebrates found in the sand. Tibetan Sandplovers are agile and often seen alone or in pairs while foraging. Their breeding season is from May to August. These birds are known for their swift movements and ability to adapt to harsh environments.",
        habitat: 'Sandy shores, deserts, coastal regions',
        diet: 'Insects, crustaceans, small invertebrates',
        lifespan: '7-10 years',
        size: 'Length 16-18 cm, Wingspan 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Tibetan Sandplovers are often seen alone or in pairs, searching for food along the shoreline and making swift, agile movements.',
        breedingSeason: 'May to August'
    },
    { 
        id: 122, 
        name: 'Greater Sandplover',
        scientificName: 'Charadrius leschenaultii',
        image: GreaterSandplover,
        description: 'The Greater Sandplover is a medium-sized wader found in coastal areas and sandy beaches. This bird has a light brown upper part and a white underside with distinct black markings during the breeding season.',
        habitat: 'Coastal regions, sandy beaches, estuaries',
        diet: 'Insects, crustaceans, small invertebrates',
        lifespan: '6-8 years',
        size: 'Length 20-25 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Greater Sandplover is known for its solitary foraging along the shore, where it uses rapid, precise movements to catch prey.',
        breedingSeason: 'April to August'
    },
    { 
        id: 123, 
        name: 'Caspian Plover', 
        scientificName: ' Charadrius asiaticus',
        image: CaspianPlover,
        description: "The Greater Sandplover is a medium-sized wader found in coastal areas and sandy beaches. This bird has light brown upper parts and a white underside, with black markings during the breeding season. The Greater Sandplover feeds on insects, crustaceans, and small invertebrates. It is often seen foraging alone, using rapid movements to catch prey. These plovers prefer solitary behavior but are highly active during the breeding season, which spans from April to August in coastal areas.",
        habitat: 'Sandy deserts, coastal areas, dry regions',
        diet: 'Insects, small invertebrates',
        lifespan: '7-9 years',
        size: 'Length 18-20 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Caspian Plovers are usually solitary birds, foraging along dry, sandy areas and using quick movements to catch small prey.',
        breedingSeason: 'May to July'
    },
    { 
        id: 124, 
        name: 'Yellow-wattled Lapwing', 
        scientificName: 'Vanellus malabaricus ',
        image: YellowWattledLapwing,
        description:"The Caspian Plover is a medium-sized wader bird known for its distinctive black and white coloration and pale sandy plumage. Found in the Caspian region and other sandy areas in Central Asia, these plovers thrive in dry, sandy environments. They feed on insects and small invertebrates, using quick movements to catch prey. Caspian Plovers are typically solitary and known for their efficient foraging habits. Their breeding season lasts from May to July, and they are widely regarded as resilient birds.",
        habitat: 'Grasslands, plains, semi-arid regions',
        diet: 'Insects, small invertebrates, seeds',
        lifespan: '5-7 years',
        size: 'Length 35-40 cm, Wingspan 60-65 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Yellow-wattled Lapwings are typically seen in pairs or small groups, known for their loud calls and protective behavior around their nests.',
        breedingSeason: 'February to May'
    },
    { 
        id: 125, 
        name: 'Red-wattled Lapwing',
        scientificName: 'Vanellus indicus ',
        image: RedWattledLapwing,
        description: "The Yellow-wattled Lapwing is a large wader bird known for the striking yellow wattles on its face. These birds are found in open grasslands, plains, and semi-arid regions across India and parts of Southeast Asia. They primarily feed on insects, small invertebrates, and seeds. Yellow-wattled Lapwings are often seen in pairs or small groups and are known for their loud calls and protective behavior around their nests. Their breeding season spans from February to May.",
        habitat: 'Open fields, grasslands, wetlands',
        diet: 'Insects, small invertebrates, seeds',
        lifespan: '6-9 years',
        size: 'Length 35-40 cm, Wingspan 60-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Red-wattled Lapwings are often seen in pairs or small groups, known for their loud, alarm calls and aggressive defense of their territory.',
        breedingSeason: 'March to July'
    },
    { 
        id: 126, 
        name: 'Sociable Lapwing', 
        scientificName: ' Vanellus gregarius',
        image: SociableLapwing,
        description: 'The Sociable Lapwing is a medium-sized wader bird that thrives in open grasslands and semi-arid regions. Known for its highly sociable nature, it often forms large flocks that forage together for insects and small invertebrates. Its distinctive brown upper parts and white underparts, along with a striking black-and-white face pattern, make it easily identifiable. This bird migrates in large groups, relying on its social bonds to navigate long journeys, a key characteristic of the species.',
        habitat: 'Grasslands, plains, semi-arid regions',
        diet: 'Insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 30-35 cm, Wingspan 55-60 cm',
        conservationStatus: 'Endangered',
        behavior: 'Sociable Lapwings are often seen in flocks, foraging together for food. They are known for their social behavior, especially during migration.',
        breedingSeason: 'April to August'
    },
    { 
        id: 127, 
        name: 'Greater Painted-snipe', 
        scientificName: ' Rostratula benghalensis',
        image: GreaterPaintedSnipe,
        description: 'The Greater Painted-snipe is a striking wader bird recognized for its vibrant iridescent feathers, which display a dazzling array of colors. It typically inhabits wetland areas, such as marshes and ponds, where it is often elusive and difficult to spot. This bird is known for its solitary behavior and tendency to hide among tall vegetation to avoid detection. The Greater Painted-snipe primarily feeds on small invertebrates, insects, and seeds, making it an interesting species to observe in the wild.',
        habitat: 'Wetlands, marshes, ponds',
        diet: 'Small invertebrates, insects, seeds',
        lifespan: '4-6 years',
        size: 'Length 25-30 cm, Wingspan 45-50 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Greater Painted-snipes are solitary birds, often hiding among reeds and vegetation. They are known for their shy and secretive behavior.',
        breedingSeason: 'April to September'
    },
    { 
        id: 128, 
        name: 'Pheasant-tailed Jacana', 
        scientificName: 'Hydrophasianus chirurgus ',
        image: PheasantTailedJacana,
        description: 'The Pheasant-tailed Jacana is a beautiful wader bird known for its long, elegant pheasant-like tail feathers. This bird is found in wetland areas, particularly in South Asia, where it gracefully walks on floating vegetation. Its large feet help it balance on water lilies and other floating plants, making it one of the most unique species in its habitat. The Pheasant-tailed Jacana feeds on insects, small invertebrates, and seeds, using its agility to navigate through its aquatic environment.',
        habitat: 'Wetlands, marshes, ponds',
        diet: 'Insects, small invertebrates, seeds',
        lifespan: '5-7 years',
        size: 'Length 30-35 cm, Wingspan 60-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pheasant-tailed Jacanas are known for their unique ability to walk on floating vegetation in wetlands, using their large feet to balance.',
        breedingSeason: 'May to August'
    },
    { 
        id: 129, 
        name: 'Whimbrel', 
        scientificName: 'Numenius phaeopus ',
        image: Whimbrel,
        description: 'The Whimbrel is a large wader bird, easily recognized by its long, down-curved bill. Known for its distinctive, melodic calls, this bird is often found in coastal regions and mudflats, where it forages for crustaceans, mollusks, and small invertebrates. The Whimbrel is a migratory species, traveling long distances between breeding and wintering grounds. It often forms small flocks along coastlines during migration. Despite its large size, it blends well into its habitat, using its bill to probe for food.',
        habitat: 'Coastal regions, mudflats, estuaries',
        diet: 'Crustaceans, mollusks, small invertebrates',
        lifespan: '10-12 years',
        size: 'Length 40-45 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Whimbrels are known for their migratory habits and are often seen in small flocks along the coastline.',
        breedingSeason: 'May to July'
    },
    { 
        id: 130, 
        name: 'Eurasian Curlew', 
        scientificName: 'Numenius arquata ',
        image: EurasianCurlew,
        description: 'The Eurasian Curlew is a large wader with a long, distinctive, curved bill that it uses to forage for small invertebrates, worms, and crustaceans in coastal wetlands. Found across Europe and Asia, the Eurasian Curlew is known for its distinctive loud calls that can be heard during both the breeding and migratory seasons. It forms flocks during migration and is often seen feeding along mudflats and estuaries. Its size and unique bill shape make it easily recognizable.',
        habitat: 'Coastal regions, wetlands, estuaries',
        diet: 'Small invertebrates, worms, crustaceans',
        lifespan: '10-15 years',
        size: 'Length 50-55 cm, Wingspan 90-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Curlews are often seen in flocks during migration and are known for their loud, distinctive calls.',
        breedingSeason: 'May to August'
    },
    { 
        id: 131, 
        name: 'Bar-tailed Godwit', 
        scientificName: ' Limosa lapponica',
        image: BarTailedGodwit,
        description: 'The Bar-tailed Godwit is a large wader with long legs and a slightly upturned bill. This bird is recognized for its remarkable long-distance migrations, which often span thousands of kilometers. Found in coastal regions, mudflats, and estuaries, it feeds primarily on mollusks, crustaceans, and small invertebrates. The Bar-tailed Godwit uses its long legs to probe the mudflats for food. During migration, it is often seen in large flocks, creating a striking spectacle along coastal regions.',
        habitat: 'Coastal regions, mudflats, estuaries',
        diet: 'Mollusks, crustaceans, small invertebrates',
        lifespan: '10-15 years',
        size: 'Length 35-40 cm, Wingspan 65-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Bar-tailed Godwits are known for their long migrations and are often seen in large flocks along coastal mudflats.',
        breedingSeason: 'June to August'
    },
    { 
        id: 132, 
        name: 'Black-tailed Godwit', 
        scientificName: 'Limosa limosa ',
        image: BlackTailedGodwit,
        description: 'The Black-tailed Godwit is a wader bird with long legs and a slightly upturned bill. It is commonly found in wetlands, estuaries, and coastal areas across Europe and Asia. The Black-tailed Godwit feeds primarily on invertebrates, small fish, and worms, probing the mud and shallow waters for its food. This species is often seen in flocks, especially during migration. Its distinct long legs and bill help it to forage efficiently in muddy and shallow waters.',
        habitat: 'Wetlands, estuaries, coastal areas',
        diet: 'Invertebrates, small fish, worms',
        lifespan: '7-10 years',
        size: 'Length 35-40 cm, Wingspan 65-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-tailed Godwits are often seen in flocks foraging along wetland shores and mudflats.',
        breedingSeason: 'May to July'
    },
    { 
        id: 133, 
        name: 'Ruddy Turnstone', 
        scientificName: 'Arenaria interpres',
        image: RuddyTurnstone,
        description: 'The Ruddy Turnstone is a small wader bird with a distinctive pattern of reddish-brown, black, and white plumage. It is best known for its behavior of turning over stones and shells along rocky shores, in search of prey. Found in coastal regions, rocky shores, and mudflats, the Ruddy Turnstone feeds on a diet of invertebrates, crustaceans, and small mollusks. This bird is an active forager, using its strong bill to overturn debris while scouring for food along shorelines.',
        habitat: 'Coastal regions, rocky shores, mudflats',
        diet: 'Invertebrates, crustaceans, small mollusks',
        lifespan: '6-8 years',
        size: 'Length 20-22 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Ruddy Turnstones are active foragers, using their strong bills to turn over stones and other debris along the shore.',
        breedingSeason: 'May to August'
    },
    { 
        id: 134, 
        name: 'Great Knot', 
        scientificName: ' Calidris tenuirostris',
        image: GreatKnot,
        description: 'The Great Knot is a medium-sized wader with long legs and a slightly upturned bill. This species is typically found in mudflats and coastal regions during migration, where it forages for small invertebrates, crustaceans, and mollusks. The Great Knot is known for its remarkable long-distance migration and is often observed in large flocks. These birds often feed along the shoreline, searching for food in the mud and shallow waters. Its large wingspan helps it during its extensive migratory journeys.',
        habitat: 'Mudflats, coastal regions, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '10-15 years',
        size: 'Length 30-35 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Great Knots are often seen in large flocks, foraging for invertebrates along the shoreline.',
        breedingSeason: 'June to August'
    },
    { 
        id: 135, 
        name: 'Red Knot', 
        scientificName: 'Calidris canutus ',
        image: RedKnot,
        description: 'The Red Knot is a medium-sized wader with reddish-brown plumage in breeding season.',
        habitat: 'Coastal regions, mudflats, estuaries',
        diet: 'Mollusks, small invertebrates, crustaceans',
        lifespan: '7-10 years',
        size: 'Length 24-27 cm, Wingspan 50-55 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Red Knots are migratory birds, known for their long-distance travel.',
        breedingSeason: 'May to August'
    },
    { 
        id: 136, 
        name: 'Ruff', 
        scientificName: ' Calidris pugnax',
        image: Ruff,
        description: 'The Ruff is known for its feathered collar and is found in wetlands and grassy plains.',
        habitat: 'Wetlands, mudflats, grassy plains',
        diet: 'Insects, small invertebrates, seeds',
        lifespan: '5-7 years',
        size: 'Length 30-35 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Ruffs often form large flocks and males display elaborate courtship behaviors.',
        breedingSeason: 'May to July'
    },
    { 
        id: 137, 
        name: 'Broad-billed Sandpiper',
        scientificName: ' Calidris falcinellus',
        image: BroadBilledSandpiper,
        description: 'A small wader with a broad bill, found in coastal mudflats and sandy beaches.',
        habitat: 'Mudflats, coastal regions, sandy beaches',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Broad-billed Sandpipers are solitary and forage alone along the shore.',
        breedingSeason: 'May to July'
    },
    { 
        id: 138, 
        name: 'Curlew Sandpiper', 
        scientificName: 'Calidris ferruginea ',
        image: CurlewSandpiper,
        description: 'A small wader with long legs and down-curved bill, found along coastal regions.',
        habitat: 'Coastal regions, mudflats, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 20-22 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Curlew Sandpipers are often seen in flocks foraging along shorelines.',
        breedingSeason: 'June to August'
    },
    { 
        id: 139, 
        name: "Temminck's Stint", 
        scientificName: 'Calidris temminckii ',
        image: TemmincksStint,
        description: "Temminck's Stint is a small wader known for its active foraging habits along muddy shores.",
        habitat: 'Wetlands, mudflats, estuaries',
        diet: 'Insects, small invertebrates',
        lifespan: '3-5 years',
        size: 'Length 12-14 cm, Wingspan 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: "Temminck's Stints are often seen in small flocks, foraging along shorelines.",
        breedingSeason: 'June to August'
    },
    { 
        id: 140, 
        name: 'Long-toed Stint', 
        scientificName: 'Calidris subminuta ',
        image: LongToedStint,
        description: 'The Long-toed Stint is a small wader with long toes, found in wetlands and mudflats.',
        habitat: 'Wetlands, mudflats, estuaries',
        diet: 'Small invertebrates, insects, crustaceans',
        lifespan: '4-6 years',
        size: 'Length 13-15 cm, Wingspan 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Long-toed Stints are known for their foraging behavior, probing the mud for prey.',
        breedingSeason: 'May to July'
    },
    { 
        id: 141, 
        name: 'Spoon-billed Sandpiper', 
        scientificName: 'Calidris pygmaea ',
        image: SpoonBilledSandpiper,
        description: 'The Spoon-billed Sandpiper is a critically endangered small wader with a spoon-shaped bill.',
        habitat: 'Mudflats, coastal regions, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '4-6 years',
        size: 'Length 15-17 cm, Wingspan 25-30 cm',
        conservationStatus: 'Critically Endangered',
        behavior: 'Spoon-billed Sandpipers are often seen alone, foraging for food along mudflats.',
        breedingSeason: 'April to July'
    },
    { 
        id: 142, 
        name: 'Red-necked Stint', 
        scientificName: ' Calidris ruficollis',
        image: RedNeckedStint,
        description: 'The Red-necked Stint is a small wader bird that displays reddish-brown plumage during the breeding season. Found in coastal regions and wetlands, it is known for its agility and long-distance migration. This bird primarily feeds on small invertebrates, crustaceans, and mollusks, probing mudflats and sandy shores for food. Red-necked Stints often travel in small groups and are highly active during foraging. They are well adapted to life in wetland habitats and are commonly seen along the shorelines during the breeding season.',
        habitat: 'Coastal regions, mudflats, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '4-6 years',
        size: 'Length 11-13 cm, Wingspan 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Red-necked Stints are often seen foraging in small groups along coastal shorelines.',
        breedingSeason: 'June to August'
    },
    { 
        id: 143, 
        name: 'Sanderling', 
        scientificName: ' Calidris alba',
        image: Sanderling,
        description: 'The Sanderling is a small wader bird that is known for its active behavior, constantly running along beaches in search of food. With a distinctive white and grey plumage, it often moves in response to the tides, feeding on small invertebrates, crustaceans, and mollusks along the shore. Sanderlings typically form large flocks and are often seen foraging on sandy beaches and coastal regions. Their agility and quick movements make them a common sight in areas with fluctuating tides.',
        habitat: 'Sandy beaches, coastal regions, mudflats',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 17-20 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Sanderlings are very active, constantly running back and forth along the shore to catch food carried by the tide.',
        breedingSeason: 'June to August'
    },
    { 
        id: 144, 
        name: 'Dunlin', 
        scientificName: ' Calidris alpina',
        image: Dunlin,
        description: 'The Dunlin is a small wader bird known for the distinctive black markings on its breast during the breeding season. It inhabits coastal regions, mudflats, and estuaries, where it actively forages for small invertebrates, mollusks, and crustaceans. Dunlins are often seen in large flocks, moving in unison as they search for food along the shorelines. Their characteristic flight patterns and feeding behavior make them a recognizable species in coastal wetlands. The Dunlin is adaptable and can be found in a wide range of habitats.',
        habitat: 'Coastal regions, mudflats, estuaries',
        diet: 'Invertebrates, crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Dunlins are often seen foraging along shorelines in large flocks, moving in unison as they search for food.',
        breedingSeason: 'June to August'
    },
    { 
        id: 145, 
        name: 'Little Stint', 
        scientificName: 'Calidris minuta ',
        image: LittleStint,
        description: 'The Little Stint is a small wader bird typically found in shallow wetlands, mudflats, and estuaries. This bird is known for its short bill and legs, which make it well-suited for probing the mud in search of food. Little Stints feed on small invertebrates, crustaceans, and mollusks, and are often seen in small groups, actively foraging along the shorelines. They are a common sight in coastal regions during the breeding season, where their distinct behavior and size make them easy to identify.',
        habitat: 'Mudflats, wetlands, coastal regions',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm, Wingspan 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Stints are active foragers, typically seen in small groups, probing the mud for food.',
        breedingSeason: 'May to July'
    },
    { 
        id: 146, 
        name: 'Eurasian Woodcock',
        scientificName: 'Scolopax rusticola ', 
        image: EurasianWoodcock,
        description: 'The Eurasian Woodcock is a large wader known for its cryptic plumage, which provides excellent camouflage in woodland habitats. This species is primarily nocturnal and has a unique courtship flight during breeding season. It feeds on earthworms, insects, and small invertebrates, which it searches for by probing the soil with its long bill. Eurasian Woodcocks are solitary birds and are highly elusive, making them difficult to spot in their forested habitats. They are most commonly found in boggy or wetland areas during the breeding season.',
        habitat: 'Woodlands, forests, boggy areas',
        diet: 'Earthworms, insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 35-40 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Woodcocks are mostly solitary and are highly elusive due to their camouflage and nocturnal habits.',
        breedingSeason: 'April to May'
    },
    { 
        id: 147, 
        name: 'Pin-tailed Snipe', 
        scientificName: 'Gallinago stenura ',
        image: PinTailedSnipe,
        description: 'The Pin-tailed Snipe is a medium-sized wader known for its long, slender tail and intricate plumage patterns. Found in wetlands, marshes, and mudflats, it feeds on invertebrates, crustaceans, and mollusks, probing shallow waters for food. The Pin-tailed Snipe is also known for its long, graceful flights and is often seen foraging in shallow waters during the breeding season. This species is highly adaptable, and although not very common, it can be found in a variety of wetland habitats throughout its range.',
        habitat: 'Wetlands, marshes, mudflats',
        diet: 'Invertebrates, crustaceans, small mollusks',
        lifespan: '5-7 years',
        size: 'Length 25-30 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pin-tailed Snipes are known for their long flights and are often seen foraging in shallow waters for food.',
        breedingSeason: 'April to July'
    },
    { 
        id: 148, 
        name: "Swinhoe's Snipe", 
        scientificName: ' Gallinago megala',
        image: SwinhoesSnipe,
        description: 'Swinhoe\'s Snipe is a medium-sized wader bird with a long bill and striking plumage. Found in marshes, wetlands, and mudflats, this species feeds on invertebrates, small fish, and mollusks. Swinhoe\'s Snipes are known for their probing behavior, foraging by sticking their bills into the mud to find small invertebrates. During breeding season, they are often seen in shallow waters, where they display elaborate courtship behaviors. This species is adaptable and is found in various wetland habitats throughout its range.',
        habitat: 'Marshes, wetlands, mudflats',
        diet: 'Invertebrates, small fish, mollusks',
        lifespan: '4-6 years',
        size: 'Length 25-30 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Swinhoe\'s Snipes are typically found in shallow waters, where they forage by probing the mud for small invertebrates.',
        breedingSeason: 'May to July'
    },
    { 
        id: 149, 
        name: 'Common Snipe', 
        scientificName: 'Gallinago gallinago ',
        image: CommonSnipe,
        description: 'The Common Snipe is a small wader with a long bill and striped plumage. It is commonly found in wetland habitats, including marshes, mudflats, and boggy areas. Known for its camouflage, the Common Snipe can be elusive, often remaining hidden in dense vegetation. It feeds on small invertebrates, crustaceans, and mollusks by probing the mud. The Common Snipe is a solitary bird, often seen in small groups during migration. It is known for its distinctive drumming flight during the breeding season.',
        habitat: 'Wetlands, marshes, mudflats',
        diet: 'Invertebrates, small crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 25-30 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Snipes are often seen probing the mud for small invertebrates and can be elusive due to their camouflage.',
        breedingSeason: 'April to June'
    },
    { 
        id: 150, 
        name: 'Jack Snipe', 
        scientificName: 'Lymnocryptes minimus ',
        image: JackSnipe,
        description: 'The Jack Snipe is a small and elusive wader bird known for its cryptic plumage and distinctive flight pattern. It is found in wetland areas, especially in marshes, bogs, and mudflats. The Jack Snipe feeds on small invertebrates and mollusks, foraging by probing the mud with its long bill. This species is solitary and often remains hidden during the day, coming out to forage in the early mornings or late evenings. Jack Snipes are often seen in small, scattered flocks during migration.',
        habitat: 'Marshes, bogs, mudflats',
        diet: 'Invertebrates, mollusks, small crustaceans',
        lifespan: '4-6 years',
        size: 'Length 20-25 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jack Snipes are solitary and elusive, often remaining hidden during the day and foraging in the early mornings or late evenings.',
        breedingSeason: 'April to July'
    },
    { 
        id: 151, 
        name: 'Terek Sandpiper', 
        scientificName: ' Xenus cinereus',
        image: TerekSandpiper,
        description: 'The Terek Sandpiper is a small wader with a distinctive upward-curved bill. It is typically found in coastal habitats, such as mudflats, estuaries, and marshes. These birds are often seen probing the mud for small invertebrates, crustaceans, and mollusks. Their unique bill helps them forage in shallow waters. Terek Sandpipers are migratory birds and can be seen in flocks during their migratory periods. They breed in the northern regions of Asia and Europe.',
        habitat: 'Mudflats, coastal regions, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '4-6 years',
        size: 'Length 20-22 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Terek Sandpipers are often seen foraging along the shorelines, where they probe the mud for small invertebrates.',
        breedingSeason: 'May to July'
    },
    { 
        id: 152, 
        name: 'Common Sandpiper',
        scientificName: 'Actitis hypoleucos ', 
        image: CommonSandpiper,
        description: 'The Common Sandpiper is a small wader with brown and white plumage. It is commonly found along freshwater and coastal habitats, especially in marshes and mudflats. These birds can often be seen searching for small invertebrates and crustaceans along the water’s edge. They have a distinctive behavior of constantly bobbing their body while foraging. Common Sandpipers breed in Eurasia and migrate to warmer regions during the winter.',
        habitat: 'Freshwater bodies, mudflats, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Sandpipers are often seen foraging along the edges of water, where they use their slender bills to search for small prey.',
        breedingSeason: 'May to July'
    },
    { 
        id: 153, 
        name: 'Green Sandpiper', 
        scientificName: 'Tringa ochropus ',
        image: GreenSandpiper,
        description: 'The Green Sandpiper is a small wader with a distinctive greenish-brown plumage and long legs. It is often found in freshwater wetlands and muddy shores. These birds are solitary and usually seen foraging alone in shallow waters. They feed on small invertebrates, crustaceans, and mollusks. Green Sandpipers are migratory birds, breeding in northern Europe and Asia, and migrating to warmer regions during the winter months.',
        habitat: 'Freshwater wetlands, mudflats, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 20-22 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Green Sandpipers are solitary birds often seen along freshwater bodies, where they forage for small invertebrates in shallow waters.',
        breedingSeason: 'June to August'
    },
    { 
        id: 154, 
        name: 'Spotted Redshank',
        scientificName: 'Tringa erythropus ', 
        image: SpottedRedshank,
        description: 'The Spotted Redshank is a wader with striking black-and-white plumage, especially during the breeding season. It is commonly found in coastal wetlands and mudflats. Spotted Redshanks are larger than many other waders and are often seen in flocks, probing the mud for small invertebrates and mollusks. They are migratory birds, breeding in northern Europe and Asia and migrating to southern Europe and Africa during the winter.',
        habitat: 'Coastal wetlands, mudflats, estuaries',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '6-8 years',
        size: 'Length 30-35 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Spotted Redshanks are often seen in flocks, foraging for food along coastal mudflats.',
        breedingSeason: 'May to July'
    },
    { 
        id: 155, 
        name: 'Common Greenshank', 
        scientificName: ' Tringa nebularia',
        image: CommonGreenshank,
        description: 'The Common Greenshank is a medium-sized wader with long legs and a greenish tint to its plumage. It is often found in coastal regions and estuaries, where it feeds on small invertebrates, mollusks, and crustaceans. These birds can often be seen searching for prey in the shallow waters. Greenshanks are migratory birds, breeding in Eurasia and migrating to southern regions during the winter. They are often seen in flocks during migration.',
        habitat: 'Coastal regions, estuaries, mudflats',
        diet: 'Small invertebrates, crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 30-35 cm, Wingspan 60-65 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Greenshanks are often seen foraging along the shore, where they search for small prey in the mud.',
        breedingSeason: 'May to July'
    },
    { 
        id: 156, 
        name: 'Common Redshank', 
        scientificName: ' ',
        image: CommonRedshank,
        description: 'The Common Redshank is a medium-sized wader with a reddish-orange beak and legs. It is typically found in coastal wetlands and mudflats, where it forages for invertebrates, mollusks, and crustaceans. The redshank is known for its distinctive call and is often seen searching the mud for prey. Redshanks are migratory birds, breeding in northern Europe and Asia, and migrating to southern Europe and Africa during the winter.',
        habitat: 'Coastal wetlands, mudflats, estuaries',
        diet: 'Invertebrates, crustaceans, mollusks',
        lifespan: '5-7 years',
        size: 'Length 28-30 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Redshanks are often seen foraging along shorelines, probing the mud for small invertebrates.',
        breedingSeason: 'May to July'
    },
    { 
        id: 157, 
        name: 'Wood Sandpiper', 
        scientificName: 'Tringa totanus ',
        image: WoodSandpiper,
        description: 'The Wood Sandpiper is a small wader with long legs and a slender bill. It is often found in freshwater wetlands, bogs, and marshes, where it forages for invertebrates, small crustaceans, and mollusks. Wood Sandpipers are solitary birds, usually seen searching for prey in shallow waters. They breed in northern Eurasia and migrate to southern regions during the winter. Their distinct behavior includes moving quickly while foraging.',
        habitat: 'Freshwater wetlands, bogs, marshes',
        diet: 'Invertebrates, small crustaceans, mollusks',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Wood Sandpipers are often solitary, foraging in shallow waters for food.',
        breedingSeason: 'May to July'
    },
    { 
        id: 158, 
        name: 'Marsh Sandpiper', 
        scientificName: 'Tringa glareola ',
        image: MarshSandpiper,
        description: 'The Marsh Sandpiper is a small wader with long legs and a slender bill. It is commonly found in marshes and mudflats, where it feeds on small mollusks, crustaceans, and invertebrates. Marsh Sandpipers are often seen foraging in shallow waters, probing the mud for food. These birds breed in wetlands in southern regions of Europe, Asia, and Africa, migrating to warmer areas during the winter.',
        habitat: 'Marshes, mudflats, coastal wetlands',
        diet: 'Invertebrates, small mollusks, crustaceans',
        lifespan: '4-6 years',
        size: 'Length 22-25 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Marsh Sandpipers are often seen foraging in shallow waters, where they use their long bills to probe for food.',
        breedingSeason: 'May to July'
    },
    { 
        id: 159, 
        name: 'Barred Buttonquail',
        scientificName: ' Tringa stagnatilis',
        image: BarredButtonquail,
        description: 'The Barred Buttonquail is a small, ground-dwelling bird with striking barred plumage. It is found in dry, open grasslands and scrubby habitats. These birds are usually solitary and known for their quick, darting movements on the ground. Barred Buttonquails feed on seeds, small invertebrates, and insects. They are found across Asia and Africa, where they breed during the warmer months, often in scrublands and agricultural fields.',
        habitat: 'Grasslands, open scrublands, agricultural fields',
        diet: 'Seeds, small invertebrates, insects',
        lifespan: '3-5 years',
        size: 'Length 20-23 cm, Wingspan 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Barred Buttonquails are ground-dwelling birds, known for their quick movements and darting behavior.',
        breedingSeason: 'March to August'
    },
    { 
        id: 160, 
        name: 'Sociable Lapwing', 
        scientificName: 'Turnix suscitator ',
        image: SociableLapwing,
        description: 'The Sociable Lapwing is a medium-sized wader with long legs and a distinctive black-and-white plumage. It is often found in open grasslands, steppe, and savannas. These birds are known for their social behavior, often forming large flocks during migration. Sociable Lapwings are primarily insectivorous, feeding on insects, small invertebrates, and seeds. They breed in central Asia and migrate to Africa and India during the winter.',
        habitat: 'Grasslands, steppe, savannas',
        diet: 'Insects, small invertebrates, seeds',
        lifespan: '4-6 years',
        size: 'Length 30-35 cm, Wingspan 50-55 cm',
        conservationStatus: 'Endangered',
        behavior: 'Sociable Lapwings are social birds that often form large flocks during migration.',
        breedingSeason: 'May to August'
    },
    { 
        id: 161, 
        name: 'Indian Courser', 
        scientificName: ' Dromas ardeola',
        image: IndianCourser,
        description: 'The Indian Courser is a ground-dwelling bird with a slender body and long legs. Found in arid habitats, this bird is renowned for its speed and agility, often chasing insects across the ground. It has a distinctive brown plumage with white underparts and a black line running from the beak to the neck. These birds prefer dry, open areas and are often seen running swiftly, avoiding predators with their impressive speed.',
        habitat: 'Grasslands, deserts, arid scrublands',
        diet: 'Insects, small invertebrates, seeds',
        lifespan: '4-6 years',
        size: 'Length 25-30 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Coursers are fast runners, often seen chasing insects on the ground.',
        breedingSeason: 'April to July'
    },
    { 
        id: 162, 
        name: 'Collared Pratincole', 
        scientificName: 'Cursorius coromandelicus ',
        image: CollaredPratincole,
        description: 'The Collared Pratincole is a small wader bird with a distinctive collar-like marking on its neck. These birds are often found near water sources in open areas such as grasslands and savannas. They are agile flyers and are known for catching insects mid-air during flight. Collared Pratincoles have brown upperparts, pale underparts, and a unique collar of dark feathers around their necks, giving them a striking appearance.',
        habitat: 'Grasslands, open wetlands, savannas',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 20-22 cm, Wingspan 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Collared Pratincoles are agile flyers, often seen chasing insects in the air during the evening.',
        breedingSeason: 'May to July'
    },
    { 
        id: 163, 
        name: 'Oriental Pratincole', 
        scientificName: ' Glareola pratincola',
        image: OrientalPratincole,
        description: 'The Oriental Pratincole is a slender wader bird with a long wingspan, typically found in open habitats near water sources. It is an agile flyer, catching insects in mid-air during flight. These birds have a pale brownish body with darker wings and a distinctive black line on their neck. They are often seen soaring gracefully above wetlands and grasslands, demonstrating their aerial prowess in the evenings.',
        habitat: 'Grasslands, open wetlands, coastal areas',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 20-25 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Oriental Pratincoles are known for their aerial insect-catching skills, often seen flying in circles above open fields.',
        breedingSeason: 'May to July'
    },
    { 
        id: 164, 
        name: 'Little Pratincole', 
        scientificName: ' Glareola maldivarum',
        image: LittlePratincole,
        description: 'The Little Pratincole is a small, agile wader bird often found in open grassy areas near water. Known for its graceful flight, this bird catches insects mid-air while foraging. Its brown upperparts, pale underparts, and dark wings make it easily recognizable. Little Pratincoles are often seen in groups, foraging in flight during the evening hours. They breed in open wetlands and savannas, where they can be observed hunting for insects.',
        habitat: 'Grasslands, wetlands, open savannas',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 16-18 cm, Wingspan 35-40 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Pratincoles are often seen foraging in flight, catching insects mid-air during the evening.',
        breedingSeason: 'May to July'
    },
    { 
        id: 165, 
        name: 'Brown Noddy', 
        scientificName: 'Glareola lactea ',
        image: BrownNoddy,
        description: 'The Brown Noddy is a medium-sized seabird that lives in tropical and subtropical coastal regions. It has dark brown plumage and is known for its graceful flight and agile foraging skills. These birds often feed on small fish and invertebrates found in shallow coastal waters. Brown Noddies typically breed in colonies on tropical islands, where they can be seen gliding over the water, searching for prey.',
        habitat: 'Coastal regions, tropical islands, sandy beaches',
        diet: 'Fish, small invertebrates',
        lifespan: '10-15 years',
        size: 'Length 33-38 cm, Wingspan 60-65 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown Noddies are known for their graceful flight and foraging in shallow coastal waters.',
        breedingSeason: 'May to August'
    },
    { 
        id: 166, 
        name: 'Common White Tern',
        scientificName: 'Anous stolidus ', 
        image: CommonWhiteTern,
        description: 'The Common White Tern is a small seabird with striking white plumage and a slender bill. It is often found in tropical coastal regions, gliding gracefully over the ocean. Known for their effortless flight, these birds hunt for small fish and invertebrates, often diving into the water to catch their prey. The Common White Tern is an elegant bird that can be seen soaring through the air in search of food.',
        habitat: 'Tropical coastal regions, islands',
        diet: 'Small fish, invertebrates',
        lifespan: '10-12 years',
        size: 'Length 30-35 cm, Wingspan 60-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common White Terns are often seen gliding over the water, hunting for small fish and flying with effortless grace.',
        breedingSeason: 'May to August'
    },
    { 
        id: 167, 
        name: 'Brown-headed Gull', 
        scientificName: 'Gygis candida ',
        image: BrownHeadedGull,
        description: 'The Brown-headed Gull is a medium-sized gull with brown head markings during the breeding season. It is commonly found in coastal and freshwater environments. These gulls are known for their scavenging habits, feeding on fish, invertebrates, and scraps. During the breeding season, they display distinctive brown markings on their heads, which become more prominent. Brown-headed Gulls are social birds, often seen in flocks near water.',
        habitat: 'Coastal regions, freshwater lakes, rivers',
        diet: 'Fish, invertebrates, scraps',
        lifespan: '5-7 years',
        size: 'Length 35-40 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown-headed Gulls are often seen scavenging along shorelines and lakes, feeding on fish and scraps.',
        breedingSeason: 'April to July'
    },
    { 
        id: 168, 
        name: 'Black-headed Gull', 
        scientificName: ' Larus brunnicephalus',
        image: BlackHeadedGull,
        description: 'The Black-headed Gull is a small to medium-sized gull with a distinctive dark head. Found in a variety of coastal and freshwater habitats, it is an agile forager. Black-headed Gulls are known for their sharp eyesight, which helps them locate food along shorelines and in shallow waters. During the breeding season, their dark head makes them easily identifiable. They feed on fish, insects, and other small invertebrates.',
        habitat: 'Coastal regions, freshwater lakes, rivers',
        diet: 'Fish, insects, invertebrates',
        lifespan: '5-7 years',
        size: 'Length 30-35 cm, Wingspan 60-65 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-headed Gulls are often seen foraging near shorelines, using their sharp eyesight to locate food.',
        breedingSeason: 'April to August'
    },
    { 
        id: 169, 
        name: "Pallas's Gull", 
        scientificName: 'Larus ridibundus ',
        image: PallassGull,
        description: 'Pallas\'s Gull is a large gull species found in coastal regions and rivers in temperate climates. It is known for its black-and-white plumage and strong flight. These gulls are often seen scavenging near fishing boats or on beaches, feeding on fish, invertebrates, and mollusks. They have a distinct call and are known for their large size and impressive wingspan. Pallas\'s Gulls are highly migratory, covering long distances during the winter.',
        habitat: 'Coastal regions, rivers, estuaries',
        diet: 'Fish, invertebrates, mollusks',
        lifespan: '10-15 years',
        size: 'Length 50-60 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pallas\'s Gulls are known for their strong flight and scavenging habits, often seen near fishing boats.',
        breedingSeason: 'May to July'
    },
    { 
        id: 170, 
        name: 'Sooty Tern', 
        scientificName: 'Larus ichthyaetus ',
        image: SootyTern,
        description: 'The Sooty Tern is a seabird with dark plumage and a slender body, found in tropical coastal regions and islands. Known for their long-distance flights, these birds cover vast areas during migration. They are often seen soaring above the ocean, searching for fish and invertebrates. Sooty Terns are elegant birds, with a striking black and white contrast on their wings and head. They breed in colonies on tropical islands.',
        habitat: 'Tropical coastal regions, islands',
        diet: 'Fish, invertebrates',
        lifespan: '10-12 years',
        size: 'Length 35-40 cm, Wingspan 85-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Sooty Terns are known for their long-distance flights and their distinctive black-and-white plumage during breeding season.',
        breedingSeason: 'May to August'
    },
    { 
        id: 171, 
        name: 'Bridled Tern', 
        scientificName: 'Onychoprion anaethetus ',
        image: BridledTern,
        description: 'The Bridled Tern is a seabird with a black line around its eye, resembling a bridled appearance. It inhabits tropical and subtropical coastal regions and islands. Known for its sleek body and agile flight, the Bridled Tern forages for fish and small invertebrates by diving into the water. This species is commonly seen during its breeding season, which lasts from May to August, and is generally considered a bird of least concern in terms of conservation.',
        habitat: 'Tropical coastal regions, islands',
        diet: 'Fish, small invertebrates',
        lifespan: '15-20 years',
        size: 'Length 30-35 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Bridled Terns are known for their aerial foraging, diving to catch fish from the water.',
        breedingSeason: 'May to August'
    },
    { 
        id: 172, 
        name: 'Little Tern', 
        scientificName: ' Sternula albifrons',
        image: LittleTern,
        description: 'The Little Tern is a small seabird with a black-capped head and graceful flight. It inhabits coastal regions and estuaries, where it can be seen diving for small fish and invertebrates. This species has a lifespan of 5-7 years and is classified as a bird of least concern. The Little Tern breeds from May to August and is known for its delicate nature and agility in flight, making it a common sight along shallow coastal waters.',
        habitat: 'Coastal regions, estuaries, sandy beaches',
        diet: 'Small fish, invertebrates',
        lifespan: '5-7 years',
        size: 'Length 20-25 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Little Terns are often seen diving for small fish in shallow coastal waters.',
        breedingSeason: 'May to August'
    },
    { 
        id: 173, 
        name: "Saunders's Tern", 
        scientificName: 'Sternula saundersi ',
        image: SaunderssTern,
        description: 'Saunders\'s Tern is a small seabird native to East Asia, easily identified by its black cap and slender body. It typically inhabits coastal areas, mudflats, and sandy beaches, where it forages for small fish and invertebrates. With a lifespan of 10-12 years, it is classified as endangered. Saunders\'s Tern breeds from May to July, known for its agile flight and its ability to spot prey from the air, making it a skilled hunter.',
        habitat: 'Coastal areas, mudflats, sandy beaches',
        diet: 'Fish, small invertebrates',
        lifespan: '10-12 years',
        size: 'Length 20-25 cm, Wingspan 45-50 cm',
        conservationStatus: 'Endangered',
        behavior: 'Saunders\'s Tern is often seen flying over coastal waters, foraging for small fish and insects.',
        breedingSeason: 'May to July'
    },
    { 
        id: 174, 
        name: 'Common Gull-billed Tern', 
        scientificName: 'Gelochelidon nilotica ',
        image: CommonGullBilledTern,
        description: 'The Common Gull-billed Tern is a medium-sized seabird with a short, stout bill. It inhabits coastal wetlands and estuaries, where it preys on small fish, crustaceans, and insects. This species has a lifespan of 7-10 years and is classified as least concern. Common Gull-billed Terns are known for their ground foraging behavior and ability to snatch prey from the surface of shallow waters, often breeding from May to August in coastal regions.',
        habitat: 'Coastal wetlands, mudflats, estuaries',
        diet: 'Fish, crustaceans, insects',
        lifespan: '7-10 years',
        size: 'Length 30-35 cm, Wingspan 65-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Gull-billed Terns are often seen foraging on the ground or in shallow waters, preying on small invertebrates.',
        breedingSeason: 'May to August'
    },
    { 
        id: 175, 
        name: 'Caspian Tern', 
        scientificName: ' Hydroprogne caspia',
        image: CaspianTern,
        description: 'The Caspian Tern is a large seabird known for its striking black markings and red bill. It resides along coastal regions and inland lakes, where it catches fish and small invertebrates. With a lifespan of 15-20 years, it is classified as a bird of least concern. The Caspian Tern is an exceptional hunter, using its powerful flight and sharp vision to dive and catch fish. Its breeding season lasts from May to August, often near water bodies.',
        habitat: 'Coastal regions, inland lakes, rivers',
        diet: 'Fish, small invertebrates',
        lifespan: '15-20 years',
        size: 'Length 45-50 cm, Wingspan 95-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Caspian Terns are known for their powerful flight and hunting abilities, often diving to catch fish.',
        breedingSeason: 'May to August'
    },
    { 
        id: 176, 
        name: 'Whiskered Tern', 
        scientificName: 'Chlidonias hybrida ',
        image: WhiskeredTern,
        description: 'The Whiskered Tern is a delicate seabird with a whisker-like plume on its face. Found in freshwater wetlands and lakes, it feeds on insects, small invertebrates, and fish. This species has a lifespan of 5-7 years and is listed as least concern. Whiskered Terns are known for their gliding flight over water, often searching for prey. They breed from May to July, typically in marshes and wetlands with abundant food sources.',
        habitat: 'Freshwater wetlands, lakes, marshes',
        diet: 'Insects, small invertebrates, fish',
        lifespan: '5-7 years',
        size: 'Length 25-30 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Whiskered Terns are often seen gliding over water in search of small fish and insects.',
        breedingSeason: 'May to July'
    },
    { 
        id: 177, 
        name: 'White-winged Tern', 
        scientificName: ' Chlidonias leucopterus',
        image: WhiteWingedTern,
        description: 'The White-winged Tern is a small seabird with striking white wings and a black head. It is often found in coastal wetlands, marshes, and lakes. This species feeds on fish and small invertebrates, with a lifespan of 5-7 years. The White-winged Tern is known for its graceful flight and foraging habits, diving into shallow waters for prey. It typically breeds from May to August in coastal and freshwater habitats, classified as least concern.',
        habitat: 'Coastal wetlands, marshes, lakes',
        diet: 'Fish, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 25-30 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-winged Terns are known for their graceful flight and foraging in shallow waters.',
        breedingSeason: 'May to August'
    },
    { 
        id: 178, 
        name: 'Black Tern', 
        scientificName: 'Chlidonias niger ',
        image: BlackTern,
        description: 'The Black Tern is a small wader with dark plumage and slender body, commonly found near freshwater lakes and wetlands. It feeds on insects, small invertebrates, and fish. With a lifespan of 4-6 years, it is classified as least concern. Black Terns are often seen foraging in the air and over water, searching for prey. Their breeding season lasts from May to August, and they typically nest in marshy areas with abundant water.',
        habitat: 'Freshwater lakes, wetlands, marshes',
        diet: 'Insects, small invertebrates, fish',
        lifespan: '4-6 years',
        size: 'Length 25-30 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black Terns are often seen foraging in the air and on the surface of water for small prey.',
        breedingSeason: 'May to August'
    },
    { 
        id: 179, 
        name: 'Roseate Tern', 
        scientificName: ' Sterna dougallii',
        image: RoseateTern,
        description: 'The Roseate Tern is a slender seabird with pinkish hues on its wings and breast. It is often found in coastal areas and islands, where it feeds on small fish and invertebrates. With a lifespan of 15-20 years, it is considered endangered. Roseate Terns are known for their diving behavior in search of small prey in shallow coastal waters. Their breeding season is from May to August, and they are most active in coastal habitats.',
        habitat: 'Coastal regions, sandy beaches, islands',
        diet: 'Small fish, invertebrates',
        lifespan: '15-20 years',
        size: 'Length 30-35 cm, Wingspan 70-75 cm',
        conservationStatus: 'Endangered',
        behavior: 'Roseate Terns are often seen diving for small fish in shallow coastal waters.',
        breedingSeason: 'May to August'
    },
    { 
        id: 180, 
        name: 'Common Tern', 
        scientificName: 'Sterna hirundo ',
        image: CommonTern,
        description: 'The Common Tern is a medium-sized seabird with a grayish-white body and a black cap. It is widely found in coastal regions, lakes, and estuaries. Known for its graceful flight and expert fishing skills, it dives into the water to catch small fish and crustaceans. Common Terns typically breed in colonies from May to August, often on sandy or rocky islands. Their lifespan is 10-15 years, and they play a vital role in the coastal ecosystem.',
        habitat: 'Coastal regions, lakes, estuaries',
        diet: 'Small fish, crustaceans',
        lifespan: '10-15 years',
        size: 'Length 30-35 cm, Wingspan 65-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Terns are often seen diving for fish and flying over water in search of prey.',
        breedingSeason: 'May to August'
    },
    { 
        id: 181, 
        name: 'Lesser Crested Tern', 
        scientificName: 'Thalasseus bengalensis ',
        image: LesserCrestedTern,
        description: 'The Lesser Crested Tern is a seabird with a distinctive black crest during the breeding season. It is commonly found in coastal regions and islands. This bird is known for its agile flight and deep dives to catch fish and small invertebrates. Lesser Crested Terns breed from May to August and prefer sandy beaches or rocky islands for nesting. They are typically seen in flocks, foraging in shallow waters and playing a key role in marine ecosystems.',
        habitat: 'Coastal regions, sandy beaches, islands',
        diet: 'Fish, small invertebrates',
        lifespan: '10-15 years',
        size: 'Length 35-40 cm, Wingspan 75-85 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Lesser Crested Terns are often seen diving for fish and foraging in shallow coastal waters.',
        breedingSeason: 'May to August'
    },
    { 
        id: 182, 
        name: 'Sandwich Tern', 
        scientificName: ' Thalasseus sandvicensis',
        image: SandwichTern,
        description: 'The Sandwich Tern is a medium-sized seabird with a black cap and long, slender wings. It inhabits coastal regions and islands, where it is frequently seen diving for fish. Known for its elegant flight and vocal nature, the Sandwich Tern is an important part of the coastal ecosystem, feeding on small fish and invertebrates. It breeds from May to August and typically builds its nest on sandy beaches or rocky islands, often in large colonies.',
        habitat: 'Coastal regions, sandy beaches, islands',
        diet: 'Fish, small invertebrates',
        lifespan: '10-15 years',
        size: 'Length 35-40 cm, Wingspan 75-85 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Sandwich Terns are often seen diving for fish in shallow coastal waters.',
        breedingSeason: 'May to August'
    },
    { 
        id: 183, 
        name: 'Greater Crested Tern', 
        scientificName: 'Thalasseus bergii ',
        image: GreaterCrestedTern,
        description: 'The Greater Crested Tern is a large seabird characterized by its prominent black crest. Found in coastal regions and islands, it is often seen diving for fish in shallow waters. This tern plays a significant role in controlling fish populations and maintaining the balance in coastal ecosystems. Its strong wings and powerful flight allow it to cover large areas in search of food. It breeds from May to August, typically in colonies on sandy beaches.',
        habitat: 'Coastal regions, sandy beaches, islands',
        diet: 'Fish, small invertebrates',
        lifespan: '15-20 years',
        size: 'Length 45-50 cm, Wingspan 95-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Greater Crested Terns are often seen diving for fish in shallow coastal waters.',
        breedingSeason: 'May to August'
    },
    { 
        id: 184, 
        name: 'Arctic Jaeger', 
        scientificName: 'Stercorarius parasiticus ',
        image: ArcticJaeger,
        description: 'The Arctic Jaeger is a large seabird known for its aggressive behavior, particularly towards other seabirds. Found in the Arctic and sub-Arctic regions, it is often seen chasing other birds to steal their food. Arctic Jaegers are solitary hunters during the breeding season, which lasts from June to August. They feed on fish, seabirds, and occasionally scavenge. Despite its aggressive nature, the Arctic Jaeger plays an important role in maintaining the food chain in these regions.',
        habitat: 'Arctic and sub-Arctic regions, coastal tundra',
        diet: 'Fish, seabirds, scavenging',
        lifespan: '10-15 years',
        size: 'Length 40-45 cm, Wingspan 95-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Arctic Jaegers are known for their piracy, chasing other seabirds to steal their food.',
        breedingSeason: 'June to August'
    },
    { 
        id: 185, 
        name: 'Pomarine Jaeger', 
        scientificName: ' Stercorarius pomarinus',
        image: PomarineJaeger,
        description: 'The Pomarine Jaeger is a large seabird known for its distinctive tail feathers and powerful flight. It is found in the Arctic and sub-Arctic regions, where it aggressively chases other seabirds to steal their prey. Pomarine Jaegers are solitary hunters and often rely on scavenging. Their powerful wings and swift flight enable them to cover great distances in search of food. They breed from May to July, typically in coastal tundra or on remote islands.',
        habitat: 'Arctic and sub-Arctic regions, coastal tundra',
        diet: 'Fish, seabirds, scavenging',
        lifespan: '15-20 years',
        size: 'Length 50-55 cm, Wingspan 110-120 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pomarine Jaegers are known for their aggressive behavior, chasing other seabirds to steal their prey.',
        breedingSeason: 'May to July'
    },
    { 
        id: 186, 
        name: 'Brown Skua', 
        scientificName: ' Catharacta antarctica',
        image: BrownSkua,
        description: 'The Brown Skua is a large seabird found in the southern oceans. Known for its aggressive behavior, it steals food from other seabirds and scavenges in coastal areas. Its large size and powerful flight make it a dominant presence in its habitat. Brown Skuas breed from September to December, often in large colonies on remote islands or coastal regions. Despite its aggressive nature, the Brown Skua plays a crucial role in maintaining balance in the marine ecosystem.',
        habitat: 'Coastal regions, especially near breeding colonies in the southern oceans',
        diet: 'Fish, seabirds, scavenging',
        lifespan: '10-15 years',
        size: 'Length 50-60 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown Skuas are known for their piracy, stealing food from other seabirds.',
        breedingSeason: 'September to December'
    },
    { 
        id: 187, 
        name: 'Sri Lanka Bay-owl', 
        scientificName: 'Phodilus assimilis ',
        image: SriLankaBayOwl,
        description: 'The Sri Lanka Bay-owl is a medium-sized owl endemic to Sri Lanka. Recognizable by its large, round face and nocturnal hunting behavior, this owl preys on insects and small mammals. It inhabits the tropical forests and woodlands of Sri Lanka, preferring dense cover for hunting. Sri Lanka Bay-owls have a lifespan of 5-8 years and are most active during the night. They breed from April to August, and their solitary habits make them difficult to spot in the wild.',
        habitat: 'Tropical forests and woodlands of Sri Lanka',
        diet: 'Insects, small mammals',
        lifespan: '5-8 years',
        size: 'Length 35-40 cm, Wingspan 80-90 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Sri Lanka Bay-owls are solitary hunters and prefer dense forest cover.',
        breedingSeason: 'April to August'
    },
    { 
        id: 188, 
        name: 'Common Barn-owl', 
        scientificName: 'Tyto alba ',
        image: CommonBarnOwl,
        description: 'The Common Barn-owl is a widespread owl species known for its heart-shaped face and ghostly appearance. It inhabits open fields, farmlands, and sometimes forests, where it hunts small mammals and birds. Nocturnal in nature, Barn-owls have a quiet flight and use their acute hearing to locate prey. They breed from April to September and play a vital role in controlling rodent populations. Their lifespan is 4-5 years, and they are often heard screeching during flight.',
        habitat: 'Open fields, farmlands, and sometimes forests',
        diet: 'Small mammals, birds',
        lifespan: '4-5 years',
        size: 'Length 33-39 cm, Wingspan 85-95 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Barn-owls are nocturnal hunters, often heard screeching during flight.',
        breedingSeason: 'April to September'
    },
    {
        id: 189, 
        name: 'Brown Boobook', 
        scientificName: ' Ninox scutulata',
        image: BrownBoobook,
        description: 'The Brown Boobook is a small, cryptic owl found in forests and woodlands. Its brown plumage blends with the surroundings, helping it remain hidden from predators. Active mostly at night, it hunts insects and small vertebrates. The owl’s large, rounded eyes give it excellent night vision. With a lifespan of 6-8 years, it prefers tropical and subtropical forests, remaining elusive and solitary, often perched in dense foliage during the day.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Insects, small vertebrates',
        lifespan: '6-8 years',
        size: 'Length 22-25 cm, Wingspan 55-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown Boobooks are primarily nocturnal and often stay hidden in dense foliage.',
        breedingSeason: 'April to August'
    },
    {
        id: 190, 
        name: 'Jungle Owlet', 
        scientificName: 'Glaucidium radiatum',
        image: JungleOwlet,
        description: 'The Jungle Owlet is a small owl that lives in dense forests, characterized by its cryptic behavior and distinct call. It blends well with its environment, making it hard to spot. This owl hunts insects and small birds, primarily during the night. With a lifespan of 5-7 years, it prefers the tropical and subtropical forests. Known for its shy nature, the Jungle Owlet is most active during the breeding season from April to July.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Insects, small birds',
        lifespan: '5-7 years',
        size: 'Length 20-25 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jungle Owlets are shy and usually hunt insects and small vertebrates at night.',
        breedingSeason: 'April to July'
    },
    {
        id: 191, 
        name: 'Chestnut-backed Owlet', 
        scientificName: ' Glaucidium castanotum',
        image: ChestnutBackedOwlet,
        description: 'The Chestnut-backed Owlet is a small, nocturnal owl species native to Sri Lanka. It is easily recognized by its reddish-brown back and small size. Found primarily in dense tropical forests, it hunts insects and small mammals. This endangered owl prefers solitude and is often found perched in dense undergrowth during the day. Its breeding season spans from March to August, and it has a lifespan of 4-6 years.',
        habitat: 'Tropical forests of Sri Lanka',
        diet: 'Insects, small mammals',
        lifespan: '4-6 years',
        size: 'Length 20-23 cm, Wingspan 50-55 cm',
        conservationStatus: 'Endangered',
        behavior: 'The Chestnut-backed Owlet is solitary and prefers dense undergrowth for hunting.',
        breedingSeason: 'March to August'
    },
    {
        id: 192, 
        name: 'Serendib Scops-owl', 
        scientificName: ' Otus thilohoffmanni',
        image: SerendibScopsOwl,
        description: 'The Serendib Scops-owl is a small, endangered owl species endemic to Sri Lanka. It is known for its distinct ear-tufts and camouflaged appearance. The owl resides in rainforests and montane forests, where it feeds on insects and small vertebrates. Active mostly at night, it is elusive and rarely seen. Its lifespan ranges from 6 to 8 years, and the breeding season occurs from April to September.',
        habitat: 'Rainforests and montane forests of Sri Lanka',
        diet: 'Insects, small vertebrates',
        lifespan: '6-8 years',
        size: 'Length 20-25 cm, Wingspan 50-55 cm',
        conservationStatus: 'Endangered',
        behavior: 'Serendib Scops-owls are elusive and mostly nocturnal, foraging for insects and small mammals.',
        breedingSeason: 'April to September'
    },
    {
        id: 193, 
        name: 'Indian Scops-owl', 
        scientificName: 'Otus bakkamoena ',
        image: IndianScopsOwl,
        description: 'The Indian Scops-owl is a small owl species found in India and Sri Lanka. Recognizable by its ear-tufts and large, expressive eyes, this owl inhabits open woodlands, forests, and scrublands. It has a diet of insects and small vertebrates. With a lifespan of 6-8 years, it is mostly nocturnal, resting during the day and blending into its surroundings. Its breeding season lasts from April to August.',
        habitat: 'Open woodlands, forests, and scrublands',
        diet: 'Insects, small vertebrates',
        lifespan: '6-8 years',
        size: 'Length 20-23 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Scops-owls are nocturnal and often sit still during the day, blending into their surroundings.',
        breedingSeason: 'April to August'
    },
    {
        id: 194, 
        name: 'Oriental Scops-owl', 
        scientificName: 'Otus sunia ',
        image: OrientalScopsOwl,
        description: 'The Oriental Scops-owl is a small owl species native to Asia, known for its large eyes and ear-tufts. It prefers dry forests and scrublands, where it hunts insects and small reptiles. This nocturnal bird has a lifespan of 5-7 years. It is a strong and agile hunter, often preying on small vertebrates. Its breeding season spans from March to July.',
        habitat: 'Tropical and subtropical dry forests, scrublands',
        diet: 'Insects, small vertebrates',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm, Wingspan 40-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Oriental Scops-owl is mainly nocturnal and feeds on insects and small reptiles.',
        breedingSeason: 'March to July'
    },
    {
        id: 195, 
        name: 'Brown Wood-owl', 
        scientificName: 'Strix leptogrammica ',
        image: BrownWoodOwl,
        description: 'The Brown Wood-owl is a large, nocturnal owl found in the forests of South Asia. Its broad, rounded head and reddish-brown plumage make it easily identifiable. A skilled hunter, it preys on small mammals, birds, and insects. Its large size, with a wingspan of 120-130 cm, allows it to cover large areas in search of prey. It has a lifespan of 10-12 years and breeds between November and January.',
        habitat: 'Deciduous and evergreen forests',
        diet: 'Small mammals, birds, insects',
        lifespan: '10-12 years',
        size: 'Length 50-55 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Brown Wood-owl is an active nocturnal hunter, primarily preying on small mammals and birds.',
        breedingSeason: 'November to January'
    },
    {
        id: 196, 
        name: 'Spot-bellied Eagle-owl', 
        scientificName: 'Bubo nipalensis ',
        image: SpotBelliedEagleOwl,
        description: 'The Spot-bellied Eagle-owl is a large and powerful owl species recognized by its distinctive dark spots on the belly. Found in forests and rocky outcrops, this owl is a strong predator, hunting small mammals, birds, and reptiles. It is known for its agility and strength. Its lifespan ranges from 12 to 15 years, and it has a breeding season between January and May.',
        habitat: 'Forests, rocky outcrops',
        diet: 'Small mammals, birds, reptiles',
        lifespan: '12-15 years',
        size: 'Length 55-60 cm, Wingspan 140-150 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Spot-bellied Eagle-owl is a strong and agile hunter, often preying on larger animals like birds and mammals.',
        breedingSeason: 'January to May'
    },
    {
        id: 197, 
        name: 'Brown Fish-owl', 
        scientificName: 'Ketupa zeylonensis ',
        image: BrownFishOwl,
        description: 'The Brown Fish-owl is a large species often found near water bodies such as wetlands, rivers, and lakes. Specializing in hunting fish, it can dive for prey in shallow waters. Its diet also includes small mammals. This owl has a lifespan of 10-12 years and is known for its expert fishing skills. Its breeding season lasts from April to September.',
        habitat: 'Wetlands, rivers, lakes',
        diet: 'Fish, small mammals',
        lifespan: '10-12 years',
        size: 'Length 50-55 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown Fish-owls are skilled hunters that often dive for fish in shallow waters.',
        breedingSeason: 'April to September'
    },
    {
        id: 198, 
        name: 'Osprey', 
        scientificName: ' Pandion haliaetus',
        image: Osprey,
        description: 'The Osprey is a large raptor, known for its exceptional fishing skills. Found near coastal regions, rivers, and lakes, it primarily preys on fish. Its large wingspan (150-160 cm) allows it to soar over water bodies and dive to capture its prey. With a lifespan of 15-20 years, the Osprey breeds from March to July and is highly adapted for a life near water.',
        habitat: 'Coastal regions, rivers, lakes',
        diet: 'Fish',
        lifespan: '15-20 years',
        size: 'Length 50-60 cm, Wingspan 150-160 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Osprey is known for its exceptional diving skills, catching fish with precision.',
        breedingSeason: 'March to July'
    },    
    { 
        id: 199, 
        name: 'Black-winged Kite', 
        scientificName: 'Elanus caeruleus ',
        image: BlackWingedKite,
        description: 'The Black-winged Kite is a small to medium-sized raptor, easily recognized by its white body and black wings. It is an expert hunter, often seen hovering in the air before diving to catch small prey. Its sharp vision allows it to spot prey from high altitudes, and it is often seen hunting in open fields and grasslands. These birds are solitary and use their hovering flight to expertly locate and capture their food.',
        habitat: 'Grasslands, open woodlands, and agricultural fields',
        diet: 'Small mammals, insects, birds',
        lifespan: '10-15 years',
        size: 'Length 30-36 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-winged Kites are known for their hovering flight, which they use to spot prey from above.',
        breedingSeason: 'September to February'
    },
    { 
        id: 200, 
        name: 'Oriental Honey-buzzard', 
        scientificName: 'Pernis ptilorhynchus ',
        image: OrientalHoneyBuzzard,
        description: 'The Oriental Honey-buzzard is a medium-sized raptor that primarily feeds on honey, insects, and larvae. Its distinct appearance, with dark wings and a pale head, helps it stand out. It is known for its unique behavior of raiding bee hives to consume honey and larvae. It has strong talons, and its hunting skills are focused on extracting honey and other soft prey from hives and nests. Its diet includes a variety of insects and small birds.',
        habitat: 'Forests, grasslands, and near water bodies',
        diet: 'Honey, insects, larvae, small birds',
        lifespan: '15-20 years',
        size: 'Length 55-60 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Oriental Honey-buzzard is known for its ability to raid bees nests and hives for honey and larvae.',
        breedingSeason: 'April to July'
    },
    { 
        id: 201, 
        name: "Jerdon's Baza", 
        scientificName: 'Aviceda jerdoni ',
        image: JerdonsBaza,
        description: 'Jerdon\'s Baza is a small raptor native to the forests and woodlands of India and Sri Lanka. It is easily recognized by its striking white-and-brown plumage and distinctive crest. These birds are arboreal hunters, preferring to perch quietly on tree branches as they wait for prey to approach. They feed on small mammals, birds, and reptiles, using their sharp talons to capture prey. The species is mostly solitary and elusive, making it difficult to spot in the wild.',
        habitat: 'Forests, woodlands, and scrublands',
        diet: 'Small mammals, birds, and reptiles',
        lifespan: '10-15 years',
        size: 'Length 35-40 cm, Wingspan 70-80 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jerdon\'s Baza is a solitary and arboreal hunter, often seen perched quietly waiting for prey.',
        breedingSeason: 'April to August'
    },
    { 
        id: 202, 
        name: 'Black Baza', 
        scientificName: 'Aviceda leuphotes ',
        image: BlackBaza,
        description: 'The Black Baza is a small, striking raptor found in tropical and subtropical forests. It is known for its black and white plumage and distinctive white stripes on its wings. This bird is primarily a glider, soaring through the canopy as it hunts for small mammals, birds, and insects. It has excellent eyesight and often spots its prey from a great distance. The Black Baza is highly agile, able to maneuver expertly through the dense foliage of its forest habitat.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Small mammals, birds, insects',
        lifespan: '10-12 years',
        size: 'Length 35-40 cm, Wingspan 75-85 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black Bazas are often seen gliding through the canopy, using their keen eyesight to spot prey.',
        breedingSeason: 'April to June'
    },
    { 
        id: 203, 
        name: 'Crested Serpent-eagle', 
        scientificName: 'Spilornis cheela ',
        image: CrestedSerpentEagle,
        description: 'The Crested Serpent-eagle is a large, powerful eagle known for its distinct crest. It is an expert predator, specializing in hunting snakes and other reptiles. This eagle is often seen soaring high in the sky or perched on tall trees as it searches for prey. Its sharp talons and keen eyesight help it capture reptiles, small mammals, and birds. The Crested Serpent-eagle is highly territorial and often hunts in the same areas year after year.',
        habitat: 'Open woodlands, forests, and near rivers',
        diet: 'Snakes, lizards, small mammals',
        lifespan: '15-20 years',
        size: 'Length 55-60 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Crested Serpent-eagles are often seen soaring at high altitudes or perched on trees while hunting for snakes.',
        breedingSeason: 'December to April'
    },
    { 
        id: 204, 
        name: 'Mountain Hawk-eagle', 
        scientificName: 'Nisaetus nipalensis ',
        image: MountainHawkEagle,
        description: 'The Mountain Hawk-eagle is a medium-sized eagle found in mountainous regions. It has sharp talons and powerful wings, using these features to hunt birds and small mammals. Its habitat includes steep mountain forests and rocky cliffs, where it preys on animals living in these high-altitude regions. The Mountain Hawk-eagle is a swift and agile predator, known for its rapid flight and keen eyesight. It often hunts over forested areas, diving quickly to catch prey.',
        habitat: 'Mountain forests and cliffs',
        diet: 'Small mammals, birds, reptiles',
        lifespan: '12-18 years',
        size: 'Length 50-55 cm, Wingspan 120-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Mountain Hawk-eagles are known for their fast, agile flight, often seen hunting over high-altitude forests.',
        breedingSeason: 'February to August'
    },
    { 
        id: 205, 
        name: 'Changeable Hawk-eagle', 
        scientificName: 'Nisaetus cirrhatus ',
        image: ChangeableHawkEagle,
        description: 'The Changeable Hawk-eagle is a versatile raptor found in a wide range of habitats. It is a medium-sized eagle that adapts to different environments, making it a flexible hunter. It preys on a wide variety of animals, including small mammals, birds, and reptiles. This eagle is known for its ability to thrive in diverse ecosystems, from forests to open woodlands. Its hunting technique involves agile flight and keen observation to catch prey, often swooping down from high perches.',
        habitat: 'Forests, open woodlands, and rocky areas',
        diet: 'Small mammals, birds, reptiles',
        lifespan: '12-15 years',
        size: 'Length 50-60 cm, Wingspan 120-140 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Changeable Hawk-eagles are highly adaptable hunters, able to catch a wide variety of prey.',
        breedingSeason: 'January to June'
    },
    { 
        id: 206, 
        name: 'Rufous-bellied Eagle', 
        scientificName: ' Lophotriorchis kienerii',
        image: RufousBelliedEagle,
        description: 'The Rufous-bellied Eagle is a large eagle known for its striking reddish-brown plumage on its belly. It is commonly found in forests and grasslands of South Asia, where it preys on small mammals, birds, and reptiles. This eagle is known for its strong flight and territorial behavior. It often perches on trees or soars through the sky while searching for food. The Rufous-bellied Eagle is a solitary hunter, rarely seen in groups, and is a powerful predator in its habitat.',
        habitat: 'Grasslands, forests, and open areas',
        diet: 'Small mammals, birds, reptiles',
        lifespan: '12-16 years',
        size: 'Length 55-65 cm, Wingspan 130-150 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Rufous-bellied Eagles are solitary hunters, often seen perched on trees or soaring in search of prey.',
        breedingSeason: 'March to June'
    },
    { 
        id: 207, 
        name: 'Black Eagle', 
        scientificName: 'Ictinaetus malaiensis ',
        image: BlackEagle,
        description: 'The Black Eagle is a powerful and majestic raptor found in mountainous areas. It has deep-black plumage and is known for its strength and agility. Black Eagles are apex predators in their environment, preying on small mammals, birds, and reptiles. They are often seen soaring in the sky or perched on cliff edges, scanning for prey. These eagles have excellent eyesight and are known for their stealthy hunting technique, using quick and decisive attacks to capture their quarry.',
        habitat: 'Mountain forests and cliffs',
        diet: 'Small mammals, birds, reptiles',
        lifespan: '15-20 years',
        size: 'Length 60-70 cm, Wingspan 160-170 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black Eagles are strong and agile hunters, often preying on birds and small mammals.',
        breedingSeason: 'February to June'
    },
    { 
        id: 208, 
        name: 'Booted Eagle',
        scientificName: ' Hieraaetus pennatus', 
        image: BootedEagle,
        description: 'The Booted Eagle is a small eagle known for its agile flight and characteristic boot-like feathers on its legs. It is a highly adaptable predator, found in a wide range of habitats, from forests to grasslands. The Booted Eagle feeds on small mammals, birds, and insects, using its sharp talons and keen eyesight to catch prey. It is an expert hunter and often seen soaring through the sky or perching on trees in search of food.',
        habitat: 'Forests, grasslands, and open woodlands',
        diet: 'Small mammals, birds, insects',
        lifespan: '10-15 years',
        size: 'Length 40-50 cm, Wingspan 90-110 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Booted Eagles are known for their agility and ability to hunt in a variety of habitats.',
        breedingSeason: 'April to July'
    },    
    { 
        id: 209, 
        name: 'Western Marsh-harrier', 
        scientificName: ' Circus aeruginosus',
        image: WesternMarshHarrier,
        description: 'The Western Marsh-harrier is a medium-sized raptor found near wetlands and marshes. It hunts by flying low over the water, using its keen eyesight to spot prey. These birds are known for their silent flight and nocturnal hunting behavior. Their diet includes small mammals, birds, and amphibians. Marsh-harriers are agile predators and are an essential part of the ecosystem, controlling the populations of small animals.',
        habitat: 'Wetlands, marshes, and grasslands',
        diet: 'Small mammals, birds, amphibians',
        lifespan: '10-15 years',
        size: 'Length 45-50 cm, Wingspan 100-120 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Western Marsh-harriers are primarily nocturnal hunters and are known for their quiet flight over marshy areas.',
        breedingSeason: 'April to August'
    },
    { 
        id: 210, 
        name: 'Pallid Harrier', 
        scientificName: 'Circus macrourus ',
        image: PallidHarrier,
        description: 'The Pallid Harrier is a medium-sized raptor, easily recognizable by its light-colored plumage. It glides gracefully over grasslands and wetlands in search of prey. Known for its agile flight, the Pallid Harrier often hovers before diving down to catch small mammals, birds, and insects. These birds are migratory, often traveling long distances between breeding and wintering grounds.',
        habitat: 'Grasslands, wetlands, and open country',
        diet: 'Small mammals, birds, insects',
        lifespan: '8-10 years',
        size: 'Length 35-40 cm, Wingspan 80-100 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pallid Harriers are known for their agile flight, often hovering in search of prey.',
        breedingSeason: 'April to June'
    },
    { 
        id: 211, 
        name: 'Pied Harrier',
        scientificName: 'Circus melanoleucos ', 
        image: PiedHarrier,
        description: 'The Pied Harrier is a large, striking raptor with black-and-white plumage. It is often seen flying over open fields and marshes, hunting small mammals, birds, and insects. These harriers are known for their strong, agile flight, often seen hunting in pairs. They are opportunistic hunters, using their sharp eyesight to locate prey while soaring gracefully in the air.',
        habitat: 'Grasslands, marshes, and wetlands',
        diet: 'Small mammals, birds, insects',
        lifespan: '10-12 years',
        size: 'Length 45-50 cm, Wingspan 100-110 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pied Harriers are strong and agile hunters, often seen hunting in pairs.',
        breedingSeason: 'May to August'
    },
    { 
        id: 212, 
        name: 'Montagu\'s Harrier', 
        scientificName: ' Circus pygargus',
        image: MontagusHarrier,
        description: 'Montagu\'s Harrier is a medium-sized raptor with long wings and tail. It is often seen gliding low over grasslands and agricultural fields in search of prey. These harriers are skilled hunters, relying on their excellent eyesight and stealth to capture small mammals, birds, and insects. They are migratory and typically breed in temperate regions before migrating to warmer climates for winter.',
        habitat: 'Grasslands, agricultural fields, and wetlands',
        diet: 'Small mammals, birds, insects',
        lifespan: '7-10 years',
        size: 'Length 40-45 cm, Wingspan 90-110 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Montagu\'s Harrier is a skilled hunter, often seen gliding low over the ground in search of prey.',
        breedingSeason: 'April to July'
    },
    { 
        id: 213, 
        name: 'Crested Goshawk', 
        scientificName: 'Accipiter trivirgatus ',
        image: CrestedGoshawk,
        description: 'The Crested Goshawk is a small but aggressive raptor, known for its powerful flight and sharp talons. It is found in tropical forests and woodlands, where it preys on small birds and mammals. The bird uses ambush tactics, often launching surprise attacks from a high perch. Its agility and quick movements make it an efficient predator in its forested habitat.',
        habitat: 'Tropical forests and woodlands',
        diet: 'Small mammals, birds, reptiles',
        lifespan: '10-12 years',
        size: 'Length 35-40 cm, Wingspan 70-85 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Crested Goshawks are known for their aggressive hunting tactics, often ambushing prey from a high perch.',
        breedingSeason: 'November to March'
    },
    { 
        id: 214, 
        name: 'Shikra', 
        scientificName: ' Accipiter badius',
        image: Shikra,
        description: 'The Shikra is a small but fast raptor found in various habitats, from forests to urban areas. It is an efficient predator, preying on small birds and reptiles. Shikras are known for their rapid flight, darting between trees to capture their prey. Their small size and agility make them formidable hunters, capable of catching prey much larger than themselves.',
        habitat: 'Forests, woodlands, and urban areas',
        diet: 'Small birds, reptiles, insects',
        lifespan: '8-12 years',
        size: 'Length 30-35 cm, Wingspan 60-70 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Shikras are fast and agile, often seen darting between trees to catch prey.',
        breedingSeason: 'April to August'
    },
    { 
        id: 215, 
        name: 'Besra', 
        scientificName: 'Accipiter virgatus ',
        image: Besra,
        description: 'The Besra is a small, elusive hawk, known for its quick movements and sharp talons. It primarily inhabits forests and woodlands, where it preys on small birds and insects. The Besra is a solitary predator, often seen perched on tree branches waiting for its prey to pass by. Its stealth and speed make it a successful hunter in its dense forest habitat.',
        habitat: 'Forests and woodlands',
        diet: 'Small birds, insects',
        lifespan: '5-8 years',
        size: 'Length 30-35 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Besras are solitary hunters, often found perched on a tree waiting for prey to pass by.',
        breedingSeason: 'March to June'
    },
    {
        id: 216, 
        name: 'White-bellied Sea-eagle', 
        scientificName: 'Haliaeetus leucogaster ',
        image: WhiteBelliedSeaEagle,
        description: 'The White-bellied Sea-eagle is a large bird of prey found near coastal areas and wetlands. It has a distinctive white belly and is known for its powerful flight and strong talons. The eagle primarily hunts fish, often soaring high above the water before diving to catch prey. It is a solitary hunter and a top predator in its coastal habitat.',
        habitat: 'Coastal areas, estuaries, and wetlands',
        diet: 'Fish, small mammals, birds',
        lifespan: '20-25 years',
        size: 'Length 65-75 cm, Wingspan 180-210 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-bellied Sea-eagles are solitary hunters, often seen soaring high above the water in search of prey.',
        breedingSeason: 'June to December'
    },
    {
        id: 217, 
        name: 'Grey-headed Fish-eagle', 
        scientificName: 'Icthyophaga ichthyaetus ',
        image: GreyHeadedFishEagle,
        description: 'The Grey-headed Fish-eagle is a medium-sized raptor found near rivers, lakes, and coastal wetlands. It primarily feeds on fish and has excellent eyesight for spotting prey from the air. Known for its agility and keen hunting skills, the Grey-headed Fish-eagle is often seen flying low over water bodies or perched on trees along the shore.',
        habitat: 'Rivers, lakes, and coastal wetlands',
        diet: 'Fish, amphibians, small reptiles',
        lifespan: '15-20 years',
        size: 'Length 55-60 cm, Wingspan 130-150 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Grey-headed Fish-eagles are known for their agility in flight and are often seen hunting along riverbanks.',
        breedingSeason: 'January to April'
    },
    {
        id: 218, 
        name: 'Brahminy Kite', 
        scientificName: 'Haliastur indus ',
        image: BrahminyKite,
        description: 'The Brahminy Kite is a striking raptor with reddish-brown plumage and a white head. It is commonly found near coastal areas and rivers, where it hunts for fish and small prey. The kite uses its strong flight and keen eyesight to locate food, often hovering over water or perching near rivers. These birds are often seen soaring gracefully in search of their next meal.',
        habitat: 'Coastal areas, rivers, and wetlands',
        diet: 'Fish, small mammals, birds',
        lifespan: '10-15 years',
        size: 'Length 40-50 cm, Wingspan 100-120 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brahminy Kites are often seen hovering over water, searching for prey.',
        breedingSeason: 'December to June'
    },    
    {
        id: 219, 
        name: 'Black Kite', 
        scientificName: 'Milvus migrans ',
        image: BlackKite,
        description: 'The Black Kite is a common raptor found across various habitats. With dark plumage, it is highly adaptable and often seen scavenging for food. These birds play a critical role in the ecosystem by cleaning up carrion. They are agile in flight and often soar in the sky, searching for small mammals, birds, or carrion. Black Kites can live for 10-15 years and are known for their opportunistic feeding behavior.',
        habitat: 'Urban areas, open woodlands, and wetlands',
        diet: 'Carrion, small mammals, birds',
        lifespan: '10-15 years',
        size: 'Length 45-55 cm, Wingspan 120-150 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black Kites are opportunistic feeders, often seen circling in the sky looking for food.',
        breedingSeason: 'March to July'
    },
    {
        id: 220, 
        name: 'Eurasian Buzzard', 
        scientificName: ' Buteo buteo',
        image: EurasianBuzzard,
        description: 'The Eurasian Buzzard is a medium-sized raptor that hunts small mammals and birds. Known for its soaring flight, the buzzard often hunts from a high vantage point. It is found in woodlands, grasslands, and farmlands. With a wingspan of up to 130 cm, it is a powerful hunter. The Eurasian Buzzard is a skilled hunter and remains a common bird of prey across its range. Its lifespan is typically 10-15 years.',
        habitat: 'Open woodlands, grasslands, and farmland',
        diet: 'Small mammals, birds, reptiles',
        lifespan: '10-15 years',
        size: 'Length 50-55 cm, Wingspan 110-130 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Buzzards are known for their soaring flight and often hunt from a high vantage point.',
        breedingSeason: 'March to August'
    },
    {
        id: 221, 
        name: 'Malabar Trogon', 
        scientificName: 'Harpactes fasciatus ',
        image: MalabarTrogon,
        description: 'The Malabar Trogon is a small, colorful bird native to the tropical forests of South India. With its vibrant plumage, it is often found in dense vegetation, where it hides to avoid predators. Known for its beautiful colors, the Malabar Trogon preys mainly on insects and small fruits. Its shy nature makes it hard to spot, and it is often heard rather than seen. Its lifespan ranges from 5 to 8 years.',
        habitat: 'Tropical forests and woodlands',
        diet: 'Insects, small fruits',
        lifespan: '5-8 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Malabar Trogons are shy birds, often hiding in dense foliage, and are known for their vibrant colors.',
        breedingSeason: 'April to August'
    },
    {
        id: 222, 
        name: 'Sri Lanka Grey Hornbill', 
        scientificName: 'Ocyceros gingalensis ',
        image: SriLankaGreyHornbill,
        description: 'The Sri Lanka Grey Hornbill is endemic to Sri Lanka and easily identified by its grey plumage. It thrives in dry forests and scrublands, where it can be seen foraging for fruits and insects. This species plays a key role in dispersing seeds and maintaining the health of the ecosystem. Its lifespan is typically 10-12 years. The Sri Lanka Grey Hornbill is endangered due to habitat loss and is rarely seen outside protected areas.',
        habitat: 'Dry forests, scrublands',
        diet: 'Fruits, small insects',
        lifespan: '10-12 years',
        size: 'Length 45-50 cm',
        conservationStatus: 'Endangered',
        behavior: 'Sri Lanka Grey Hornbills are often seen foraging for fruits and insects in the canopy of trees.',
        breedingSeason: 'March to June'
    },
    {
        id: 223, 
        name: 'Malabar Pied Hornbill', 
        scientificName: 'Anthracoceros coronatus ',
        image: MalabarPiedHornbill,
        description: 'The Malabar Pied Hornbill is a large bird native to the tropical forests of India. Its striking black and white plumage, combined with a large bill, makes it one of the most recognizable hornbills. These birds are often seen flying in pairs and are known for their loud, distinctive calls. Malabar Pied Hornbills are omnivores, eating fruits, small vertebrates, and insects. Their lifespan ranges from 20 to 30 years.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Fruits, small vertebrates, insects',
        lifespan: '20-30 years',
        size: 'Length 65-75 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Malabar Pied Hornbills are often seen flying in pairs and are known for their loud calls.',
        breedingSeason: 'May to July'
    },
    {
        id: 224, 
        name: 'Common Hoopoe', 
        scientificName: 'Upupa epops ',
        image: CommonHoopoe,
        description: 'The Common Hoopoe is a distinctively shaped bird with a crown-like crest on its head and a long, curved bill. Found in woodlands, grasslands, and agricultural areas, it is known for its loud calls and its habit of probing the ground for insects. This bird has a lifespan of 5-10 years and is a skilled hunter of invertebrates. Its distinctive appearance and vocalizations make it a common sight in open habitats.',
        habitat: 'Open woodlands, grasslands, and farmland',
        diet: 'Insects, small invertebrates',
        lifespan: '5-10 years',
        size: 'Length 25-32 cm, Wingspan 50-55 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Hoopoes are known for their distinctively loud calls and are often seen probing the ground for insects.',
        breedingSeason: 'April to July'
    },
    {
        id: 225, 
        name: 'Asian Green Bee-eater', 
        scientificName: 'Merops orientalis ',
        image: AsianGreenBeeEater,
        description: 'The Asian Green Bee-eater is a small, colorful bird that thrives in open areas like grasslands and agricultural fields. It preys mainly on bees, wasps, and other flying insects, catching them mid-air. With its striking green plumage, it is often seen perched on branches, waiting for prey. This species has a lifespan of 5-7 years and is known for its aerial acrobatics. It is found throughout South and Southeast Asia.',
        habitat: 'Open woodlands, grasslands, and agricultural fields',
        diet: 'Insects, particularly bees and wasps',
        lifespan: '5-7 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Asian Green Bee-eaters are often seen perched on a branch, waiting for insects to fly by.',
        breedingSeason: 'May to August'
    },
    {
        id: 226, 
        name: 'Chestnut-headed Bee-eater', 
        scientificName: ' Merops leschenaulti',
        image: ChestnutHeadedBeeEater,
        description: 'The Chestnut-headed Bee-eater is a brightly colored bird found in Asia, characterized by its chestnut-colored head and vibrant plumage. It is skilled in catching flying insects, especially bees. These birds are often seen in small groups, catching their prey mid-air with impressive agility. The Chestnut-headed Bee-eater typically lives for 5-6 years. It is a common sight in grasslands and mangrove forests across the region.',
        habitat: 'Open areas, grasslands, and mangrove forests',
        diet: 'Insects, particularly bees',
        lifespan: '5-6 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Chestnut-headed Bee-eaters are often seen in small groups, catching bees and insects in flight.',
        breedingSeason: 'March to July'
    },    
    {
        id: 227, 
        name: 'Blue-tailed Bee-eater', 
        scientificName: 'Merops philippinus ',
        image: BlueTailedBeeEater,
        description: 'The Blue-tailed Bee-eater is a small, colorful bird with a distinctive blue tail. It is known for its agile flight and hunting insects, particularly bees. These birds often fly in groups, chasing insects mid-air. The Blue-tailed Bee-eater is a skilled predator, using its sharp beak to catch prey while in flight. They are commonly found in open woodlands and grasslands, where they breed in burrows. Their bright colors make them a favorite among birdwatchers.',
        habitat: 'Open woodlands, grasslands, and agricultural areas',
        diet: 'Insects, particularly bees',
        lifespan: '4-6 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Blue-tailed Bee-eaters are highly active birds, often seen chasing bees and other insects in the air.',
        breedingSeason: 'April to July'
    },
    {
        id: 228, 
        name: 'European Bee-eater', 
        scientificName: 'Merops apiaster ',
        image: EuropeanBeeEater,
        description: 'The European Bee-eater is a striking bird with vivid plumage and a long tail. It is known for its ability to catch bees and other flying insects. These birds have a remarkable technique of catching insects mid-flight, often performing acrobatic maneuvers. The European Bee-eater is highly social, often seen in groups perched on trees or wires. They breed in colonies, using burrows in sandy banks. Their vibrant colors and dynamic behavior make them a fascinating species to observe.',
        habitat: 'Open woodlands, grasslands, and dry habitats',
        diet: 'Insects, especially bees',
        lifespan: '5-7 years',
        size: 'Length 25-30 cm, Wingspan 50-60 cm',
        conservationStatus: 'Least Concern',
        behavior: 'European Bee-eaters are often seen in groups, perched on exposed branches and hunting for insects in mid-air.',
        breedingSeason: 'May to July'
    },
    {
        id: 229, 
        name: 'Indian Roller', 
        scientificName: 'Coracias benghalensis ',
        image: IndianRoller,
        description: 'The Indian Roller is a colorful bird with brilliant blue and brown plumage. It is known for its acrobatic flight and is commonly found in open areas. Indian Rollers are often seen perched on power lines or tree branches, where they hunt for insects, small reptiles, and birds. These birds are solitary and territorial, often displaying vibrant courtship behaviors during the breeding season. They are also known for their dramatic aerial displays during flight, making them a spectacle to watch.',
        habitat: 'Open fields, scrublands, and grasslands',
        diet: 'Insects, small reptiles, birds',
        lifespan: '5-6 years',
        size: 'Length 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Rollers are often seen perched on power lines or tree branches, hunting for insects.',
        breedingSeason: 'February to June'
    },
    {
        id: 230, 
        name: 'Oriental Dollarbird', 
        scientificName: 'Eurystomus orientalis ',
        image: OrientalDollarbird,
        description: 'The Oriental Dollarbird is a medium-sized bird with a distinctive blue-green body and a white crescent on its wings. It is known for its hunting of large insects and small birds. The Oriental Dollarbird is named for the circular white spots on its wings, which resemble dollar coins. These birds often fly in search of large insects, using their sharp beak to catch prey mid-air. They are usually found in open woodlands and grasslands, where they nest in tree cavities.',
        habitat: 'Open woodlands, grasslands, and mangrove forests',
        diet: 'Insects, small birds',
        lifespan: '7-10 years',
        size: 'Length 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Oriental Dollarbirds are often seen flying in search of large insects, using their sharp beak to catch prey mid-air.',
        breedingSeason: 'April to August'
    },
    {
        id: 231,
        name: 'Black-backed Dwarf-kingfisher',
        scientificName: ' Ceyx erithaca',
        image: BlackBackedDwarfKingfisher,
        description: 'The Black-backed Dwarf-kingfisher is a small, vibrant bird known for its striking blue and orange plumage. This kingfisher is often seen near water, hunting for small fish and insects. Its bright colors and quick movements make it a favorite among bird watchers. The Black-backed Dwarf-kingfisher prefers dense, tropical forests where it can nest in tree holes and hunt in streams. These birds are solitary and are most active during the early morning and late afternoon, diving skillfully for prey.',
        habitat: 'Tropical forests, near streams',
        diet: 'Small fish, insects',
        lifespan: '5-7 years',
        size: 'Length 15-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-backed Dwarf-kingfishers are agile hunters, often seen diving into water to catch prey. They are solitary birds and are most active during dawn and dusk.',
        breedingSeason: 'January to June'
    },
    {
        id: 232,
        name: 'Blue-eared Kingfisher',
        scientificName: 'Alcedo meninting ',
        image: BlueEaredKingfisher,
        description: 'The Blue-eared Kingfisher is a small and vividly colored bird, distinguished by its iridescent blue feathers and striking orange underparts. These birds are often found near clear, slow-moving streams or ponds. They use their sharp bills to catch small fish and insects, diving skillfully from a perch to snatch their prey. The Blue-eared Kingfisher is territorial and prefers solitary hunting. Its brightly colored plumage makes it easy to spot, but its quiet behavior and sharp eyesight make it a highly efficient predator.',
        habitat: 'Rivers, streams, ponds',
        diet: 'Small fish, insects',
        lifespan: '6-8 years',
        size: 'Length 18-22 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Blue-eared Kingfishers are highly territorial and spend their time hunting alone. They are agile in flight and can often be seen perched quietly near water.',
        breedingSeason: 'April to September'
    },
    {
        id: 233,
        name: 'Common Kingfisher',
        scientificName: 'Alcedo atthis ',
        image: CommonKingfisher,
        description: 'The Common Kingfisher is a bright, small bird known for its brilliant blue and orange plumage. It is a skilled fisherman, often diving into the water to catch small fish. This species is widespread and can be seen in a variety of freshwater habitats across its range. The Common Kingfisher is territorial and prefers to stay close to its hunting grounds. These birds are solitary and very active during daylight hours, spending their time perched quietly before making sudden dives into the water.',
        habitat: 'Lakes, rivers, ponds',
        diet: 'Small fish, aquatic invertebrates',
        lifespan: '10-15 years',
        size: 'Length 16-19 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Kingfishers are solitary birds that spend most of their time hunting from a perch. They are very territorial, especially during the breeding season.',
        breedingSeason: 'March to July'
    },
    {
        id: 234,
        name: 'Pied Kingfisher',
        scientificName: 'Ceryle rudis ',
        image: PiedKingfisher,
        description: 'The Pied Kingfisher is a strikingly patterned bird with black and white feathers. This species is a skilled hunter, often hovering above water before diving to catch fish. It is widely distributed and can be found near rivers, lakes, and other freshwater habitats. The Pied Kingfisher is known for its high-energy hunting style, hovering in mid-air and diving sharply to catch its prey. These birds are territorial and vocal, often heard calling out as they patrol their hunting grounds.',
        habitat: 'Rivers, lakes, ponds',
        diet: 'Small fish, crustaceans',
        lifespan: '7-10 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pied Kingfishers are highly energetic and can often be seen hovering in the air while hunting. They are territorial and known for their bold, noisy calls.',
        breedingSeason: 'June to September'
    },    
    {
        id: 235,
        name: 'Stork-billed Kingfisher',
        scientificName: 'Pelargopsis capensis ',
        image: StorkBilledKingfisher,
        description: 'The Stork-billed Kingfisher is a large and powerful bird with a distinctive, large, red bill that helps it capture fish and other prey. It is commonly found in tropical forests near rivers, lakes, and ponds. Its vibrant blue and orange feathers make it highly visible against the greenery. This kingfisher prefers to hunt by perching on tree branches and diving into the water to catch its prey.',
        habitat: 'Tropical forests, near water',
        diet: 'Fish, amphibians, large insects',
        lifespan: '10-12 years',
        size: 'Length 33-38 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Stork-billed Kingfishers are excellent hunters, often perching on trees and diving to catch prey. They are territorial and stay in the same area year-round, aggressively defending their territory. Their large bill is used not only for hunting but also for digging and nest-building.',
        breedingSeason: 'February to August'
    },
    {
        id: 236,
        name: 'White-breasted Kingfisher',
        scientificName: 'Halcyon smyrnensis ',
        image: WhiteBreastedKingfisher,
        description: 'The White-breasted Kingfisher is a large, vibrant bird known for its striking blue back, white belly, and reddish-brown wings. Found near water bodies, it hunts for small fish and insects. Its bright colors and loud calls make it easily recognizable. This bird prefers to perch in a quiet spot, swooping down on its prey with precision. Its plumage also serves as camouflage among the dense vegetation near water.',
        habitat: 'Woodlands, wetlands, and urban areas',
        diet: 'Small fish, insects, amphibians',
        lifespan: '6-10 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-breasted Kingfishers are solitary birds, often seen perched quietly for long periods before diving to catch prey. They are known for their loud, distinctive calls. These birds are territorial, and males frequently sing to establish their presence and attract mates.',
        breedingSeason: 'November to May'
    },
    {
        id: 237,
        name: 'Coppersmith Barbet',
        scientificName: 'Psilopogon haemacephalus ',
        image: CoppersmithBarbet,
        description: 'The Coppersmith Barbet is a small, colorful bird with a green body and bright red forehead. Its metallic call, resembling the sound of a coppersmith hammering, is its most distinct feature. This barbet feeds primarily on fruits, seeds, and insects, often seen foraging in trees. It lives in tropical forests and gardens, and its call is one of the most easily identifiable sounds in these environments. Barbets are often heard before they are seen.',
        habitat: 'Tropical forests, gardens, and open woodlands',
        diet: 'Fruits, seeds, insects',
        lifespan: '8-10 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Coppersmith Barbets are social birds, frequently found in groups. They have a strong affinity for trees, where they spend much of their time feeding on fruits and insects. Their call, which sounds like metal striking metal, is loud and resonates through their habitat.',
        breedingSeason: 'March to August'
    },
    {
        id: 238,
        name: 'Sri Lanka Barbet',
        scientificName: 'Psilopogon rubricapillus ',
        image: SriLankaBarbet,
        description: 'The Sri Lanka Barbet is a brightly colored, endemic bird found only in the tropical forests and montane forests of Sri Lanka. It is known for its distinctive green and yellow plumage, highlighted by a red face and throat. This bird primarily feeds on fruits, insects, and small invertebrates found in its forested habitat. It is a relatively quiet bird that spends most of its time in pairs or small groups, foraging in the treetops.',
        habitat: 'Tropical forests, montane forests',
        diet: 'Fruits, insects, small invertebrates',
        lifespan: '8-12 years',
        size: 'Length 22-24 cm',
        conservationStatus: 'Endangered',
        behavior: 'Sri Lanka Barbets are arboreal and tend to stay in the upper canopy of the forests. They are often seen in pairs and are active during the day, foraging for food in the trees. They are a quiet species, but their bright plumage makes them easy to spot.',
        breedingSeason: 'May to August'
    },
    {
        id: 239,
        name: 'Brown-headed Barbet',
        scientificName: 'Psilopogon zeylanicus ',
        image: BrownHeadedBarbet,
        description: 'The Brown-headed Barbet is a small bird with a distinctive brown head and a vivid green body. Found in forests and plantations, it feeds on fruits, insects, and other small invertebrates. This bird is famous for its drumming sound, which it creates by striking tree trunks, marking its territory. The Brown-headed Barbet has a quiet demeanor but becomes more vocal and active during the breeding season when defending its nest.',
        habitat: 'Forests, plantations, gardens',
        diet: 'Fruits, insects',
        lifespan: '6-8 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Brown-headed Barbets are territorial birds that use their loud drumming to establish dominance in their habitats. They spend much of their time perched on tree branches, feeding and defending their nests from other birds. They are relatively solitary and quiet outside of the breeding season.',
        breedingSeason: 'February to June'
    },
    {
        id: 240,
        name: 'Yellow-fronted Barbet',
        scientificName: 'Psilopogon flavifrons ',
        image: YellowFrontedBarbet,
        description: 'The Yellow-fronted Barbet is a small, brightly colored bird found in tropical forests and gardens. It is easily recognized by its distinctive yellow forehead and throat, contrasted with a green body and brownish back. These barbets primarily feed on fruits, seeds, and insects. They are arboreal, spending most of their time in the canopy, where they forage for food and nest in tree cavities. The bird’s vibrant coloration helps it blend into the leafy green surroundings.',
        habitat: 'Tropical forests, gardens',
        diet: 'Fruits, seeds, insects',
        lifespan: '7-9 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Yellow-fronted Barbets are active birds that spend a lot of time in trees foraging for fruits and insects. They are known for their sharp, loud calls and are often heard before they are seen. They prefer forested habitats but can also be found in gardens and plantations.',
        breedingSeason: 'March to September'
    },
    {
        id: 241, 
        name: 'Greater Sri Lanka Flameback',
        scientificName: 'Chrysocolaptes stricklandi ', 
        image: GreaterSriLankaFlameback,
        description: 'The Greater Sri Lanka Flameback is a large, impressive woodpecker endemic to Sri Lanka. This bird is known for its brilliant golden back feathers and dark wings, which make it easy to identify. The Flameback is primarily found in forested areas, where it uses its strong beak to drum against tree trunks in search of insects. It is a solitary bird, and its loud drumming is a typical sound in its habitat. Its habitat range is mostly restricted to the island of Sri Lanka.',
        habitat: 'Forests, woodlands',
        diet: 'Insects, small invertebrates',
        lifespan: 'Up to 15 years',
        size: 'Length 40-45 cm',
        conservationStatus: 'Endangered',
        behavior: 'The Greater Sri Lanka Flameback is a solitary woodpecker that spends much of its time drumming on tree trunks in search of food. Its bright golden feathers make it stand out in its forested habitat, though its loud drumming also alerts other animals to its presence. It is a slow-moving bird, often seen climbing tree trunks in search of insects.',
        breedingSeason: 'April to July'
    },
    {
        id: 242, 
        name: 'White-naped Woodpecker', 
        scientificName: 'Chrysocolaptes festivus ',
        image: WhiteNapedWoodpecker,
        description: 'The White-naped Woodpecker is a medium-sized bird with a distinctive white patch on its neck and a dark cap. It can be found in forests and woodlands, where it uses its sharp beak to search for insects, beetles, and termites in tree bark. Its drumming sound is characteristic of woodpeckers, and this bird is often heard before it is seen. The White-naped Woodpecker is known for its solitary nature and sharp, repetitive drumming as it forages for food.',
        habitat: 'Forests, woodlands',
        diet: 'Insects, beetles, termites',
        lifespan: '10-12 years',
        size: 'Length 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The White-naped Woodpecker is a solitary species that prefers to climb tree trunks in search of insects and other small invertebrates. Its sharp drumming is an important part of its foraging behavior, which it uses to attract prey from under the bark of trees. This woodpecker is relatively quiet outside of feeding and nesting times.',
        breedingSeason: 'March to June'
    },    
    {
        id: 243, 
        name: 'Black-rumped Flameback', 
        scientificName: 'Dinopium benghalense ',
        image: BlackRumpedFlameback,
        description: 'The Black-rumped Flameback is a medium-sized woodpecker with a bright red head and black body. It is known for its unique drumming on trees to attract mates and communicate with other birds. These woodpeckers are highly territorial, using their drumming to establish dominance and mark their territory. They can often be heard drumming on trees from a distance.',
        habitat: 'Dry forests, woodlands',
        diet: 'Insects, ants, termites',
        lifespan: '8-12 years',
        size: 'Length 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This bird is often seen hopping on tree trunks, searching for insects under the bark. It is highly territorial and uses loud drumming to communicate with other woodpeckers.',
        breedingSeason: 'February to May'
    },
    {
        id: 244, 
        name: 'Lesser Sri Lanka Flameback', 
        scientificName: 'Dinopium psarodes ',
        image: LesserSriLankaFlameback,
        description: 'The Lesser Sri Lanka Flameback is a smaller cousin of the Greater Flameback. It has similar golden feathers on its back and a striking black-and-white wing pattern. Native to Sri Lanka’s dense forests, this species is less common and faces habitat threats. They are recognized for their distinct drumming sounds, which echo through their dense forest habitats.',
        habitat: 'Dense forests, plantations',
        diet: 'Insects, small arthropods',
        lifespan: '5-7 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'It is commonly found tapping on trees while searching for insects in its forest habitat. The Lesser Flameback is a solitary woodpecker that rarely interacts with others outside of the breeding season.',
        breedingSeason: 'April to August'
    },
    {
        id: 245, 
        name: 'Rufous Woodpecker', 
        scientificName: ' Micropternus brachyurus',
        image: RufousWoodpecker,
        description: 'The Rufous Woodpecker has a distinctive rufous-colored body with dark streaks. It is a common sight in the forests of South Asia and is known for its drumming behavior while searching for insects. These woodpeckers are particularly adept at foraging in difficult areas, often tapping deep into tree bark to find hidden insects.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Insects, ants, beetles',
        lifespan: '6-10 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Rufous Woodpecker is an agile climber, often seen on the trunks of large trees in search of food. Its sharp drumming can be heard throughout the forest as it searches for insects under the bark.',
        breedingSeason: 'January to May'
    },
    {
        id: 246, 
        name: 'Lesser Yellownape', 
        scientificName: 'Picus chlorolophus ',
        image: LesserYellownape,
        description: 'The Lesser Yellownape is a small woodpecker with a yellow nape and a black body. It is known for its small size compared to other woodpeckers and is often seen tapping on tree trunks in forests. This species is an expert in accessing small crevices where other birds may struggle, allowing it to forage for insects that are hidden deep within the bark.',
        habitat: 'Forests, woodlands',
        diet: 'Insects, ants, small arthropods',
        lifespan: 'Up to 10 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'It is often found in pairs, tapping on trees in search of food and using its small size to access difficult areas. It can be seen foraging in both dense and open forest areas.',
        breedingSeason: 'March to June'
    },
    {
        id: 247, 
        name: 'Streak-throated Woodpecker', 
        scientificName: 'Picus xanthopygaeus ',
        image: StreakThroatedWoodpecker,
        description: 'The Streak-throated Woodpecker is a medium-sized bird with a distinct streaked throat. It is commonly found in dense forested areas and is known for its loud drumming on tree trunks. This species is often seen foraging on both tree trunks and the forest floor, using its strong beak to peck away at wood and search for termites and other insects.',
        habitat: 'Dense forests, tropical and subtropical regions',
        diet: 'Insects, termites, beetles',
        lifespan: '5-8 years',
        size: 'Length 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This woodpecker is often seen on the forest floor and on tree trunks, looking for food. It has a strong territorial instinct and uses loud calls and drumming to defend its area.',
        breedingSeason: 'April to July'
    },
    {
        id: 248, 
        name: 'Indian Pygmy Woodpecker', 
        scientificName: ' Picoides nanus',
        image: IndianPygmyWoodpecker,
        description: 'The Indian Pygmy Woodpecker is a small bird with a brown and white striped body. It is commonly found in Indian forests and is known for its ability to forage in small crevices for insects. This species is highly agile and often seen hopping along tree trunks, searching for insects under the bark and in wood cavities.',
        habitat: 'Woodlands, tropical and subtropical forests',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 15-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This woodpecker is highly active, often seen hopping around tree trunks and branches in search of food. It can be found in small groups or alone, depending on the season.',
        breedingSeason: 'January to May'
    },
    {
        id: 249, 
        name: 'Yellow-crowned Woodpecker', 
        scientificName: 'Leiopicus mahrattensis ',
        image: YellowCrownedWoodpecker,
        description: 'The Yellow-crowned Woodpecker is easily recognized by its vibrant yellow crown and black wings. It is found in tropical forests and is known for its drumming and vocalization. These woodpeckers are often seen in pairs, foraging together for insects and making their presence known through loud drumming sounds.',
        habitat: 'Tropical forests, mangrove swamps',
        diet: 'Insects, termites, ants',
        lifespan: '7-9 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Yellow-crowned Woodpecker is often seen tapping on tree trunks and sometimes in pairs foraging for insects. It uses its sharp beak to peck away at tree bark and wood in search of food.',
        breedingSeason: 'April to July'
    },
    {
        id: 250, 
        name: 'Common Kestrel', 
        scientificName: ' Falco tinnunculus',
        image: CommonKestrel,
        description: 'The Common Kestrel is a small falcon with a distinctive rufous-brown back and black spots. It is a skilled hunter, preying on small mammals and insects. Often seen hovering mid-air while searching for prey, the kestrel uses its keen eyesight to spot small mammals from a distance.',
        habitat: 'Grasslands, open fields, and savannas',
        diet: 'Small mammals, insects, birds',
        lifespan: 'Up to 15 years',
        size: 'Length 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Common Kestrel is known for its hovering flight, scanning the ground for prey before swooping down to catch it. It is an excellent hunter and can be seen hunting in both rural and urban environments.',
        breedingSeason: 'March to July'
    },
    {
        id: 251, 
        name: 'Amur Falcon', 
        scientificName: 'Falco amurensis',
        image: AmurFalcon,
        description: 'The Amur Falcon is a small, migratory falcon with a grayish-brown back and distinctive black markings on its wings. It is known for its long migratory journeys from Asia to Africa. These falcons are highly skilled hunters, often seen hunting insects mid-air during their long journeys.',
        habitat: 'Grasslands, open woodlands, and savannas',
        diet: 'Insects, small birds, bats',
        lifespan: '10-12 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Amur Falcon is a fast flier, often seen hunting insects mid-air and migrating long distances during seasonal changes. Its ability to migrate vast distances makes it a remarkable species of falcon.',
        breedingSeason: 'April to July'
    },
    {
        id: 252, 
        name: 'Oriental Hobby', 
        scientificName: 'Falco severus ',
        image: OrientalHobby,
        description: 'The Oriental Hobby is a small falcon with a sleek body and dark plumage. It is an agile predator, hunting small birds and insects with precision. The hobby is a fast flier and relies on its speed and agility to capture prey mid-air.',
        habitat: 'Open woodlands, grasslands, and mountains',
        diet: 'Small birds, insects',
        lifespan: '6-8 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Oriental Hobby is an excellent flier, often hunting small prey mid-air and using its speed to outmaneuver other birds. It is a solitary predator and is rarely seen in groups.',
        breedingSeason: 'April to August'
    },    
    {
        id: 253, 
        name: 'Peregrine Falcon', 
        scientificName: 'Falco peregrinus ',
        image: PeregrineFalcon,
        description: 'The Peregrine Falcon is a formidable bird of prey renowned for its incredible speed. With its powerful wings and striking dark and white plumage, it is capable of diving at speeds exceeding 300 km/h. Found in diverse habitats including cliffs, mountains, and coastal regions, the Peregrine Falcon uses its keen eyesight to hunt birds and small mammals. Its dramatic hunting dives, combined with its majestic flight, make it a symbol of power and precision in the avian world.',
        habitat: 'Cliffs, mountains, and coastal regions',
        diet: 'Birds, small mammals',
        lifespan: '15-20 years',
        size: 'Length 35-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Known for its breathtaking hunting dives, reaching speeds over 300 km/h, the Peregrine Falcon uses its sharp vision and aerial agility to capture prey mid-flight.',
        breedingSeason: 'March to June'
    },
    {
        id: 254, 
        name: 'Sri Lanka Hanging-parrot', 
        scientificName: 'Loriculus beryllinus ',
        image: SriLankaHangingParrot,
        description: 'The Sri Lanka Hanging-parrot is a small, vibrant bird native to Sri Lanka. Its emerald-green feathers and unique hanging posture while feeding give it a distinct appearance. These parrots prefer forested regions and are known for their acrobatic feeding behavior, hanging upside down to reach fruits, seeds, and flowers. Though small, the Sri Lanka Hanging-parrot is highly vocal and often seen in pairs or small groups. Due to habitat loss, this species is classified as vulnerable.',
        habitat: 'Forests, woodlands, plantations',
        diet: 'Fruits, seeds, flowers',
        lifespan: '10-12 years',
        size: 'Length 15-18 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'The Sri Lanka Hanging-parrot is known for its acrobatic feeding style, hanging upside down from branches to feed on fruits and flowers.',
        breedingSeason: 'January to May'
    },
    {
        id: 255, 
        name: 'Plum-headed Parakeet', 
        scientificName: 'Himalayapsitta cyanocephala ',
        image: PlumHeadedParakeet,
        description: 'The Plum-headed Parakeet is a large and colorful bird, distinguished by its vibrant purple head and green body. These parrots are often seen in large flocks, known for their playful, social behavior. They are highly vocal and engage in various calls and sounds, creating a lively atmosphere in their habitat. Native to South Asia, Plum-headed Parakeets are commonly found in forests, woodlands, and gardens, feeding primarily on fruits, seeds, and flowers. They are a popular species among birdwatchers due to their striking appearance.',
        habitat: 'Forests, woodlands, and gardens',
        diet: 'Fruits, seeds, flowers',
        lifespan: '12-15 years',
        size: 'Length 40-45 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Plum-headed Parakeet is social, often seen in flocks, and known for its loud, playful calls. Its vibrant plumage and active behavior make it a popular bird among birdwatchers.',
        breedingSeason: 'March to August'
    },    
    {
        id: 256, 
        name: 'Rose-ringed Parakeet', 
        scientificName: ' Alexandrinus krameri',
        image: RoseRingedParakeet,
        description: 'The Rose-ringed Parakeet is a vibrant green parakeet known for its distinctive red beak and long, pointed tail. Native to the Indian subcontinent, this bird is often seen in large flocks feeding on seeds and fruits. It is known for its adaptability to urban environments and can be spotted in parks and gardens. Their vocal nature and bright colors make them a popular bird among birdwatchers. They are social birds and tend to form strong pair bonds.',
        habitat: 'Woodlands, parks, and urban areas',
        diet: 'Seeds, fruits, and nuts',
        lifespan: '15-20 years',
        size: 'Length 38-42 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Rose-ringed Parakeets are active during the day and are known for their screeching calls, flying in large groups and often seen hanging upside down on tree branches.',
        breedingSeason: 'February to July'
    },
    {
        id: 257, 
        name: 'Alexandrine Parakeet', 
        scientificName: 'Palaeornis eupatria ',
        image: AlexandrineParakeet,
        description: 'The Alexandrine Parakeet is a large, colorful bird with a green body and a distinctive red beak. Named after Alexander the Great, this bird is found across South Asia and is known for its loud calls and impressive flying abilities. They are often seen in groups feeding on fruits, nuts, and seeds. Their social structure and vibrant plumage make them a favorite among bird enthusiasts. These parrots are intelligent and capable of mimicking human speech.',
        habitat: 'Forests, urban areas, and parks',
        diet: 'Fruits, seeds, and nuts',
        lifespan: '20-30 years',
        size: 'Length 58-65 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Alexandrine Parakeets are highly social and live in large flocks. They are known for their loud calls and the ability to mimic sounds.',
        breedingSeason: 'March to August'
    },
    {
        id: 258, 
        name: 'Emerald-collared Parakeet',
        scientificName: 'Nicopsitta calthrapae ', 
        image: EmeraldCollaredParakeet,
        description: 'The Emerald-collared Parakeet is a striking green parakeet known for its brilliant emerald-colored neck and distinctive vocalizations. Native to the Indian subcontinent, it is often found in tropical and subtropical forests. This bird is social and can often be seen in groups feeding on fruits, seeds, and nuts. The Emerald-collared Parakeet is recognized for its intelligence and adaptability in urban settings. Its vibrant plumage and lively behavior make it a favorite among birdwatchers.',
        habitat: 'Tropical and subtropical forests, urban areas',
        diet: 'Fruits, seeds, and nuts',
        lifespan: '15-20 years',
        size: 'Length 30-35 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These parakeets are highly social and often seen in flocks. They communicate with loud calls and are active during the day.',
        breedingSeason: 'February to June'
    },
    {
        id: 259, 
        name: 'Indian Pitta', 
        scientificName: 'Pitta brachyura ',
        image: IndianPitta,
        description: 'The Indian Pitta is a small, colorful bird with a distinct appearance, featuring bright green, blue, and orange plumage. It is commonly found in forests and dense undergrowth in India. Known for its shy nature, the Indian Pitta spends most of its time hopping around the forest floor in search of insects, small invertebrates, and fruits. Despite its vibrant colors, it is often difficult to spot due to its secretive behavior. The Indian Pitta is a migratory bird, returning to India during the monsoon season.',
        habitat: 'Dense forests, undergrowth, and grasslands',
        diet: 'Insects, small invertebrates, and fruits',
        lifespan: '5-8 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Pittas are solitary and secretive, often hopping on the forest floor in search of food.',
        breedingSeason: 'June to September'
    },
    {
        id: 260, 
        name: 'Black-hooded Oriole', 
        scientificName: 'Oriolus xanthornus ',
        image: BlackHoodedOriole,
        description: 'The Black-hooded Oriole is a striking yellow bird with a black hood on its head. Found throughout the Indian subcontinent, it inhabits both tropical and subtropical forests. Known for its loud and melodious calls, the Black-hooded Oriole is often seen in trees, feeding on fruits, insects, and small vertebrates. Its bright coloration and distinctive call make it easy to identify in the wild. The bird plays an important role in seed dispersal and is a common sight in gardens and forest edges.',
        habitat: 'Tropical and subtropical forests, gardens',
        diet: 'Fruits, insects, and small vertebrates',
        lifespan: '10-15 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-hooded Orioles are known for their loud calls and are often seen foraging in the canopy of trees.',
        breedingSeason: 'March to July'
    },
    {
        id: 261, 
        name: 'Eurasian Golden Oriole', 
        scientificName: 'Oriolus oriolus ',
        image: EurasianGoldenOriole,
        description: 'The Eurasian Golden Oriole is a vibrant yellow and black bird that is widely distributed across Europe and Asia. Known for its striking appearance, it is often found in wooded areas, parks, and gardens. This bird feeds on a diet of fruits, insects, and small vertebrates. The Eurasian Golden Oriole is an excellent flier and is often seen darting through the trees. It has a sweet, melodic call that is heard during the breeding season, making it a favorite among bird enthusiasts.',
        habitat: 'Wooded areas, parks, and gardens',
        diet: 'Fruits, insects, and small vertebrates',
        lifespan: '12-15 years',
        size: 'Length 25-27 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Eurasian Golden Orioles are often seen foraging in trees and are known for their melodious calls during the breeding season.',
        breedingSeason: 'April to August'
    },
    {
        id: 262, 
        name: 'Indian Golden Oriole', 
        scientificName: ' Oriolus kundoo',
        image: IndianGoldenOriole,
        description: 'The Indian Golden Oriole is a brightly colored bird with vivid yellow plumage and black wings. Native to the Indian subcontinent, this bird is often found in forests, parks, and gardens. Known for its melodious calls and its ability to blend into the canopy, the Indian Golden Oriole is a favorite among birdwatchers. It feeds on fruits, insects, and small vertebrates, and it plays an important role in seed dispersal. Its striking appearance makes it easy to identify during the breeding season.',
        habitat: 'Forests, parks, and gardens',
        diet: 'Fruits, insects, and small vertebrates',
        lifespan: '10-15 years',
        size: 'Length 25-27 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Golden Orioles are known for their bright yellow plumage and melodious calls, often heard during the breeding season.',
        breedingSeason: 'April to August'
    },
    {
        id: 263, 
        name: 'Small Minivet', 
        scientificName: 'Pericrocotus cinnamomeus ',
        image: SmallMinivet,
        description: 'The Small Minivet is a small, colorful bird found in forests across the Indian subcontinent. Males are characterized by their bright red and black plumage, while females have a more subdued yellow and green coloration. This bird feeds on insects, small fruits, and seeds. Small Minivets are often seen in flocks, flitting through the trees in search of food. Their bright colors and social behavior make them a popular sight for birdwatchers. They are active during the day and are often seen in the canopy.',
        habitat: 'Forests, open woodlands, and parks',
        diet: 'Insects, small fruits, and seeds',
        lifespan: '5-8 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Small Minivets are social birds, often seen in flocks feeding and moving through the canopy in search of food.',
        breedingSeason: 'May to August'
    },
    {
        id: 264, 
        name: 'Scarlet Minivet', 
        scientificName: 'Pericrocotus flammeus ',
        image: ScarletMinivet,
        description: 'The Scarlet Minivet is a small, brightly colored bird found in forests and woodlands of the Indian subcontinent. Males have vivid red and black plumage, while females have yellow and green coloration. These birds are often seen in flocks, foraging for insects and small fruits. Their vibrant colors and social behavior make them easy to spot in their natural habitats. Scarlet Minivets are active during the day and are often seen moving quickly through the trees in search of food.',
        habitat: 'Forests, open woodlands, and parks',
        diet: 'Insects, small fruits, and seeds',
        lifespan: '5-8 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Scarlet Minivets are social and often move in groups. They are known for their vibrant plumage and are active during daylight hours.',
        breedingSeason: 'May to August'
    },
    {
        id: 265, 
        name: 'Indian Cuckooshrike', 
        scientificName: 'Coracina macei ',
        image: IndianCuckooshrike,
        description: 'The Indian Cuckooshrike is a medium-sized bird with dark gray and white plumage. Found in a variety of habitats from forests to open woodlands, this bird feeds on insects and small vertebrates. Its distinctive black and white coloration, along with its hooked beak, make it easily recognizable. Indian Cuckooshrikes are solitary birds, often seen perched on branches while hunting for prey. Their sharp vision and quick reflexes help them catch their food efficiently.',
        habitat: 'Forests, open woodlands, and grasslands',
        diet: 'Insects and small vertebrates',
        lifespan: '8-12 years',
        size: 'Length 24-26 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Cuckooshrikes are solitary hunters, often perched on branches waiting for prey to pass by.',
        breedingSeason: 'June to September'
    },
    {
        id: 266, 
        name: 'Black-headed Cuckooshrike', 
        scientificName: ' Lalage melanoptera',
        image: BlackHeadedCuckooshrike,
        description: 'The Black-headed Cuckooshrike is a striking bird with a contrasting black head and grayish body. Found in open woodlands and forests, this bird is known for its hunting behavior, feeding on insects and small reptiles. Its sharp beak and keen eyesight make it a proficient hunter, often seen perched on high branches waiting for prey. The Black-headed Cuckooshrike is a solitary bird and is highly territorial, often defending its hunting grounds against other birds.',
        habitat: 'Open woodlands and forests',
        diet: 'Insects and small reptiles',
        lifespan: '8-12 years',
        size: 'Length 25-27 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-headed Cuckooshrikes are solitary hunters, often seen perched waiting for prey to appear.',
        breedingSeason: 'June to August'
    },
    {
        id: 267, 
        name: 'Ashy Woodswallow', 
        scientificName: ' Artamus fuscus',
        image: AshyWoodswallow,
        description: 'The Ashy Woodswallow is a medium-sized bird with ash-gray plumage and a black cap on its head. Found in forests and open woodlands, this bird feeds on insects, which it catches in mid-flight. Known for its acrobatic flight and swift movements, the Ashy Woodswallow is often seen darting through the air in search of food. It is a social bird, often seen in groups perched on exposed branches or wires. The Ashy Woodswallow is also known for its distinctive call.',
        habitat: 'Forests, open woodlands, and grasslands',
        diet: 'Insects',
        lifespan: '5-10 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Ashy Woodswallow is an acrobatic bird, often seen flying in groups and catching insects mid-flight.',
        breedingSeason: 'April to August'
    },
    {
        id: 268, 
        name: 'Bar-winged Flycatcher-shrike', 
        scientificName: 'Hemipus picatus ',
        image: BarWingedFlycatcherShrike,
        description: 'The Bar-winged Flycatcher-shrike is a small bird known for its distinctive bar-like markings on its wings. It is found in tropical forests and wooded areas across Asia. This bird feeds primarily on insects and is known for its agility in flight, often catching prey mid-air. The Bar-winged Flycatcher-shrike has a unique call and is often heard in its forest habitat. It is a solitary bird and can be challenging to spot due to its camouflage in the foliage.',
        habitat: 'Tropical forests and wooded areas',
        diet: 'Insects',
        lifespan: '5-8 years',
        size: 'Length 15-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Bar-winged Flycatcher-shrike is an agile bird, often seen catching insects mid-flight and is known for its distinctive call.',
        breedingSeason: 'May to September'
    },
    {
        id: 269, 
        name: 'Sri Lanka Woodshrike', 
        scientificName: 'Tephrodornis affinis ',
        image: SriLankaWoodshrike,
        description: 'The Sri Lanka Woodshrike is a small bird endemic to Sri Lanka, known for its dark plumage and sharp, hooked beak. This bird is commonly found in forests, where it hunts for insects and small vertebrates. The Sri Lanka Woodshrike is highly territorial, defending its territory from other birds. Its hunting technique involves perching quietly and waiting for prey to come into range before swooping down to catch it. It is a solitary bird and is often heard calling in the forest.',
        habitat: 'Forests of Sri Lanka',
        diet: 'Insects and small vertebrates',
        lifespan: '7-10 years',
        size: 'Length 20-22 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'The Sri Lanka Woodshrike is solitary and territorial, hunting quietly from a perch and swooping down to catch prey.',
        breedingSeason: 'May to August'
    },
    {
        id: 270, 
        name: 'Common Iora', 
        scientificName: 'Aegithina tiphia ',
        image: CommonIora,
        description: 'The Common Iora is a small, vibrant green bird with striking yellow and white plumage. It is found in forests, gardens, and open woodlands across South Asia. Known for its energetic behavior and loud calls, the Common Iora feeds on insects, small fruits, and nectar. It is a highly social bird, often seen in pairs or small groups. The Common Iora is known for its acrobatic movements, as it hangs from branches while foraging. It is a common sight in tropical and subtropical regions.',
        habitat: 'Forests, gardens, and open woodlands',
        diet: 'Insects, small fruits, and nectar',
        lifespan: '5-8 years',
        size: 'Length 15-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Common Iora is an active and social bird, often seen in pairs or small groups, hanging from branches while foraging.',
        breedingSeason: 'March to July'
    },
    {
        id: 271, 
        name: "Marshall's Iora", 
        scientificName: ' Aegithina nigrolutea',
        image: MarshallsIora,
        description: "The Marshall's Iora is a small, vibrant green and white bird found in Sri Lanka. Known for its beautiful singing, it is often seen flitting through the canopy of forests and woodland areas. Its vivid coloration helps it blend in with the lush green surroundings.",
        habitat: "Tropical and subtropical forests",
        diet: "Insects, small fruits",
        lifespan: "5-7 years",
        size: "Length 12-14 cm",
        conservationStatus: "Least Concern",
        behavior: "Marshall's Iora is highly active, frequently seen foraging in the mid to upper canopy for insects.",
        breedingSeason: "May to August"
    },
    {
        id: 272, 
        name: 'White-browed Fantail', 
        scientificName: 'Rhipidura aureola ',
        image: WhiteBrowedFantail,
        description: "The White-browed Fantail is a small, agile bird known for its distinctive fan-shaped tail. It is an excellent acrobat, often seen chasing insects through dense foliage. Its white eyebrow and blackish body make it easily recognizable.",
        habitat: "Forest edges, scrublands",
        diet: "Insects",
        lifespan: "3-5 years",
        size: "Length 15 cm",
        conservationStatus: "Least Concern",
        behavior: "It frequently flits from branch to branch, using its tail to help with balance.",
        breedingSeason: "April to August"
    },
    {
        id: 273, 
        name: 'Black Drongo', 
        scientificName: ' Dicrurus macrocercus',
        image: BlackDrongo,
        description: "The Black Drongo is a bold, aggressive bird known for its striking black plumage and sharp, forked tail. It is a master of aerial acrobatics, often chasing away larger birds and catching insects in flight.",
        habitat: "Open woodlands, grasslands",
        diet: "Insects, small birds",
        lifespan: "7-10 years",
        size: "Length 28 cm",
        conservationStatus: "Least Concern",
        behavior: "Known for its territorial nature, the Black Drongo is a frequent protector of its feeding grounds.",
        breedingSeason: "March to June"
    },
    {
        id: 274, 
        name: 'Ashy Drongo', 
        scientificName: 'Dicrurus leucophaeus ',
        image: AshyDrongo,
        description: "The Ashy Drongo is a medium-sized bird with ashy-grey plumage and a distinctive forked tail. It is often found hunting insects in mid-flight and is known for its territorial behavior.",
        habitat: "Lowland forests, mangroves",
        diet: "Insects, small vertebrates",
        lifespan: "5-7 years",
        size: "Length 24 cm",
        conservationStatus: "Least Concern",
        behavior: "Ashy Drongos are often seen alone or in pairs, hunting for insects from tree branches or in flight.",
        breedingSeason: "April to August"
    },
    {
        id: 275, 
        name: 'White-bellied Drongo', 
        scientificName: 'Dicrurus caerulescens ',
        image: WhiteBelliedDrongo,
        description: "The White-bellied Drongo is a striking black bird with a white belly and a long, forked tail. It is often seen perched in open woodlands, where it uses its sharp eyesight to catch insects in mid-air.",
        habitat: "Woodland, scrubby forests",
        diet: "Insects, small reptiles",
        lifespan: "6-8 years",
        size: "Length 30 cm",
        conservationStatus: "Least Concern",
        behavior: "It is known for its quick and precise aerial strikes to catch prey.",
        breedingSeason: "May to August"
    },
    {
        id: 276, 
        name: 'Greater Racquet-tailed Drongo', 
        scientificName: ' Dicrurus paradiseus',
        image: GreaterRacquetTailedDrongo,
        description: "The Greater Racquet-tailed Drongo is a large, striking bird with a long tail shaped like racquets. It is known for its loud calls and its ability to mimic other birds. It often hunts insects from tree branches.",
        habitat: "Tropical forests, mangroves",
        diet: "Insects, small birds",
        lifespan: "8-10 years",
        size: "Length 36 cm",
        conservationStatus: "Least Concern",
        behavior: "Greater Racquet-tailed Drongos are territorial and use their mimicry to confuse predators and competitors.",
        breedingSeason: "May to September"
    },
    {
        id: 277, 
        name: 'Sri Lanka Drongo', 
        scientificName: 'Dicrurus lophorinus ',
        image: SriLankaDrongo,
        description: "The Sri Lanka Drongo is an endemic bird species known for its dark plumage and aggressive nature. It is commonly seen hunting insects in the air or from tree branches in Sri Lanka’s forests.",
        habitat: "Tropical and subtropical forests",
        diet: "Insects, small reptiles",
        lifespan: "6-8 years",
        size: "Length 26 cm",
        conservationStatus: "Least Concern",
        behavior: "It is highly territorial and uses loud calls to protect its feeding grounds.",
        breedingSeason: "April to June"
    },
    {
        id: 278, 
        name: 'Black-naped Monarch', 
        scientificName: 'Hypothymis azurea ',
        image: BlackNapedMonarch,
        description: "The Black-naped Monarch is a small, elegant bird with a distinctive black patch on the back of its head. It is known for its attractive blue plumage and is often found in dense forest canopies.",
        habitat: "Tropical forests, dense woodlands",
        diet: "Insects, small fruits",
        lifespan: "4-6 years",
        size: "Length 12 cm",
        conservationStatus: "Least Concern",
        behavior: "It is a solitary and shy bird, often seen flitting among branches in search of food.",
        breedingSeason: "May to August"
    },
    {
        id: 279, 
        name: 'Indian Paradise-flycatcher', 
        scientificName: 'Terpsiphone paradisi ',
        image: IndianParadiseFlycatcher,
        description: "The Indian Paradise-flycatcher is a striking bird known for its long, flowing tail feathers. It is predominantly white, with an orange-brown back and a distinctive long tail that makes it stand out in its forest habitat.",
        habitat: "Dense forests, woodlands",
        diet: "Insects",
        lifespan: "5-7 years",
        size: "Length 30 cm",
        conservationStatus: "Least Concern",
        behavior: "It is an acrobatic flyer, hunting insects with precision in mid-air.",
        breedingSeason: "April to August"
    },
    {
        id: 280, 
        name: 'Brown Shrike', 
        scientificName: 'Lanius cristatus ',
        image: BrownShrike,
        description: "The Brown Shrike is a small, stout bird known for its brown and greyish plumage. It is often seen perched on a branch, waiting for insects or small prey to pass by before swooping down to catch them.",
        habitat: "Open woodlands, grasslands",
        diet: "Insects, small reptiles",
        lifespan: "4-6 years",
        size: "Length 20 cm",
        conservationStatus: "Least Concern",
        behavior: "Brown Shrikes are often solitary hunters, known for their methodical hunting style.",
        breedingSeason: "April to August"
    },
    {
        id: 281, 
        name: 'Long-tailed Shrike', 
        scientificName: ' Lanius schach',
        image: LongTailedShrike,
        description: "The Long-tailed Shrike is a bird known for its striking black and white plumage and long, tapering tail. It is often seen perched in open areas, hunting insects and small vertebrates.",
        habitat: "Open woodlands, grasslands",
        diet: "Insects, small vertebrates",
        lifespan: "6-8 years",
        size: "Length 23 cm",
        conservationStatus: "Least Concern",
        behavior: "It hunts from a perch, swooping down to catch prey with swift precision.",
        breedingSeason: "April to September"
    },
    {
        id: 282, 
        name: 'Sri Lanka Blue Magpie', 
        scientificName: 'Urocissa ornata ',
        image: SriLankaBlueMagpie,
        description: "The Sri Lanka Blue Magpie is an endemic species, easily recognized by its striking blue and orange plumage. It is a highly social bird, often seen in pairs or small groups, and known for its loud, musical calls.",
        habitat: "Tropical forests, montane regions",
        diet: "Insects, small fruits",
        lifespan: "5-7 years",
        size: "Length 38 cm",
        conservationStatus: "Endangered",
        behavior: "It is a highly social bird, often found in mixed-species flocks, and is active during the day.",
        breedingSeason: "April to September"
    },
    {
        id: 283, 
        name: 'House Crow', 
        scientificName: ' Corvus splendens',
        image: HouseCrow,
        description: "The House Crow is a highly adaptable bird that is commonly found in urban and rural areas. It is known for its black feathers and greyish body, and is often seen scavenging in human settlements.",
        habitat: "Urban areas, farmlands",
        diet: "Garbage, small animals, insects",
        lifespan: "5-8 years",
        size: "Length 44 cm",
        conservationStatus: "Least Concern",
        behavior: "House Crows are highly social and can often be seen in large groups foraging or interacting with other species.",
        breedingSeason: "March to August"
    },
    {
        id: 284, 
        name: 'Grey-headed Canary-flycatcher', 
        scientificName: 'Culicicapa ceylonensis ',
        image: GreyHeadedCanaryFlycatcher,
        description: "The Grey-headed Canary-flycatcher is a small, bright yellow bird with a grey head. It is often seen flitting through the undergrowth in search of insects.",
        habitat: "Forests, woodlands",
        diet: "Insects, small fruits",
        lifespan: "3-5 years",
        size: "Length 11 cm",
        conservationStatus: "Least Concern",
        behavior: "It is highly active, often seen catching insects in flight.",
        breedingSeason: "April to August"
    },
    {
        id: 285, 
        name: 'Ashy-crowned Sparrow-lark', 
        scientificName: 'Eremopterix griseus ',
        image: AshyCrownedSparrowLark,
        description: "The Ashy-crowned Sparrow-lark is a small bird with a distinctive grey crown and pale body. It is often found in dry grasslands and open fields, where it feeds on seeds and insects.",
        habitat: "Grasslands, scrublands",
        diet: "Seeds, insects",
        lifespan: "2-4 years",
        size: "Length 16 cm",
        conservationStatus: "Least Concern",
        behavior: "It is often seen hopping on the ground in search of food or perched on a low bush.",
        breedingSeason: "February to June"
    },
    {
        id: 286, 
        name: 'Jerdon\'s Bushlark', 
        scientificName: ' ',
        image: JerdonsBushlark,
        description: 'Jerdon\'s Bushlark is a small, sparrow-like bird found in dry scrublands and grasslands. It has a streaked brown appearance with a distinctive long tail and a slightly curved bill. This bird is known for its melodious song, which is often heard during its breeding season.',
        habitat: 'Dry scrublands, grasslands',
        diet: 'Insects, seeds',
        lifespan: '4-5 years',
        size: 'Length 15-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jerdon\'s Bushlark is known for its territorial song and often perches on tall vegetation to sing.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 287, 
        name: 'Oriental Skylark', 
        scientificName: 'Mirafra affinis ',
        image: OrientalSkylark,
        description: 'The Oriental Skylark is a small, brownish bird found in grasslands and cultivated fields. It has a distinctive crest and a beautiful, melodic song that can be heard during the breeding season. These birds are known for their impressive flight displays.',
        habitat: 'Grasslands, cultivated fields',
        diet: 'Insects, seeds',
        lifespan: '6-7 years',
        size: 'Length 17-19 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Oriental Skylark performs aerial displays during mating season, singing while flying high in the sky.',
        breedingSeason: 'March to June'
    },
    
    {
        id: 288, 
        name: 'Zitting Cisticola', 
        scientificName: 'Alauda gulgula ',
        image: ZittingCisticola,
        description: 'The Zitting Cisticola is a small warbler-like bird with a distinctive "zitting" call. It is often found in tall grasslands, where it nests close to the ground. Its diet consists of insects and seeds, and it is known for its aggressive territorial behavior.',
        habitat: 'Tall grasslands, wetlands',
        diet: 'Insects, seeds',
        lifespan: '3-5 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Zitting Cisticolas are known for their territorial calls, which they use to defend their nesting sites.',
        breedingSeason: 'April to September'
    },
    
    {
        id: 289, 
        name: 'Grey-breasted Prinia', 
        scientificName: 'Cisticola juncidis ',
        image: GreyBreastedPrinia,
        description: 'The Grey-breasted Prinia is a small, active bird with a greyish-brown body and a long tail. It is often found in shrubby areas and grasslands, where it feeds on insects. Its lively behavior and constant movement make it easily recognizable.',
        habitat: 'Shrubby areas, grasslands',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 11-13 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Grey-breasted Prinias are constantly on the move, hopping through grass and shrubs in search of insects.',
        breedingSeason: 'May to August'
    },
    
    {
        id: 290, 
        name: 'Jungle Prinia', 
        scientificName: ' Prinia hodgsonii',
        image: JunglePrinia,
        description: 'The Jungle Prinia is a small, insectivorous bird commonly found in dense forests and thickets. It has a brownish-grey appearance with a slightly downturned bill, which helps it catch small insects. Its call is a soft, repetitive chirp.',
        habitat: 'Dense forests, thickets',
        diet: 'Insects, small invertebrates',
        lifespan: '3-5 years',
        size: 'Length 11-13 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Jungle Prinias are known for their secretive behavior, often hiding in dense vegetation while foraging.',
        breedingSeason: 'May to September'
    },
    
    {
        id: 291, 
        name: 'Ashy Prinia', 
        scientificName: 'Prinia sylvatica ',
        image: AshyPrinia,
        description: 'The Ashy Prinia is a small bird with a greyish-brown plumage and a slightly upturned bill. It inhabits grasslands and shrubby areas, where it forages for insects. The bird is often seen darting through vegetation while hunting for food.',
        habitat: 'Grasslands, shrubby areas',
        diet: 'Insects, small invertebrates',
        lifespan: '2-4 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Ashy Prinias are active foragers, often seen darting through grass and low shrubs in search of prey.',
        breedingSeason: 'April to August'
    },
    
    {
        id: 292, 
        name: 'Plain Prinia', 
        scientificName: 'Prinia socialis ',
        image: PlainPrinia,
        description: 'The Plain Prinia is a small bird with unadorned brown plumage and a distinctive long tail. It is commonly found in open grasslands and scrubby areas, where it feeds on insects and small invertebrates. Its call is a repetitive "tsik-tsik" sound.',
        habitat: 'Grasslands, scrubby areas',
        diet: 'Insects, small invertebrates',
        lifespan: '2-4 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Plain Prinias are often seen darting through grass and vegetation while foraging for insects.',
        breedingSeason: 'April to July'
    },
    
    {
        id: 293, 
        name: 'Common Tailorbird', 
        scientificName: 'Prinia inornata ',
        image: CommonTailorbird,
        description: 'The Common Tailorbird is a small bird known for its distinctive behavior of stitching leaves together to create a nest. It is found in a variety of habitats, including urban gardens and forests, and feeds on insects and spiders.',
        habitat: 'Urban gardens, forests',
        diet: 'Insects, spiders',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Common Tailorbirds are famous for their ability to stitch leaves together using their beak, creating a unique and secure nest.',
        breedingSeason: 'March to August'
    },
    
    {
        id: 294, 
        name: 'Booted Warbler', 
        scientificName: 'Orthotomus sutorius ',
        image: BootedWarbler,
        description: 'The Booted Warbler is a small, slender bird with pale brown plumage and a distinctive white ring around its eyes. It inhabits grassy areas and open woodlands, where it feeds on insects and small invertebrates. It has a soft, melodic song.',
        habitat: 'Grassy areas, open woodlands',
        diet: 'Insects, small invertebrates',
        lifespan: '3-5 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Booted Warblers are often seen perched on low shrubs or grass stems, where they hunt for insects.',
        breedingSeason: 'April to August'
    },
    {
        id: 295,
        name: 'Sykes\'s Warbler',
        scientificName: ' Iduna caligata',
        image: SykessWarbler,
        description: 'Sykes\'s Warbler is a small, active bird with a distinctive greenish-brown coloration. It is known for its high-pitched song and frequent flitting between dense vegetation. These birds are commonly found in open scrubland, grasslands, and forests, where they hunt for insects and small invertebrates. Their behavior includes hopping on low branches or grass, searching for food. They often prefer areas with dense undergrowth and are commonly seen in southern Asia.',
        habitat: 'Open scrubland, grasslands, and forests',
        diet: 'Insects, small invertebrates',
        lifespan: '3-5 years',
        size: 'Length 11-13 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Sykes\'s Warbler is an active forager, often seen hopping and flitting in search of insects.',
        breedingSeason: 'April to July'
    },
    {
        id: 296,
        name: 'Blyth\'s Reed-warbler',
        scientificName: 'Iduna rama ',
        image: BlythsReedWarbler,
        description: 'Blyth\'s Reed-warbler is a small, slender bird with brownish plumage and a pale underside. Known for its gentle, melodic song, this bird is commonly found in reed beds and wetlands, where it feeds on insects and small invertebrates. Blyth\'s Reed-warbler is an elusive species, often hiding within dense vegetation. It migrates over long distances and can be seen in a variety of habitats across Asia during its migration periods.',
        habitat: 'Reed beds, wetlands',
        diet: 'Insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This warbler is known for its secretive nature, often hiding in dense vegetation and singing softly.',
        breedingSeason: 'May to August'
    },
    {
        id: 297,
        name: 'Clamorous Reed-warbler',
        scientificName: ' Acrocephalus dumetorum',
        image: ClamorousReedWarbler,
        description: 'The Clamorous Reed-warbler is a medium-sized, active bird with a slightly streaked brown plumage and a sharp, loud call. It is typically found in reed beds and wetlands, where it feeds on insects and small invertebrates. These birds are known for their aggressive behavior when defending territory, especially during the breeding season. The Clamorous Reed-warbler is a migratory species, often seen during migration in South Asia, and is recognized for its distinct vocalizations.',
        habitat: 'Reed beds, wetlands',
        diet: 'Insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 14-16 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This bird is highly territorial, and its loud, clamorous call can be heard from a distance.',
        breedingSeason: 'April to August'
    },
    {
        id: 298,
        name: 'Pallas\'s Grasshopper-warbler',
        scientificName: 'Acrocephalus stentoreus ',
        image: PallassGrasshopperWarbler,
        description: 'Pallas\'s Grasshopper-warbler is a small, brown and greenish bird with a cryptic appearance. Its song is a continuous, grasshopper-like trill, which helps it blend into its grassland habitat. Found in open grassy areas, the bird is an insectivore, preying on grasshoppers and other insects. Despite its small size, it is a hardy species, often living in harsh environments. This bird migrates during winter and is seen in parts of Asia and Europe.',
        habitat: 'Grasslands, open fields',
        diet: 'Insects, grasshoppers',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'It spends most of its time in tall grasses, feeding on insects and calling out with a sharp, continuous trill.',
        breedingSeason: 'May to July'
    },
    {
        id: 299,
        name: 'Lanceolated Warbler',
        scientificName: 'Helopsaltes certhiola ',
        image: LanceolatedWarbler,
        description: 'The Lanceolated Warbler is a small, inconspicuous bird with a streaky brown appearance, often blending into its grassy surroundings. It is known for its secretive behavior, usually hiding in tall grass and vegetation. This warbler feeds primarily on insects and small invertebrates. During the breeding season, it becomes more active, singing from concealed locations. The species migrates over long distances and is commonly found in wetlands, grasslands, and marshes.',
        habitat: 'Grasslands, wetlands, marshes',
        diet: 'Insects, small invertebrates',
        lifespan: '5-8 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Lanceolated Warbler is shy and elusive, often spending time concealed in tall vegetation.',
        breedingSeason: 'May to August'
    },
    {
        id: 300,
        name: 'Sri Lanka Warbler',
        scientificName: ' Locustella lanceolata',
        image: SriLankaWarbler,
        description: 'The Sri Lanka Warbler is a small, endemic species found exclusively in the forests of Sri Lanka. It is characterized by its brownish-grey body and white underparts. The bird is known for its high-pitched, melodious song, which it sings from dense undergrowth. It primarily feeds on insects and small invertebrates, foraging through leaves and branches. This species is of conservation concern due to its restricted range and habitat loss in Sri Lanka’s forests.',
        habitat: 'Dense forests, undergrowth',
        diet: 'Insects, small invertebrates',
        lifespan: '3-5 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Endangered',
        behavior: 'This warbler is typically quiet and elusive, foraging in dense undergrowth and singing softly from concealed spots.',
        breedingSeason: 'March to July'
    },
    {
        id: 301,
        name: 'Sri Lanka Swallow',
        scientificName: 'Elaphrornis palliseri ',
        image: SriLankaSwallow,
        description: 'The Sri Lanka Swallow is a small, vibrant bird native to the island of Sri Lanka. It has a striking blue and orange plumage and is easily recognizable in flight. These birds are insectivores, feeding on a wide range of insects caught mid-air. Sri Lanka Swallows are often seen near water bodies or open fields, where they swoop and glide gracefully. They are known for their migratory habits, flying across Sri Lanka during breeding season.',
        habitat: 'Open fields, water bodies',
        diet: 'Insects',
        lifespan: '4-6 years',
        size: 'Length 15-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These swallows are known for their graceful flight patterns, often seen hunting insects mid-air.',
        breedingSeason: 'November to February'
    },
    {
        id: 302,
        name: 'House Swallow',
        scientificName: 'Hirundo javanica ',
        image: HouseSwallow,
        description: 'The House Swallow is a small, agile bird with a dark blue back and a light underbelly. It is commonly found near human settlements, where it builds nests under roofs and eaves. House Swallows are insectivores, catching insects in flight. They are highly social and often seen in groups, flying low over fields and water bodies. This species migrates seasonally, and is known for its long-distance migration across continents.',
        habitat: 'Human settlements, open areas',
        diet: 'Insects',
        lifespan: '3-5 years',
        size: 'Length 16-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'House Swallows are highly social birds, often found in groups hunting insects and building nests in urban environments.',
        breedingSeason: 'April to August'
    },
    {
        id: 303,
        name: 'Barn Swallow',
        scientificName: 'Hirundo rustica ',
        image: BarnSwallow,
        description: 'The Barn Swallow is a familiar bird with a long, forked tail and sleek blue plumage. It is known for its acrobatic flight and its tendency to build nests in barns and other man-made structures. Barn Swallows feed on insects, catching them mid-flight. These birds are highly migratory and travel vast distances between breeding and wintering grounds. They are easily spotted flying low over fields and water bodies during the summer months.',
        habitat: 'Barns, open fields, water bodies',
        diet: 'Insects',
        lifespan: '4-6 years',
        size: 'Length 17-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Barn Swallows are agile flyers, often seen swooping and darting in search of insects.',
        breedingSeason: 'April to August'
    },
    {
        id: 304,
        name: 'Square-tailed Bulbul',
        scientificName: ' Hypsipetes ganeesa',
        image: SquareTailedBulbul,
        description: 'The Square-tailed Bulbul is a medium-sized bird with a distinctive square-shaped tail and olive-green plumage. It is commonly found in forests and woodlands, where it feeds on fruits, insects, and small invertebrates. This bird is known for its territorial nature, often singing loudly to defend its area. Square-tailed Bulbuls are highly social and can often be seen in pairs or small groups, hopping through the undergrowth in search of food.',
        habitat: 'Forests, woodlands',
        diet: 'Fruits, insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 22-24 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Square-tailed Bulbul is often seen foraging in pairs or small groups, defending its territory with loud calls.',
        breedingSeason: 'April to August'
    },
    {
        id: 305,
        name: 'Black-capped Bulbul',
        scientificName: 'Rubigula melanictera ',
        image: BlackCappedBulbul,
        description: 'The Black-capped Bulbul is a medium-sized bird with distinct black plumage on its head, contrasting with the pale yellow belly. Found in a variety of habitats including forests and gardens, this species is known for its melodious song. It primarily feeds on fruits, insects, and small invertebrates. These birds are often seen foraging in pairs or small groups, hopping through foliage and branches. Their territorial nature is displayed during the breeding season when they defend their nests with vigorous calls.',
        habitat: 'Forests, gardens',
        diet: 'Fruits, insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-capped Bulbuls are known for their energetic foraging and melodious singing during the breeding season.',
        breedingSeason: 'April to June'
    },
    {
        id: 306,
        name: 'Red-vented Bulbul',
        scientificName: 'Pycnonotus cafer ',
        image: RedVentedBulbul,
        description: 'The Red-vented Bulbul is a small, medium-sized bird with a striking red patch on its vent and a dark, spiky crest. This species is commonly found in urban areas, gardens, and woodlands. It feeds on a diet of fruits, insects, and small invertebrates. These birds are vocal and often communicate with a variety of chirps and whistles. Red-vented Bulbuls are known for their adaptability and can live in diverse environments, including semi-arid regions and near water bodies.',
        habitat: 'Urban areas, gardens, woodlands',
        diet: 'Fruits, insects, small invertebrates',
        lifespan: '6-8 years',
        size: 'Length 20-22 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These bulbuls are social and can often be found in groups, communicating with loud calls and whistles.',
        breedingSeason: 'April to July'
    },
    {
        id: 307,
        name: 'Yellow-eared Bulbul',
        scientificName: 'Pycnonotus penicillatus ',
        image: YellowEaredBulbul,
        description: 'The Yellow-eared Bulbul is a striking species with bright yellow patches around its ears and a dark, olive-brown body. It is typically found in dense forests and plantations, where it feeds primarily on fruits and small invertebrates. Known for its melodious calls, this species is often heard before it is seen. These birds are primarily arboreal, hopping between branches in search of food and nesting in trees. Their songs are used to attract mates and establish territory.',
        habitat: 'Dense forests, plantations',
        diet: 'Fruits, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Yellow-eared Bulbuls are known for their loud, melodic calls and agility in navigating through dense foliage.',
        breedingSeason: 'May to August'
    },
    {
        id: 308,
        name: 'White-browed Bulbul',
        scientificName: 'Pycnonotus luteolus ',
        image: WhiteBrowedBulbul,
        description: 'The White-browed Bulbul is a small bird with distinctive white markings above its eyes, contrasted by a dark brown body and yellow belly. This species is found in forests, gardens, and grasslands, where it primarily feeds on fruits, insects, and nectar. Its melodious song is often heard during the breeding season. White-browed Bulbuls are known for their territorial behavior, often defending their nesting areas from intruders. They are also active foragers, frequently hopping between branches in search of food.',
        habitat: 'Forests, gardens, grasslands',
        diet: 'Fruits, insects, nectar',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-browed Bulbuls are territorial and vocal, often defending their nests from other birds.',
        breedingSeason: 'April to July'
    },
    {
        id: 309,
        name: 'Yellow-browed Bulbul',
        scientificName: ' Acritillas indica',
        image: YellowBrowedBulbul,
        description: 'The Yellow-browed Bulbul is a small, vibrant bird with a yellow streak across its brow, contrasting with its olive-green body. This species is commonly found in dense forests and bamboo groves, where it feeds on insects, fruits, and nectar. Known for its energetic and swift movements, the Yellow-browed Bulbul is often seen hopping through undergrowth and branches in search of food. It is highly territorial during breeding season, often singing loudly to defend its space and attract mates.',
        habitat: 'Dense forests, bamboo groves',
        diet: 'Insects, fruits, nectar',
        lifespan: '4-6 years',
        size: 'Length 16-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'This warbler is agile and energetic, known for its swift movements and territorial calls.',
        breedingSeason: 'April to July'
    },
    {
        id: 310,
        name: 'Green Warbler',
        scientificName: ' Phylloscopus nitidus',
        image: GreenWarbler,
        description: 'The Green Warbler is a small, vibrant bird with bright green plumage and a slightly streaked belly. It inhabits forests, woodland edges, and areas with dense vegetation. This species primarily feeds on insects and small invertebrates, which it catches while flitting through the foliage. Green Warblers are known for their agility and quick movements. They are also highly territorial and vocal during the breeding season, using their calls to establish territory and attract mates. This warbler is often seen in pairs during breeding.',
        habitat: 'Forests, woodland edges',
        diet: 'Insects, small invertebrates',
        lifespan: '3-5 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Green Warblers are highly agile, flitting through trees in search of insects and using sharp calls to establish territory.',
        breedingSeason: 'May to July'
    },
    {
        id: 311,
        name: 'Greenish Warbler',
        scientificName: 'Phylloscopus trochiloides ',
        image: GreenishWarbler,
        description: 'The Greenish Warbler is a small, slim bird with olive-green plumage and a pale underbelly. It is primarily found in dense forests and thickets, where it feeds on insects and small invertebrates. Known for its distinctive high-pitched song, this species is often heard before it is seen. Greenish Warblers are solitary birds and prefer to remain hidden in foliage, only emerging to forage. Their diet consists mainly of small invertebrates, which they catch by flitting through branches.',
        habitat: 'Dense forests, thickets',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Greenish Warblers are often solitary and elusive, foraging quietly in dense vegetation and communicating with high-pitched calls.',
        breedingSeason: 'May to August'
    },
    {
        id: 312,
        name: 'Large-billed Leaf-warbler',
        scientificName: 'Phylloscopus magnirostris ',
        image: LargeBilledLeafWarbler,
        description: 'The Large-billed Leaf-warbler is a small bird with a slightly bulky build and a pale greenish-brown body. It is found in dense forests and bamboo groves, where it feeds on insects, especially small caterpillars and larvae. The species is known for its distinctive, sharp calls and its ability to blend into its surroundings. The Large-billed Leaf-warbler often stays hidden among the leaves and branches, only emerging to forage. It is a migratory bird, moving to warmer regions during winter.',
        habitat: 'Dense forests, bamboo groves',
        diet: 'Insects, small caterpillars, larvae',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Large-billed Leaf-warblers are elusive, blending in with their surroundings and staying hidden while foraging for insects.',
        breedingSeason: 'April to July'
    },
    {
        id: 313,
        name: 'Lesser Whitethroat',
        scientificName: 'Curruca curruca ',
        image: LesserWhitethroat,
        description: 'The Lesser Whitethroat is a small, agile bird with a pale grey head and a brownish body. This species is commonly found in scrublands, open woodlands, and grasslands, where it feeds on insects, berries, and small fruits. Lesser Whitethroats are known for their distinctive, melodious calls, which they use to establish territory and communicate with others. They are highly territorial during the breeding season and are often seen flitting through dense vegetation in search of food.',
        habitat: 'Scrublands, open woodlands, grasslands',
        diet: 'Insects, berries, small fruits',
        lifespan: '4-6 years',
        size: 'Length 13-15 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Lesser Whitethroats are highly territorial, known for their melodic calls and swift movements through vegetation.',
        breedingSeason: 'May to August'
    },
    {
        id: 314,
        name: 'Yellow-eyed Babbler',
        scientificName: 'Chrysomma sinense ',
        image: YellowEyedBabbler,
        description: 'The Yellow-eyed Babbler is a small bird with a distinctive yellow eye ring and streaked brown feathers. It is commonly found in grasslands, scrub forests, and open woodland areas. This species feeds on insects, small fruits, and seeds. The Yellow-eyed Babbler is highly social and often seen in small groups, foraging together in the underbrush. Its behavior is characterized by active hopping, and it is known for its distinctive chirping calls used to communicate within the group.',
        habitat: 'Grasslands, scrub forests, open woodlands',
        diet: 'Insects, small fruits, seeds',
        lifespan: '4-6 years',
        size: 'Length 17-19 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Yellow-eyed Babblers are social birds often found in small groups, hopping through grasslands and scrub forests in search of food.',
        breedingSeason: 'May to August'
    },
    {
        id: 315,
        name: 'Sri Lanka White-eye',
        scientificName: 'Zosterops ceylonensis ',
        image: SriLankaWhiteEye,
        description: 'The Sri Lanka White-eye is a small, vibrant bird with a distinct white ring around its eye, contrasting with its greenish-yellow body. Native to Sri Lanka, this species inhabits forests and woodland areas, where it feeds on fruits, nectar, and insects. Sri Lanka White-eyes are social birds, often seen in flocks. They are known for their high-pitched calls and active foraging behavior, flitting through the canopy and searching for food in flowers and foliage.',
        habitat: 'Forests, woodlands',
        diet: 'Fruits, nectar, insects',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Endangered',
        behavior: 'Sri Lanka White-eyes are social birds, often seen in groups, using their calls to communicate while foraging.',
        breedingSeason: 'May to July'
    },
    {
        id: 316,
        name: 'Indian White-eye',
        scientificName: 'Zosterops palpebrosus ',
        image: IndianWhiteEye,
        description: 'The Indian White-eye is a small, lively bird with a distinctive white ring around its eye, which stands out against its greenish-yellow plumage. This species is found across India in a variety of habitats, including forests, gardens, and scrublands. Indian White-eyes primarily feed on nectar, small fruits, and insects. They are social birds and can often be found in small flocks, actively foraging and calling out to each other. Their sharp, melodic calls are a common feature of their habitat.',
        habitat: 'Forests, gardens, scrublands',
        diet: 'Nectar, small fruits, insects',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian White-eyes are highly social birds known for their active foraging and distinctive, high-pitched calls.',
        breedingSeason: 'April to July'
    },
    {
        id: 317,
        name: 'Sri Lanka Scimitar-babbler',
        scientificName: 'Pomatorhinus melanurus ',
        image: SriLankaScimitarBabbler,
        description: 'The Sri Lanka Scimitar-babbler is a medium-sized bird with a long, curved beak and dark brown plumage. Native to Sri Lanka, this species inhabits dense forests and is primarily insectivorous, feeding on small invertebrates and insects found in the leaf litter. Sri Lanka Scimitar-babblers are elusive and difficult to spot due to their secretive nature. Their calls are distinctive and often heard before they are seen, as they move through thick vegetation.',
        habitat: 'Dense forests',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Endangered',
        behavior: 'Sri Lanka Scimitar-babblers are secretive birds, often heard rather than seen, using their curved bills to forage through leaf litter.',
        breedingSeason: 'May to August'
    },
    {
        id: 318,
        name: 'Tawny-bellied Babbler',
        scientificName: 'Dumetia hyperythra ',
        image: TawnyBelliedBabbler,
        description: 'The Tawny-bellied Babbler is a small bird with a distinctive tawny-colored belly and brownish-grey body. Found in grasslands and scrub forests, this species feeds on insects, small fruits, and seeds. Tawny-bellied Babblers are often seen hopping through the undergrowth, searching for food. They are social birds and often travel in small groups. During the breeding season, they are known for their loud and aggressive calls, which they use to defend their territories from other birds.',
        habitat: 'Grasslands, scrub forests',
        diet: 'Insects, small fruits, seeds',
        lifespan: '4-6 years',
        size: 'Length 16-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Tawny-bellied Babblers are social and often found in groups, using loud calls to defend their territories.',
        breedingSeason: 'April to July'
    },
    {
        id: 319,
        name: 'Dark-fronted Babbler',
        scientificName: 'Dumetia atriceps ',
        image: DarkFrontedBabbler,
        description: 'The Dark-fronted Babbler is a small bird with a dark brown plumage on its front and a pale, brownish-grey body. This species is found in dense forests and grasslands, where it feeds on insects, small fruits, and seeds. Known for its secretive behavior, the Dark-fronted Babbler is rarely seen but can often be heard calling from within dense vegetation. Its diet consists primarily of insects and other small invertebrates, which it forages for among the leaves and undergrowth.',
        habitat: 'Dense forests, grasslands',
        diet: 'Insects, small fruits, seeds',
        lifespan: '4-6 years',
        size: 'Length 14-16 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Dark-fronted Babblers are secretive birds, often heard but rarely seen, feeding on insects in dense vegetation.',
        breedingSeason: 'May to August'
    },
    {
        id: 320, 
        name: 'Brown-capped Babbler', 
        scientificName: ' Pellorneum fuscocapillus',
        image: BrownCappedBabbler, 
        description: 'The Brown-capped Babbler is a small bird known for its distinctive brown cap and muted, brownish-grey body. Found in dense forests, it is an insectivorous species, foraging in leaf litter and dense undergrowth for small invertebrates. Its cryptic plumage allows it to blend well into its surroundings, making it a challenging bird to spot. The Brown-capped Babbler is known for its secretive behavior, often heard rather than seen, and its calls are typically soft and continuous.', 
        habitat: 'Dense forests', 
        diet: 'Insects, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 18-20 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Brown-capped Babblers are secretive, often found foraging through leaf litter and dense vegetation in search of food.',
        breedingSeason: 'April to August'
    },
    {
        id: 321, 
        name: 'Ashy-fronted Babbler', 
        scientificName: ' Argya cinereifrons',
        image: AshyFrontedBabbler, 
        description: 'The Ashy-fronted Babbler is a medium-sized bird characterized by its ashy-grey plumage on the front, contrasted with darker brown wings and back. Native to Sri Lanka, it is commonly found in forested areas, where it feeds on insects and small fruits. This species is known for its high-pitched, chattering calls and its tendency to move through the undergrowth in small groups. Its secretive nature makes it difficult to spot, although its calls can often be heard in the forest.', 
        habitat: 'Forests', 
        diet: 'Insects, small fruits', 
        lifespan: '4-6 years', 
        size: 'Length 22-25 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Ashy-fronted Babblers are social birds, often seen in small groups, foraging actively and using high-pitched calls.',
        breedingSeason: 'May to August'
    },
    {
        id: 322, 
        name: 'Orange-billed Babbler', 
        scientificName: ' Argya rufescens',
        image: OrangeBilledBabbler, 
        description: 'The Orange-billed Babbler is a small, brownish bird with a striking orange bill that stands out against its dull plumage. This species is primarily found in dense forests, where it feeds on insects and small fruits. It is highly social and often forages in groups, using loud calls to communicate. The Orange-billed Babbler is known for its secretive behavior, spending most of its time in dense vegetation, making it difficult to observe despite its presence in common habitats.', 
        habitat: 'Dense forests', 
        diet: 'Insects, small fruits', 
        lifespan: '4-6 years', 
        size: 'Length 18-20 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Orange-billed Babblers are social birds that forage in groups, communicating with loud calls and remaining hidden in dense vegetation.',
        breedingSeason: 'April to July'
    },
    {
        id: 323, 
        name: 'Yellow-billed Babbler',
        scientificName: 'Argya affinis ', 
        image: YellowBilledBabbler, 
        description: 'The Yellow-billed Babbler is a small bird with a distinctive yellow bill and brownish plumage. Commonly found in Sri Lanka’s forests and grasslands, it is an insectivorous species, foraging for small invertebrates and seeds. Yellow-billed Babblers are social birds, often seen in small flocks, moving through the undergrowth in search of food. They are known for their loud calls, which they use to communicate with other members of their group. This species is widespread and adaptable.', 
        habitat: 'Grasslands, forests', 
        diet: 'Insects, seeds', 
        lifespan: '4-6 years', 
        size: 'Length 16-18 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Yellow-billed Babblers are social birds often seen in small flocks, using loud calls to communicate while foraging.',
        breedingSeason: 'May to August'
    },
    {
        id: 324, 
        name: 'Velvet-fronted Nuthatch', 
        scientificName: 'Sitta frontalis ',
        image: VelvetFrontedNuthatch, 
        description: 'The Velvet-fronted Nuthatch is a striking bird with a blue-grey body and a velvet-like black front. Native to Sri Lanka, this species is typically found in moist forests, where it feeds on insects and small invertebrates. Known for its climbing abilities, it is often seen foraging on tree trunks and branches, using its strong bill to extract prey. Velvet-fronted Nuthatches are territorial and can be heard calling loudly from their perches, often defending their feeding territories from other birds.', 
        habitat: 'Moist forests', 
        diet: 'Insects, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 14-16 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Velvet-fronted Nuthatches are highly territorial birds that climb tree trunks in search of food and defend their feeding grounds aggressively.',
        breedingSeason: 'March to June'
    },
    {
        id: 325, 
        name: 'Rosy Starling', 
        scientificName: 'Pastor roseus ',
        image: RosyStarling, 
        description: 'The Rosy Starling is a medium-sized bird with striking pink and white plumage during the breeding season. It is a migratory species, commonly found in open grasslands and agricultural fields. Rosy Starlings feed on insects, fruits, and seeds, and are often seen in large flocks during migration. Their loud, chattering calls and coordinated flight patterns are characteristic features of their behavior. This species is known for its vibrant coloration, which makes it a favorite among birdwatchers during its breeding season.', 
        habitat: 'Open grasslands, agricultural fields', 
        diet: 'Insects, fruits, seeds', 
        lifespan: '5-7 years', 
        size: 'Length 22-24 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Rosy Starlings are social birds, often migrating in large flocks and using loud calls to communicate during flights.',
        breedingSeason: 'May to July'
    },
    {
        id: 326, 
        name: 'White-faced Starling',
        scientificName: ' Sturnornis albofrontatus', 
        image: WhiteFacedStarling, 
        description: 'The White-faced Starling is a small to medium-sized bird with a distinctive white face and a glossy black body. This species is native to Sri Lanka, where it inhabits forests and urban areas. White-faced Starlings are omnivorous, feeding on insects, fruits, and human food scraps. They are highly adaptable and can thrive in a variety of habitats, from dense forests to urban areas. Known for their chattering calls and active foraging, they are often seen in pairs or small groups.', 
        habitat: 'Forests, urban areas', 
        diet: 'Insects, fruits, scraps', 
        lifespan: '4-6 years', 
        size: 'Length 22-24 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'White-faced Starlings are social and adaptable birds, often foraging in pairs or groups, and known for their chattering calls.',
        breedingSeason: 'March to May'
    },
    {
        id: 327, 
        name: 'Brahminy Starling', 
        scientificName: ' Sturnia pagodarum',
        image: BrahminyStarling, 
        description: 'The Brahminy Starling is a small bird with a pale brown body and a distinctive black crest on its head. Found across India and Sri Lanka, this species prefers open woodlands and cultivated fields. Brahminy Starlings are omnivorous, feeding on a diet of insects, fruits, and seeds. They are social birds, often seen in small flocks, and are known for their loud calls and active foraging behavior. Their glossy plumage and distinct calls make them easily recognizable in their habitats.', 
        habitat: 'Open woodlands, fields', 
        diet: 'Insects, fruits, seeds', 
        lifespan: '4-6 years', 
        size: 'Length 20-22 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Brahminy Starlings are social birds often seen in small groups, foraging actively and communicating with loud calls.',
        breedingSeason: 'March to May'
    },
    {
        id: 328, 
        name: 'Common Myna', 
        scientificName: ' Acridotheres tristis',
        image: CommonMyna, 
        description: 'The Common Myna is a medium-sized bird with a brown body and striking yellow eye patches. It is one of the most widely distributed and adaptable species in Sri Lanka and India. Common Mynas are omnivorous, feeding on a variety of foods including insects, fruits, and human food scraps. They are social and highly vocal, often seen in pairs or small groups. Mynas are known for their aggressive territorial behavior and ability to thrive in urban and rural environments.', 
        habitat: 'Urban areas, agricultural fields', 
        diet: 'Insects, fruits, scraps', 
        lifespan: '4-6 years', 
        size: 'Length 23-26 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Common Mynas are highly adaptable birds, often found in pairs or small groups and using loud calls to communicate.',
        breedingSeason: 'March to August'
    },
    {
        id: 329, 
        name: 'Sri Lanka Hill Myna',
        scientificName: 'Gracula ptilogenys ', 
        image: SriLankaHillMyna, 
        description: 'The Sri Lanka Hill Myna is a striking bird with glossy black feathers and bright orange wattles around its eyes. Native to Sri Lanka, it is commonly found in forests and highland areas. This species is known for its remarkable ability to mimic human speech and other sounds. Sri Lanka Hill Mynas are omnivorous, feeding on fruits, seeds, and insects. They are social birds, often seen in pairs or small groups, and are prized for their vocal abilities.', 
        habitat: 'Forests, highland areas', 
        diet: 'Fruits, seeds, insects', 
        lifespan: '5-7 years', 
        size: 'Length 35-40 cm', 
        conservationStatus: 'Vulnerable', 
        behavior: 'Sri Lanka Hill Mynas are famous for their ability to mimic sounds, and are often found in pairs or small groups.',
        breedingSeason: 'March to July'
    },
    {
        id: 330, 
        name: 'Southern Hill Myna', 
        scientificName: 'Gracula indica ',
        image: SouthernHillMyna, 
        description: 'The Southern Hill Myna is a striking bird with a bright yellow-orange wattle around its eyes and black plumage. It is a social species, found in forests and hilly areas of Sri Lanka. Southern Hill Mynas are omnivorous, feeding on fruits, seeds, and insects. They are known for their excellent mimicking abilities, often copying human speech and other environmental sounds. These birds are highly sought after for their vocal skills, often kept as pets due to their ability to mimic speech.', 
        habitat: 'Forests, hilly areas', 
        diet: 'Fruits, seeds, insects', 
        lifespan: '5-7 years', 
        size: 'Length 35-38 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Southern Hill Mynas are social birds, often seen in pairs, and are famous for their ability to mimic sounds and human speech.',
        breedingSeason: 'March to July'
    },
    {
        id: 331, 
        name: "White's Thrush", 
        scientificName: ' Zoothera aurea',
        image: WhitesThrush, 
        description: 'White’s Thrush is a medium-sized bird with brownish plumage and striking white underparts. Native to Sri Lanka, it is found in forests, where it forages on the forest floor for insects and small invertebrates. Known for its elusive nature, it is difficult to spot, often remaining hidden in dense vegetation. White’s Thrush is known for its melodious, soft calls that echo through the forest during the breeding season. Its shy behavior and cryptic plumage make it a challenging bird to observe.', 
        habitat: 'Forests', 
        diet: 'Insects, small invertebrates', 
        lifespan: '5-7 years', 
        size: 'Length 25-28 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'White’s Thrush is a shy and elusive bird, known for its soft, melodic calls and cryptic plumage.',
        breedingSeason: 'April to August'
    },
    {
        id: 332, 
        name: 'Pied Thrush', 
        scientificName: ' Geokichla wardii',
        image: PiedThrush, 
        description: 'The Pied Thrush is a striking bird with black and white plumage, and a characteristic bright orange patch on its chest. It is a solitary species, often found in forested areas, where it feeds on insects, worms, and small invertebrates. Pied Thrushes are known for their loud, melodious songs, which can be heard during the breeding season. Their distinctive coloration and song make them a favorite among birdwatchers, although their shy nature makes them difficult to observe in the wild.', 
        habitat: 'Forested areas', 
        diet: 'Insects, worms, small invertebrates', 
        lifespan: '5-6 years', 
        size: 'Length 25-27 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Pied Thrushes are solitary birds that sing loud, melodious songs, often during the breeding season.',
        breedingSeason: 'April to June'
    },
    {
        id: 333, 
        name: 'Spot-winged Thrush', 
        scientificName: 'Geokichla spiloptera ',
        image: SpotWingedThrush, 
        description: 'The Spot-winged Thrush is a medium-sized bird known for its dark plumage and distinctive white spots on its wings. Found in dense forests, this species feeds on insects, fruits, and small invertebrates. Spot-winged Thrushes are known for their loud, repetitive calls that echo through the forest during the breeding season. They are elusive birds, often heard rather than seen, and their cryptic coloration allows them to blend into their environment.', 
        habitat: 'Dense forests', 
        diet: 'Insects, fruits, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 24-26 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Spot-winged Thrushes are elusive, often heard through their loud calls but rarely seen due to their cryptic plumage.',
        breedingSeason: 'March to July'
    },
    {
        id: 334, 
        name: 'Orange-headed Thrush', 
        scientificName: 'Geokichla citrina ',
        image: OrangeHeadedThrush, 
        description: 'The Orange-headed Thrush is a small to medium-sized bird with bright orange plumage on its head and a dark body. Native to Sri Lanka, this species is often found in forested areas, foraging on the forest floor for insects and fruits. Known for its melodious calls, it is a relatively shy bird, often hiding in dense vegetation. Its vibrant head color and distinctive song make it one of the more sought-after species for birdwatchers in Sri Lanka.', 
        habitat: 'Forested areas', 
        diet: 'Insects, fruits', 
        lifespan: '4-6 years', 
        size: 'Length 22-24 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Orange-headed Thrushes are shy, often foraging on the forest floor and emitting melodious calls.',
        breedingSeason: 'April to July'
    },
    {
        id: 335, 
        name: 'Indian Blackbird', 
        scientificName: ' Turdus simillimus',
        image: IndianBlackbird, 
        description: 'The Indian Blackbird is a medium-sized bird with glossy black plumage and a yellow ring around its eye. It is commonly found in forests, grasslands, and cultivated areas. Indian Blackbirds are omnivorous, feeding on insects, fruits, and small invertebrates. Known for their melodious song, they often sing during the breeding season. These birds are territorial and are often seen foraging on the ground or in low shrubs, where they search for food with swift movements.', 
        habitat: 'Forests, grasslands, cultivated areas', 
        diet: 'Insects, fruits, small invertebrates', 
        lifespan: '5-7 years', 
        size: 'Length 25-30 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Indian Blackbirds are known for their melodious songs and are territorial, often seen foraging on the ground or in low shrubs.', 
        breedingSeason: 'March to July'
    },
    {
        id: 336, 
        name: 'Eyebrowed Thrush', 
        scientificName: 'Turdus obscurus ',
        image: EyebrowedThrush, 
        description: 'The Eyebrowed Thrush is a medium-sized bird with brownish plumage and distinct white markings on its eyebrows. It is found in forested areas, where it forages on the ground for insects and small invertebrates. This bird is known for its soft, melodious calls and elusive nature, making it difficult to spot. During the breeding season, the Eyebrowed Thrush sings to establish territory and attract mates, often hiding in dense foliage while singing.', 
        habitat: 'Forests', 
        diet: 'Insects, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 25-28 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'The Eyebrowed Thrush is known for its soft calls and shy nature, often remaining hidden while foraging or singing.', 
        breedingSeason: 'April to August'
    },
    {
        id: 337, 
        name: 'Oriental Magpie-robin', 
        scientificName: ' Copsychus saularis',
        image: OrientalMagpieRobin, 
        description: 'The Oriental Magpie-robin is a small, striking bird with a black-and-white plumage pattern. It is commonly found in forests, gardens, and urban areas across South Asia. These birds are known for their melodious songs, which they use for territorial defense and attracting mates. They feed on insects, small invertebrates, and fruits, often seen hopping on the ground. The Oriental Magpie-robin is a highly active bird, frequently seen flitting about in search of food or singing from an exposed perch.', 
        habitat: 'Forests, gardens, urban areas', 
        diet: 'Insects, small invertebrates, fruits', 
        lifespan: '5-7 years', 
        size: 'Length 20-23 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Known for their beautiful song, Oriental Magpie-robins are active and often seen hopping on the ground or perched, singing from high places.', 
        breedingSeason: 'April to August'
    },
    {
        id: 338, 
        name: 'Indian Robin', 
        scientificName: 'Copsychus fulicatus ',
        image: IndianRobin, 
        description: 'The Indian Robin is a small bird with a vibrant chestnut-red tail and blackish plumage. It is found in open areas such as scrublands, grasslands, and cultivated fields. Indian Robins are known for their distinctive, melodious calls and are often seen foraging on the ground for insects, small invertebrates, and seeds. During the breeding season, the male sings from an elevated perch to attract the female, displaying its vibrant tail. They are territorial and often remain in pairs or small groups.', 
        habitat: 'Scrublands, grasslands, cultivated fields', 
        diet: 'Insects, small invertebrates, seeds', 
        lifespan: '4-6 years', 
        size: 'Length 18-20 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Indian Robins are territorial birds, known for their distinctive calls and ground foraging behavior, often seen in pairs or small groups.', 
        breedingSeason: 'March to July'
    },
    {
        id: 339, 
        name: 'White-rumped Shama', 
        scientificName: ' Copsychus malabaricus',
        image: WhiteRumpedShama, 
        description: 'The White-rumped Shama is a small, elegant bird with a long tail and striking white rump. It is commonly found in dense forests and woodland areas. Known for its beautiful song, the White-rumped Shama is often seen perched on low branches, singing to establish territory and attract mates. It feeds on insects, small invertebrates, and fruits. Its melodious and complex song has made it a popular bird in aviaries, often kept for its vocal abilities.', 
        habitat: 'Dense forests, woodlands', 
        diet: 'Insects, small invertebrates, fruits', 
        lifespan: '5-7 years', 
        size: 'Length 20-23 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'White-rumped Shamas are known for their melodious songs and territorial behavior, often seen perched on low branches or hopping on the ground.', 
        breedingSeason: 'March to August'
    },
    {
        id: 340, 
        name: 'Brown-breasted Flycatcher', 
        scientificName: 'Muscicapa muttui ',
        image: BrownBreastedFlycatcher, 
        description: 'The Brown-breasted Flycatcher is a small bird with brownish plumage and a distinctive white throat. It is found in forests and woodland areas, where it hunts for insects in mid-air or on the ground. Known for its quiet, melodious calls, this bird is often difficult to spot due to its cryptic coloration. During the breeding season, the Brown-breasted Flycatcher becomes more active, with males singing to establish their territory and attract females.', 
        habitat: 'Forests, woodlands', 
        diet: 'Insects, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 14-16 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'This species is known for its quiet and melodious calls, and it primarily feeds on insects caught in mid-air or on the ground.', 
        breedingSeason: 'March to August'
    },
    {
        id: 341, 
        name: 'Asian Brown Flycatcher', 
        scientificName: 'Muscicapa dauurica ',
        image: AsianBrownFlycatcher, 
        description: 'The Asian Brown Flycatcher is a small, agile bird with brownish-grey plumage and a white belly. It is found in forests, woodlands, and gardens across Asia. Known for its insect-catching skills, this flycatcher hunts by perching and darting out to capture prey in mid-air. The bird has a melodious, soft call that is often heard during the breeding season. Despite its small size, the Asian Brown Flycatcher is highly active, often flitting between branches in search of food.', 
        habitat: 'Forests, woodlands, gardens', 
        diet: 'Insects, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 12-14 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Asian Brown Flycatchers are agile hunters, catching insects in mid-air and often seen flitting between branches in search of food.', 
        breedingSeason: 'April to August'
    },
    {
        id: 342, 
        name: 'Dull-blue Flycatcher', 
        scientificName: 'Eumyias sordidus',
        image: DullBlueFlycatcher, 
        description: 'The Dull-blue Flycatcher is a small bird with muted blue plumage and a white belly. It inhabits forested areas and is often found in dense undergrowth, where it forages for insects. The Dull-blue Flycatcher is known for its high-pitched, melodious song that is frequently heard during the breeding season. This shy bird is often elusive, making it difficult to observe. Despite its dull appearance, it is a skilled insect hunter, using its quick reflexes to catch prey mid-flight.', 
        habitat: 'Forested areas, dense undergrowth', 
        diet: 'Insects, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 12-14 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'The Dull-blue Flycatcher is a skilled insect hunter that uses its quick reflexes to catch prey mid-flight, often remaining elusive in dense undergrowth.', 
        breedingSeason: 'April to August'
    },
    {
        id: 343, 
        name: "Tickell's Blue-flycatcher", 
        image: TickellsBlueFlycatcher, 
        scientificName: ' Cyornis tickelliae',
        description: 'Tickell’s Blue-flycatcher is a striking bird with a vibrant blue plumage and a white belly. It inhabits forested areas and is often seen perched on branches, where it hunts insects in mid-air. This flycatcher is known for its melodious and often complex song, which is heard during the breeding season. Tickell’s Blue-flycatcher is a territorial species, with males singing from elevated perches to attract mates and defend their territory. It is a relatively shy bird, often hiding in dense foliage.', 
        habitat: 'Forested areas', 
        diet: 'Insects, small invertebrates', 
        lifespan: '5-7 years', 
        size: 'Length 12-14 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'This flycatcher is territorial and sings from elevated perches to attract mates and defend its territory, often hiding in dense foliage.', 
        breedingSeason: 'April to August'
    },
    {
        id: 344, 
        name: 'Blue-throated Blue-flycatcher', 
        scientificName: 'Cyornis rubeculoides ',
        image: BlueThroatedBlueFlycatcher, 
        description: 'The Blue-throated Blue-flycatcher is a small bird known for its brilliant blue throat and striking plumage. It is often found in forested areas, where it hunts for insects and small invertebrates. This flycatcher is known for its active foraging behavior, often perched on branches from which it darts out to catch prey mid-flight. Its melodious song can be heard during the breeding season, when males establish their territory and attract females. The Blue-throated Blue-flycatcher is highly territorial and elusive.', 
        habitat: 'Forested areas', 
        diet: 'Insects, small invertebrates', 
        lifespan: '5-7 years', 
        size: 'Length 12-14 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'Known for its brilliant blue throat, the Blue-throated Blue-flycatcher is a territorial bird that actively hunts for insects and small invertebrates.', 
        breedingSeason: 'April to August'
    },
    {
        id: 345, 
        name: 'Indian Blue Robin', 
        scientificName: 'Larvivora brunnea',
        image: IndianBlueRobin, 
        description: 'The Indian Blue Robin is a small bird with striking blue and white plumage. It is found in dense forests, where it forages on the forest floor for insects, worms, and small invertebrates. The Indian Blue Robin is known for its soft, melodious song, which is often heard during the breeding season. These birds are often difficult to spot due to their cryptic coloration, making them elusive. Despite their shy nature, they are active foragers and can be seen hopping around the forest floor.', 
        habitat: 'Dense forests', 
        diet: 'Insects, worms, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 20-22 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'The Indian Blue Robin is an elusive bird known for its soft song and cryptic coloration, often foraging on the forest floor for food.', 
        breedingSeason: 'April to August'
    },
    {
        id: 346, 
        name: 'Bluethroat', 
        scientificName: 'Luscinia svecica ',
        image: Bluethroat, 
        description: 'The Bluethroat is a small, colorful bird with a vibrant blue throat and a white belly. It is commonly found in wetlands, grasslands, and along riverbanks. The Bluethroat is known for its beautiful song, which can be heard during the breeding season as males establish their territory. It feeds on insects, small invertebrates, and fruits, often seen foraging in dense vegetation. The Bluethroat is highly territorial and often displays its colorful throat during courtship and territorial defense.', 
        habitat: 'Wetlands, grasslands, riverbanks', 
        diet: 'Insects, small invertebrates, fruits', 
        lifespan: '4-6 years', 
        size: 'Length 13-15 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'The Bluethroat is known for its vibrant blue throat and melodious song, often seen foraging in dense vegetation and displaying during courtship.', 
        breedingSeason: 'April to August'
    },
    {
        id: 347, 
        name: 'Sri Lanka Whistling-thrush', 
        scientificName: 'Myophonus blighi ',
        image: SriLankaWhistlingThrush, 
        description: 'The Sri Lanka Whistling-thrush is a small bird native to the forests of Sri Lanka. It is known for its distinctive whistling call, which can be heard echoing through the dense forest. These birds are often seen near streams and waterfalls, where they forage for small invertebrates and insects. The Sri Lanka Whistling-thrush has a dark plumage with a blue sheen, which is especially noticeable in bright light. This bird is elusive and often hides in dense foliage, making it difficult to spot.', 
        habitat: 'Forests near streams and waterfalls', 
        diet: 'Small invertebrates, insects', 
        lifespan: '4-6 years', 
        size: 'Length 20-23 cm', 
        conservationStatus: 'Endangered', 
        behavior: 'The Sri Lanka Whistling-thrush is known for its distinctive whistling call, often heard near streams and waterfalls, where it hides in dense foliage.', 
        breedingSeason: 'April to August'
    },
    {
        id: 348, 
        name: 'Kashmir Flycatcher', 
        scientificName: 'Ficedula subrubra ',
        image: KashmirFlycatcher, 
        description: 'The Kashmir Flycatcher is a small bird with striking plumage, including a pale blue throat and a dark brown back. It is found in the mountainous regions of Kashmir, where it inhabits forested areas and forages for insects. These birds are known for their quick movements and are often seen flitting between branches in search of prey. The Kashmir Flycatcher has a melodious song that can be heard during the breeding season, and it is highly territorial, often defending its small territory from other flycatchers.', 
        habitat: 'Mountainous regions, forests', 
        diet: 'Insects, small invertebrates', 
        lifespan: '4-6 years', 
        size: 'Length 10-12 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'The Kashmir Flycatcher is an agile bird known for its quick movements, often flitting between branches to catch insects and defend its territory.', 
        breedingSeason: 'May to August'
    },
    {
        id: 349, 
        name: 'Blue Rock-thrush', 
        scientificName: 'Monticola solitarius',
        image: BlueRockThrush, 
        description: 'The Blue Rock-thrush is a medium-sized bird with striking blue plumage and a contrasting dark head. It is commonly found in rocky outcrops, cliffs, and hilly areas, where it forages for insects and small invertebrates. Known for its territorial behavior, the Blue Rock-thrush sings to defend its territory and attract mates. During the breeding season, the male often displays his vibrant plumage to attract the female. These birds are strong fliers and often seen perched on high rocks or cliffs, scanning for prey.', 
        habitat: 'Rocky outcrops, cliffs, hilly areas', 
        diet: 'Insects, small invertebrates', 
        lifespan: '5-7 years', 
        size: 'Length 20-25 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'The Blue Rock-thrush is a territorial bird often seen perched on high rocks or cliffs, where it sings and forages for insects and small invertebrates.', 
        breedingSeason: 'April to August'
    },
    {
        id: 350, 
        name: 'Pied Bushchat', 
        scientificName: 'Saxicola caprata ',
        image: PiedBushchat, 
        description: 'The Pied Bushchat is a small, striking bird with contrasting black and white plumage. It is commonly found in open scrublands, grasslands, and cultivated fields. Pied Bushchats are known for their loud, melodious calls, which are often heard during the breeding season. These birds forage on the ground for insects, small invertebrates, and seeds. During courtship, the male displays its vibrant plumage and sings to attract the female. Despite its small size, the Pied Bushchat is highly territorial and often aggressive toward intruders.', 
        habitat: 'Scrublands, grasslands, cultivated fields', 
        diet: 'Insects, small invertebrates, seeds', 
        lifespan: '4-6 years', 
        size: 'Length 15-18 cm', 
        conservationStatus: 'Least Concern', 
        behavior: 'The Pied Bushchat is known for its loud calls and territorial behavior, often foraging on the ground for food and defending its territory aggressively.', 
        breedingSeason: 'March to July'
    },
    {
        id: 351, 
        name: 'Pied Wheatear', 
        scientificName: 'Oenanthe pleschanka ',
        image: PiedWheatear, 
        description: 'The Pied Wheatear is a small passerine bird with striking black and white plumage. It is commonly found in open, arid regions, where it forages for insects and seeds. Males display their bright plumage during the breeding season, and their territorial behavior includes song and aerial displays. The Pied Wheatear is often seen perched on elevated positions, scanning for prey. Its habitat typically includes rocky areas and open grasslands.',
        habitat: 'Open arid regions, rocky areas, grasslands',
        diet: 'Insects, seeds',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pied Wheatears are territorial, often perched in open areas to catch prey and defend their space.',
        breedingSeason: 'April to July'
    },
    {
        id: 352, 
        name: 'Asian Fairy-bluebird', 
        scientificName: 'Irena puella ',
        image: AsianFairyBluebird, 
        description: 'The Asian Fairy-bluebird is a brightly colored bird with vibrant blue plumage and a striking black and greenish head. Found in tropical forests, it feeds primarily on fruits, insects, and nectar. This bird is known for its melodious calls and energetic foraging habits. Males often display their vivid plumage to attract females, and they can be seen darting among branches in search of food. The species is fairly common in its forested habitat.',
        habitat: 'Tropical forests',
        diet: 'Fruits, insects, nectar',
        lifespan: '6-8 years',
        size: 'Length 24-26 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Asian Fairy-bluebirds are known for their energetic foraging and vivid plumage, often feeding on nectar and insects.',
        breedingSeason: 'March to August'
    },
    {
        id: 353, 
        name: 'Golden-fronted Leafbird', 
        scientificName: 'Chloropsis aurifrons ',
        image: GoldenFrontedLeafbird, 
        description: 'The Golden-fronted Leafbird is a small, vibrant green bird with a striking golden patch on its forehead. It is commonly found in forested areas, where it feeds on insects and fruits. The Leafbird is known for its agility in navigating the treetops, where it searches for prey. These birds are territorial and often display their bright plumage during the breeding season. They play an important role in pollination and controlling insect populations.',
        habitat: 'Forested areas, tall trees',
        diet: 'Insects, fruits',
        lifespan: '5-7 years',
        size: 'Length 16-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Golden-fronted Leafbirds are agile and territorial, often seen foraging in treetops for food.',
        breedingSeason: 'April to August'
    },
    {
        id: 354, 
        name: "Jerdon's Leafbird", 
        scientificName: 'Chloropsis jerdoni ',
        image: JerdonsLeafbird, 
        description: 'Jerdon’s Leafbird is a small bird with striking green plumage and a yellowish belly. It inhabits dense tropical forests where it forages for insects and small fruits. The species is known for its shy behavior, often hiding among leaves and branches. During the breeding season, males display their vibrant colors to attract females. Jerdon’s Leafbird plays a crucial role in the forest ecosystem by controlling insect populations and dispersing seeds.',
        habitat: 'Dense tropical forests',
        diet: 'Insects, small fruits',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Shy and elusive, Jerdon’s Leafbird is often seen foraging for insects and fruits among dense foliage.',
        breedingSeason: 'April to August'
    },
    {
        id: 355, 
        name: 'White-throated Flowerpecker', 
        scientificName: ' Dicaeum vincens',
        image: WhiteThroatedFlowerpecker, 
        description: 'The White-throated Flowerpecker is a small bird with a distinctive white throat and dark plumage. Found in tropical and subtropical forests, this species feeds primarily on nectar, fruits, and insects. It is known for its high-pitched calls and quick movements as it darts between flowers in search of food. The Flowerpecker plays an important role in pollination and seed dispersal, and its active nature makes it easy to spot in the dense undergrowth.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Nectar, fruits, insects',
        lifespan: '3-5 years',
        size: 'Length 9-11 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-throated Flowerpeckers are quick and agile, often feeding on nectar and fruits while darting between flowers.',
        breedingSeason: 'March to August'
    },
    {
        id: 356, 
        name: 'Thick-billed Flowerpecker', 
        scientificName: ' Dicaeum agile',
        image: ThickBilledFlowerpecker, 
        description: 'The Thick-billed Flowerpecker is a small bird with a stout beak and vibrant plumage. Found in dense forests and plantations, it feeds on nectar, fruits, and insects. This bird is known for its distinctive, powerful beak, which helps it extract nectar from tough flowers. Its bright colors and quick movements make it a striking sight in the treetops. The Thick-billed Flowerpecker is highly territorial and defends its feeding area vigorously.',
        habitat: 'Dense forests, plantations',
        diet: 'Nectar, fruits, insects',
        lifespan: '3-5 years',
        size: 'Length 8-10 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Thick-billed Flowerpeckers are known for their powerful beak and agile movements, often seen feeding in dense forest canopies.',
        breedingSeason: 'March to August'
    },
    {
        id: 357, 
        name: 'Pale-billed Flowerpecker', 
        scientificName: ' Dicaeum erythrorhynchos',
        image: PaleBilledFlowerpecker, 
        description: 'The Pale-billed Flowerpecker is a small, inconspicuous bird with a pale bill and muted plumage. It lives in dense tropical forests, where it feeds on nectar, small fruits, and insects. The species is known for its quiet behavior and tendency to stay hidden in the foliage. Its pale bill allows it to blend in with the surrounding vegetation, making it difficult to spot. Despite its secretive nature, the Pale-billed Flowerpecker plays a key role in pollination.',
        habitat: 'Dense tropical forests',
        diet: 'Nectar, fruits, insects',
        lifespan: '3-5 years',
        size: 'Length 8-10 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Pale-billed Flowerpeckers are secretive, often staying hidden in dense vegetation and feeding on nectar and insects.',
        breedingSeason: 'March to August'
    },
    {
        id: 358, 
        name: 'Purple-rumped Sunbird', 
        scientificName: 'Leptocoma zeylonica ',
        image: PurpleRumpedSunbird, 
        description: 'The Purple-rumped Sunbird is a small, brightly colored bird with iridescent plumage. Found in tropical and subtropical forests, it feeds on nectar, insects, and small fruits. The sunbird is known for its rapid movements as it flits between flowers, using its long bill to extract nectar. Males are more colorful and display their vibrant plumage during the breeding season to attract females. These birds play a key role in pollination.',
        habitat: 'Tropical and subtropical forests',
        diet: 'Nectar, insects, fruits',
        lifespan: '4-6 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Purple-rumped Sunbirds are agile and active, often seen flitting between flowers to feed on nectar and insects.',
        breedingSeason: 'March to August'
    },
    {
        id: 359, 
        name: 'Purple Sunbird', 
        scientificName: 'Cinnyris asiaticus ',
        image: PurpleSunbird, 
        description: 'The Purple Sunbird is a small, iridescent bird with a metallic purple sheen. It is found in tropical and subtropical regions, where it feeds on nectar, insects, and small fruits. The species is known for its rapid movements and its ability to hover while feeding. Males are more colorful, and during the breeding season, they display their plumage to attract mates. The Purple Sunbird is an important pollinator and can be seen frequently in gardens and forests.',
        habitat: 'Tropical and subtropical regions',
        diet: 'Nectar, insects, fruits',
        lifespan: '3-5 years',
        size: 'Length 9-11 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Purple Sunbirds are agile and active, often hovering while feeding on nectar and insects.',
        breedingSeason: 'March to August'
    },
    {
        id: 360, 
        name: "Loten's Sunbird", 
        scientificName: 'Cinnyris lotenius ',
        image: LotensSunbird, 
        description: 'Loten’s Sunbird is a small, colorful bird found in the forests of South Asia. It has a striking combination of green, blue, and purple plumage. The sunbird is an active forager, feeding primarily on nectar, insects, and small fruits. Males display their vibrant colors during the breeding season to attract females. Known for their agility and rapid movements, Loten’s Sunbird plays an important role in pollinating flowers while feeding.',
        habitat: 'Forests of South Asia',
        diet: 'Nectar, insects, fruits',
        lifespan: '4-6 years',
        size: 'Length 11-13 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Loten’s Sunbirds are agile foragers, often seen hovering while feeding on nectar and insects.',
        breedingSeason: 'March to August'
    },
    {
        id: 361, 
        name: 'Streaked Weaver', 
        scientificName: 'Ploceus manyar ',
        image: StreakedWeaver, 
        description: 'The Streaked Weaver is a small, streaked brown bird found in open grasslands and scrubby areas. It is known for its intricate nest-building skills, often weaving large, hanging nests in tall grasses. The Streaked Weaver feeds primarily on seeds, grains, and small insects. During the breeding season, males display their nests and perform courtship displays to attract females. These birds are often seen in groups, foraging on the ground for food.',
        habitat: 'Open grasslands, scrubby areas',
        diet: 'Seeds, grains, small insects',
        lifespan: '4-6 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Streaked Weavers are social birds, often seen in groups building complex nests and foraging together.',
        breedingSeason: 'April to July'
    },
    {
        id: 362, 
        name: 'Baya Weaver', 
        scientificName: ' Ploceus philippinus',
        image: BayaWeaver, 
        description: 'The Baya Weaver is a small, colorful bird known for its impressive nest-building skills. Males weave intricate, hanging nests from grass and other materials to attract females. The bird is commonly found in grasslands and cultivated areas, where it feeds on seeds, grains, and insects. During the breeding season, males are more brightly colored, with a yellow body and black mask. The Baya Weaver is a highly social species, often seen in large colonies.',
        habitat: 'Grasslands, cultivated areas',
        diet: 'Seeds, grains, insects',
        lifespan: '4-6 years',
        size: 'Length 13-15 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Baya Weavers are social birds, often found in colonies, and are known for their elaborate nest-building behavior.',
        breedingSeason: 'April to July'
    },
    {
        id: 363, 
        name: 'Indian Silverbill', 
        scientificName: 'Euodice malabarica ',
        image: IndianSilverbill, 
        description: 'The Indian Silverbill is a small, finch-like bird with a silvery appearance and a distinctive short tail. It is commonly found in grasslands, scrublands, and cultivated areas, where it feeds on seeds and grasses. Indian Silverbills are highly social birds, often seen in large flocks. Their calls are soft and chirpy, and they can be seen hopping on the ground foraging for food. During the breeding season, they build small cup-shaped nests in shrubs or trees.',
        habitat: 'Grasslands, scrublands, cultivated areas',
        diet: 'Seeds, grasses',
        lifespan: '4-6 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Indian Silverbills are social birds, often seen in flocks foraging for seeds and building nests in shrubs.',
        breedingSeason: 'April to July'
    },
    {
        id: 364, 
        name: 'White-rumped Munia', 
        scientificName: ' Lonchura striata',
        image: WhiteRumpedMunia, 
        description: 'The White-rumped Munia is a small, brown bird with distinctive white markings on its rump. Found in grasslands and open fields, it feeds primarily on seeds, grasses, and small insects. The species is known for its gregarious behavior, often forming large flocks, especially during the non-breeding season. White-rumped Munias are agile foragers, often seen hopping on the ground or perching in tall grasses while searching for food.',
        habitat: 'Grasslands, open fields',
        diet: 'Seeds, grasses, insects',
        lifespan: '4-6 years',
        size: 'Length 11-13 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-rumped Munias are gregarious, often forming large flocks and foraging on the ground for seeds and insects.',
        breedingSeason: 'April to July'
    },
    {
        id: 365, 
        name: 'Scaly-breasted Munia', 
        scientificName: 'Lonchura punctulata ',
        image: ScalyBreastedMunia, 
        description: 'The Scaly-breasted Munia is a small, stocky bird known for its scaly plumage and strong beak. It is commonly found in grasslands, cultivated areas, and open fields, where it feeds on seeds, grains, and small insects. These birds are highly social, often seen in large flocks, and they build small, dome-shaped nests in tall grasses. The Scaly-breasted Munia is known for its chirpy calls and its tendency to stay in groups for protection.',
        habitat: 'Grasslands, cultivated areas, open fields',
        diet: 'Seeds, grains, insects',
        lifespan: '4-6 years',
        size: 'Length 11-13 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Scaly-breasted Munias are social birds, often seen in flocks foraging for seeds and building nests in tall grasses.',
        breedingSeason: 'April to July'
    },
    {
        id: 366,
        name: 'Black-throated Munia',
        scientificName: 'Lonchura kelaarti ',
        image: BlackThroatedMunia,
        description: 'The Black-throated Munia is a small, stocky bird with a distinctive black throat and a brownish plumage. It is commonly found in grasslands and cultivated areas, where it feeds on seeds and small insects. These birds are often seen in small flocks, and they build their nests in tall grasses or shrubs. The Black-throated Munia is known for its melodic calls and is highly social, often foraging in groups.',
        habitat: 'Grasslands, cultivated areas',
        diet: 'Seeds, small insects',
        lifespan: '4-6 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Black-throated Munias are social birds often seen in small groups, foraging for seeds and building nests in tall grasses.',
        breedingSeason: 'April to July'
    },
    {
        id: 367,
        name: 'Tricoloured Munia',
        scientificName: 'Lonchura malacca ',
        image: TricolouredMunia,
        description: 'The Tricoloured Munia is a small, brightly colored bird known for its striking plumage with shades of black, white, and chestnut. It is typically found in grasslands and open fields, where it feeds on seeds, grains, and small insects. Tricoloured Munias are social and often seen in flocks, foraging on the ground and building nests in tall grasses.',
        habitat: 'Grasslands, open fields',
        diet: 'Seeds, grains, insects',
        lifespan: '3-5 years',
        size: 'Length 11-13 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Tricoloured Munias are highly social birds, often seen foraging in flocks and building dome-shaped nests in tall grasses.',
        breedingSeason: 'March to June'
    },
    {
        id: 368,
        name: 'House Sparrow',
        scientificName: 'Passer domesticus ',
        image: HouseSparrow,
        description: 'The House Sparrow is a small, stocky bird that is commonly found in urban and rural areas. It has a distinctive brown and grey plumage, with a black bib on the male. House Sparrows are highly adaptable and can be seen around human settlements, foraging for seeds, crumbs, and small insects. They often build their nests in crevices, eaves, and buildings.',
        habitat: 'Urban areas, rural areas',
        diet: 'Seeds, small insects, scraps',
        lifespan: '3-5 years',
        size: 'Length 14-16 cm',
        conservationStatus: 'Least Concern',
        behavior: 'House Sparrows are adaptable birds, often seen around human settlements foraging and nesting in buildings.',
        breedingSeason: 'March to August'
    },
    {
        id: 369,
        name: 'Forest Wagtail',
        scientificName: 'Dendronanthus indicus ',
        image: ForestWagtail,
        description: 'The Forest Wagtail is a slender, ground-dwelling bird found in forested areas and along rivers. It is known for its long tail, which it frequently wags, and its muted greenish-brown plumage. This bird feeds on insects and small invertebrates, foraging by walking and wagging its tail. The Forest Wagtail is highly mobile, often hopping through underbrush and along stream banks.',
        habitat: 'Forested areas, riversides',
        diet: 'Insects, small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Forest Wagtails are active, ground-dwelling birds often seen foraging for insects while wagging their tails.',
        breedingSeason: 'April to August'
    },
    {
        id: 370,
        name: "Richard's Pipit",
        scientificName: 'Anthus richardi ',
        image: RichardsPipit,
        description: "Richard's Pipit is a medium-sized bird with a streaky brown plumage and long legs. It is commonly found in open fields, grasslands, and agricultural areas, where it feeds on insects and seeds. The bird is known for its loud song during the breeding season and its habit of staying on the ground for foraging, often flushing up into the air when disturbed.",
        habitat: 'Open fields, grasslands, agricultural areas',
        diet: 'Insects, seeds',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Richard’s Pipit is often seen on the ground foraging for insects, using its long legs to quickly move through the grass.',
        breedingSeason: 'March to July'
    },
    {
        id: 371,
        name: 'Paddyfield Pipit',
        scientificName: ' Anthus rufulus',
        image: PaddyfieldPipit,
        description: 'The Paddyfield Pipit is a small, slender bird that is commonly found in wetlands, paddy fields, and marshy areas. It has streaked brown plumage and a distinctive white throat. Paddyfield Pipits feed on insects and seeds and are known for their quiet, unobtrusive behavior, often remaining hidden in tall grass or low vegetation.',
        habitat: 'Paddy fields, marshes, wetlands',
        diet: 'Insects, seeds',
        lifespan: '4-6 years',
        size: 'Length 15-17 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Paddyfield Pipits are often found foraging in tall grasses, moving quietly through the vegetation and hunting for insects.',
        breedingSeason: 'March to August'
    },
    {
        id: 372,
        name: "Blyth's Pipit",
        scientificName: 'Anthus godlewskii ',
        image: BlythsPipit,
        description: "Blyth's Pipit is a small, streaky bird found in grasslands and open fields. It is characterized by its brown streaked plumage and pale underparts. The bird feeds primarily on insects and seeds and is known for its high-pitched, repetitive calls. Blyth’s Pipit is a relatively elusive species, often difficult to spot due to its camouflage in grassy environments.",
        habitat: 'Grasslands, open fields',
        diet: 'Insects, seeds',
        lifespan: '4-6 years',
        size: 'Length 16-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Blyth’s Pipits are often seen foraging in grassy fields, using their sharp vision to detect insects and small seeds.',
        breedingSeason: 'April to July'
    },
    {
        id: 373,
        name: 'Western Yellow Wagtail',
        scientificName: ' Motacilla flava',
        image: WesternYellowWagtail,
        description: 'The Western Yellow Wagtail is a vibrant, ground-dwelling bird known for its bright yellow plumage. It is typically found in wetlands, grasslands, and agricultural fields, where it feeds on insects and small invertebrates. The Western Yellow Wagtail is active and can often be seen wagging its tail while foraging along the ground, searching for food.',
        habitat: 'Wetlands, grasslands, agricultural fields',
        diet: 'Insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 17-19 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Western Yellow Wagtails are active birds seen frequently wagging their tails while foraging for insects on the ground.',
        breedingSeason: 'April to August'
    },
    {
        id: 374,
        name: 'Grey Wagtail',
        scientificName: 'Motacilla cinerea ',
        image: GreyWagtail,
        description: 'The Grey Wagtail is a slender, elegant bird with grey and yellow plumage. It is often seen along riversides, streams, and wetlands, where it feeds on insects and small aquatic invertebrates. The Grey Wagtail is known for its constant tail-wagging behavior, which is frequently seen while it is foraging on the ground or in shallow waters.',
        habitat: 'Riversides, streams, wetlands',
        diet: 'Insects, small invertebrates',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Grey Wagtails are active birds often seen wagging their tails while searching for insects along water sources.',
        breedingSeason: 'March to June'
    },
    {
        id: 375,
        name: 'White-browed Wagtail',
        image: WhiteBrowedWagtail,
        scientificName: 'Motacilla maderaspatensis ',
        description: 'The White-browed Wagtail is a distinctive bird with a white eyebrow stripe and contrasting black and white plumage. It is commonly found near water bodies, including rivers, streams, and wetlands, where it feeds on insects, small crustaceans, and invertebrates. The White-browed Wagtail is known for its constant tail-wagging and its active foraging behavior along the water’s edge.',
        habitat: 'Water bodies, rivers, streams, wetlands',
        diet: 'Insects, small crustaceans, invertebrates',
        lifespan: '4-6 years',
        size: 'Length 16-18 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White-browed Wagtails are active foragers often seen wagging their tails as they search for food along the water’s edge.',
        breedingSeason: 'April to August'
    },
    {
        id: 376,
        name: 'White Wagtail',
        scientificName: 'Motacilla alba ',
        image: WhiteWagtail,
        description: 'The White Wagtail is a slender, ground-dwelling bird with striking black and white plumage. It is commonly found in wetlands, rivers, and coastal areas, where it feeds on insects, small invertebrates, and algae. The White Wagtail is known for its tail-wagging behavior and can often be seen foraging along the shore or walking through mudflats in search of food.',
        habitat: 'Wetlands, rivers, coastal areas',
        diet: 'Insects, small invertebrates, algae',
        lifespan: '5-7 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'White Wagtails are active foragers, frequently wagging their tails while walking through wetlands and coastal regions.',
        breedingSeason: 'April to August'
    }
]

const AllBirdInfo = () => {
    const { id } = useParams(); 
    const bird = birdData.find((bird) => bird.id === parseInt(id));

    if (!bird) {
        return <div>Bird not found!</div>;
    }

    return (
        <>
        <NavPage/>
        <div className="bird-info-container">
            <h1 className="bird-info-name">{bird.name}</h1>
            <h2 className="bird-info-scientific">{bird.scientificName}</h2>
            <img src={bird.image} alt={bird.name} className="bird-info-image" />
        </div>   
            <div>
                <p className="bird-info-description">{bird.description}</p>
                <div className="bird-info-details">
                    <p><strong>Habitat:</strong> {bird.habitat}</p>
                    <p><strong>Diet:</strong> {bird.diet}</p>
                    <p><strong>Lifespan:</strong> {bird.lifespan}</p>
                    <p><strong>Size:</strong> {bird.size}</p>
                    <p><strong>Conservation Status:</strong> {bird.conservationStatus}</p>
                    <p><strong>Behavior:</strong> {bird.behavior}</p>
                    <p><strong>Breeding Season:</strong> {bird.breedingSeason}</p>
                </div>
                </div>
        
        </>
    );
};

export default AllBirdInfo;