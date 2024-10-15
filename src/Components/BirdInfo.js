import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/BirdInfo.css'; 
import NavPage from './Nav';
import SriLankaJunglefowl from '../Assets/EndemicBirds/Sri Lanka Junglefowl.webp';
import SriLankaBlueMagpie from '../Assets/EndemicBirds/Sri Lanka Blue Magpie.jpeg';
import SriLankaWoodPigeon from '../Assets/EndemicBirds/Sri Lanka Wood Pigeon.jpg';
import SriLankaHangingParrot from '../Assets/EndemicBirds/Sri Lanka Hanging Parrot.jpeg';
import OrangebilledBabbler from '../Assets/EndemicBirds/OrangebilledBabbler.jpg';
import LayardsParakeet from '../Assets/EndemicBirds/LayardsParakeet.jpg';
import SriLankaWhistlingThrush from '../Assets/EndemicBirds/SriLankaWhistlingThrush.jpg';
import SriLankaScimitarBabbler from '../Assets/EndemicBirds/SriLankaScimitarBabbler.jpg';
import SriLankaSpotwingedThrush from '../Assets/EndemicBirds/SriLankaSpotwingedThrush.webp';
import SriLankaSwallow from '../Assets/EndemicBirds/SriLankaSwallow.jpg';
import AshyHeadedLaughingthrush from '../Assets/EndemicBirds/AshyHeadedLaughingthrush.jpeg';
import SriLankaGreenPigeon from '../Assets/EndemicBirds/SriLankaGreenPigeon.webp';
import YellowFrontedBarbet from '../Assets/EndemicBirds/YellowFrontedBarbet.jpg';
import SriLankaSpurfowl from '../Assets/EndemicBirds/SriLankaSpurfowl.jpg';
import SriLankaWhiteEye from '../Assets/EndemicBirds/SriLankaWhiteEye.jpg';
import CrimsonFrontedBarbet from '../Assets/EndemicBirds/CrimsonFrontedBarbet.webp';
import SriLankaDullBlueFlycatcher from '../Assets/EndemicBirds/SriLankaDullBlueFlycatcher.jpeg';
import SriLankaWoodshrike from '../Assets/EndemicBirds/SriLankaWoodshrike.jpeg';
import SriLankaBrownCappedBabbler from '../Assets/EndemicBirds/SriLankaBrownCappedBabbler.jpg';
import RedfacedMalkoha from '../Assets/EndemicBirds/RedfacedMalkoha.jpg';
import SriLankaFlameback from '../Assets/EndemicBirds/SriLankaFlameback.jpg';
import SriLankaBushWarbler from '../Assets/EndemicBirds/SriLankaBushWarbler.jpg';
import SriLankaBlackCappedBulbul from '../Assets/EndemicBirds/SriLankaBlackCappedBulbul.jpg';
import SriLankaPuffThroatedBabbler from '../Assets/EndemicBirds/SriLankaPuffThroatedBabbler.jpg';
import ChestnutbackedOwlet from '../Assets/EndemicBirds/Chestnut-backed Owlet.jpeg';
import CeylonCrestedDrongo from '../Assets/EndemicBirds/Ceylon Crested Drongo.jpg';
import SerendibScopsOwl from '../Assets/EndemicBirds/SerendibScopsOwl.jpg';
import CeylonWhiteheadedStarling from '../Assets/EndemicBirds/Ceylon White-headed Starling.webp';
import GreenbilledCoucal from '../Assets/EndemicBirds/SriLankaGreatCoucal.jpg';
import SriLankaHillMyna from '../Assets/EndemicBirds/SriLankaHillMyna.jpg';
import SriLankaGreyHornbill from '../Assets/EndemicBirds/Sri Lanka Grey Hornbill.jpg';
import WhitethroatedFlowerpecker from '../Assets/EndemicBirds/White-throated Flowerpecker.jpg';


const birdData = [
    {
        id: 1,
        name: 'Sri Lanka Junglefowl',
        scientificName: 'Gallus lafayettii',
        likeNames: ['Ceylon Junglefowl', 'Lafayet’s Junglefowl'],
        image: SriLankaJunglefowl,
        description: 'The Sri Lanka Junglefowl is a brightly colored bird endemic to Sri Lanka and holds the title of the national bird. Males are especially known for their striking plumage, showcasing vibrant shades of red, orange, and yellow, making them a stunning sight in their natural habitat. In contrast, females exhibit more subdued and camouflaged colors. These birds are typically found in forested areas, where they prefer to forage among the undergrowth, often seen scratching the ground and exploring their surroundings.',
        habitat: 'Tropical forests, dense scrublands, and plantations',
        diet: 'Seeds, insects, and small fruits',
        lifespan: '10-15 years',
        size: 'Length 66-73 cm, Wingspan 45-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'The Sri Lanka Junglefowl is a shy and elusive bird, often found foraging on the forest floor. Males are territorial and engage in vocal displays and physical confrontations to assert dominance.',
        breedingSeason: 'February to May',
    },
    {
        id: 2,
        name: 'Sri Lanka Blue Magpie',
        scientificName: 'Urocissa ornata',
        likeNames: ['Ceylon Blue Magpie'],
        image: SriLankaBlueMagpie,
        description: 'The Sri Lanka Blue Magpie is a striking bird endemic to the lush rainforests of Sri Lanka. It features vibrant blue feathers adorned with rich chestnut accents, creating a beautiful contrast. Its long, elegant tail adds to its charm, making it a favorite among birdwatchers. The bird is known for its loud, chattering calls, which echo through the forest. With a slender body and sharp, intelligent eyes, the Sri Lanka Blue Magpie is a captivating sight in its natural habitat.',
        habitat: 'Tropical rainforests, montane forests, and dense woodlands',
        diet: 'Insects, small reptiles, fruits, and small mammals',
        lifespan: '5-8 years',
        size: 'Length 42-47 cm, Wingspan 50-60 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'The Sri Lanka Blue Magpie is highly social and intelligent. It is often seen foraging in small family groups, hopping through the trees in search of food.',
        breedingSeason: 'March to May',
    },
    {
        id: 3,
        name: 'Sri Lanka Wood Pigeon',
        scientificName: 'Columba torringtoniae',
        likeNames: ['Ceylon Wood Pigeon'],
        image: SriLankaWoodPigeon,
        description: 'The Sri Lanka Wood Pigeon is a large and striking pigeon species endemic to Sri Lanka. It is easily recognized by its dark grey plumage, which provides excellent camouflage in its forested habitat. This pigeon is distinguished by its unique white and black bars on the sides of its neck, adding to its elegance. With a robust body and a relatively long tail, the Sri Lanka Wood Pigeon is often seen perched on tree branches, cooing softly in the trees.',
        habitat: 'Montane forests, subtropical forests, and cloud forests',
        diet: 'Fruits, berries, and seeds',
        lifespan: '6-10 years',
        size: 'Length 36-39 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'Sri Lanka Wood Pigeons are generally solitary or found in pairs, foraging for fruit and seeds in the forest canopy.',
        breedingSeason: 'February to May',
    },
    {
        id: 4,
        name: 'Sri Lanka Hanging Parrot',
        scientificName: 'Loriculus beryllinus',
        likeNames: ['Ceylon Hanging Parrot'],
        image: SriLankaHangingParrot,
        description: 'The Sri Lanka Hanging Parrot is a small, bright green parrot found only in Sri Lanka. Its vibrant plumage makes it stand out in its natural habitat, where it feeds on fruits and flowers. Known for its unique behavior of hanging upside down while resting, this parrot resembles a bat. With a short tail and a slightly curved beak, the Sri Lanka Hanging Parrot is often seen in pairs or small groups, adding charm to the lush greenery.',
        habitat: 'Lowland rainforests, montane forests, and gardens',
        diet: 'Fruits, nectar, and seeds',
        lifespan: '10-12 years',
        size: 'Length 13-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These parrots are often seen flying swiftly through the forest canopy in search of food, and they are known for their acrobatic behavior.',
        breedingSeason: 'March to June',
    },
    {
        id: 5,
        name: 'Orange-billed Babbler',
        scientificName: 'Turdoides rufescens',
        likeNames: ['Ceylon Rufous Babbler'],
        image: OrangebilledBabbler,
        description:  'The Orange-billed Babbler is a lively and sociable bird native to the forests of Sri Lanka. Known for its distinctive orange bill, this bird has a brownish plumage that blends well with its surroundings. Often found in large, noisy flocks, they are recognized for their chattering calls and playful behavior. These babblers are commonly seen foraging on the ground for insects and fruits, adding a vibrant presence to the lush forest environment.',
        habitat: 'Rainforests and wet-zone forests',
        diet: 'Insects, small invertebrates, and fruits',
        lifespan: '6-8 years',
        size: 'Length 23 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These birds are highly social, often seen in large, noisy flocks, moving through the forest undergrowth in search of insects and fruit.',
        breedingSeason: 'April to July',
    },
    {
        id: 6,
        name: 'Layard’s Parakeet',
        scientificName: 'Psittacula calthrapae',
        likeNames: ['Ceylon Parakeet'],
        image: LayardsParakeet,
        description: 'Layard’s Parakeet is a vibrant parrot species endemic to Sri Lanka, easily recognized by its striking colors. Males feature a bright red beak and distinctive blue wings, which contrast beautifully with their green body. Females, on the other hand, have a more subdued color palette, making them less conspicuous. These parakeets are often found in flocks, chattering among themselves as they feed on seeds and fruits in the trees, adding color to the lush landscapes of Sri Lanka.',
        habitat: 'Forests, plantations, and gardens',
        diet: 'Fruits, seeds, and grains',
        lifespan: '10-15 years',
        size: 'Length 29-32 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'Layard’s Parakeets are often found in small flocks, feeding in fruiting trees. They are known for their loud, screeching calls.',
        breedingSeason: 'March to August',
    },
    {
        id: 7,
        name: 'Sri Lanka Whistling Thrush',
        scientificName: 'Myophonus blighi',
        likeNames: ['Ceylon Whistling Thrush'],
        image: SriLankaWhistlingThrush,
        description: 'The Sri Lanka Whistling Thrush is a striking bird endemic to the highland forests of Sri Lanka. It features dark, glossy plumage with a subtle blue sheen that catches the light. This elusive bird is often difficult to spot, as it prefers dense vegetation for cover. Known for its melodious whistling calls, the thrush often sings during the early morning and twilight hours, creating a serene atmosphere in its natural habitat, enhancing the beauty of the Sri Lankan landscape',
        habitat: 'Montane forests and dense undergrowth',
        diet: 'Insects, small invertebrates, and fruits',
        lifespan: '5-7 years',
        size: 'Length 22-23 cm',
        conservationStatus: 'Endangered',
        behavior: 'This species is extremely shy and often hides in dense undergrowth, where it forages for insects and fruit. It is more often heard than seen.',
        breedingSeason: 'February to April',
    },
    {
        id: 8,
        name: 'Sri Lanka Scimitar Babbler',
        scientificName: 'Pomatorhinus melanurus',
        likeNames: ['Ceylon Scimitar Babbler'],
        image: SriLankaScimitarBabbler,
        description: 'The Sri Lanka Scimitar Babbler is a unique bird recognized by its long, curved beak, which it adeptly uses to probe under leaves and bark in search of insects and other small invertebrates. This bird boasts a striking plumage with a combination of brown and olive tones, providing excellent camouflage in its forest habitat. Endemic to Sri Lanka, it prefers dense undergrowth and is often heard before it is seen, as it moves through the foliage with a characteristic scuttling motion.',
        habitat: 'Lowland and montane forests',
        diet: 'Insects, small invertebrates, and fruits',
        lifespan: '6-8 years',
        size: 'Length 22 cm',
        conservationStatus: 'Least Concern',
        behavior: 'Often seen in pairs or small groups, these birds are known for their distinctive, melodious calls. They forage by flicking leaves and probing crevices with their curved beaks.',
        breedingSeason: 'March to May',
    },
    {
        id: 9,
        name: 'Sri Lanka Spot-winged Thrush',
        scientificName: 'Zoothera spiloptera',
        likeNames: ['Ceylon Spot-winged Thrush'],
        image: SriLankaSpotwingedThrush,
        description: 'The Sri Lanka Spot-winged Thrush is a captivating endemic bird characterized by its distinctive spotted wings and vibrant, melodious song. This thrush thrives in the lush forests of Sri Lanka, where it can be spotted foraging on the forest floor for fruits, insects, and berries. With a striking plumage that blends earthy tones with hints of white, it is well-camouflaged among the leaf litter. Its rich and varied song resonates throughout its habitat, particularly during the breeding season.',
        habitat: 'Lowland and montane forests',
        diet: 'Insects, small invertebrates, and fruits',
        lifespan: '6-10 years',
        size: 'Length 23-24 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'This bird is known for its rich, melodious song, which it uses to mark its territory. It forages on the ground for insects and fruits.',
        breedingSeason: 'April to June',
    },
    {
        id: 10,
        name: 'Sri Lanka Swallow',
        scientificName: 'Cecropis hyperythra',
        likeNames: ['Ceylon Swallow'],
        image: SriLankaSwallow,
        description: 'The Sri Lanka Swallow is a small, elegant bird renowned for its glossy blue plumage that glistens in the sunlight. With its slender body and long, forked tail, it is perfectly adapted for aerial acrobatics, performing agile maneuvers as it gracefully swoops over water bodies in search of insects. These swallows are often seen in pairs or small groups, creating a delightful spectacle as they dart and dive through the air, showcasing their agility and speed.',
        habitat: 'Open grasslands, wetlands, and near water bodies',
        diet: 'Flying insects',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These birds are highly agile flyers, often seen chasing insects mid-air. They build mud nests in cliffs and man-made structures.',
        breedingSeason: 'March to May',
    },
    {
        id: 11,
        name: 'Ashy-headed Laughingthrush',
        scientificName: 'Garrulax cinereifrons',
        likeNames: ['Ceylon Laughingthrush'],
        image: AshyHeadedLaughingthrush,
        description: 'This large, colorful babbler is endemic to Sri Lanka and is known for its vibrant plumage and lively social behavior. Typically found in montane forests, it thrives in the lush, dense vegetation where it forages for insects and fruits. This bird is often seen in groups, moving energetically through the trees while communicating with a series of distinctive calls. Its bold colors and playful nature make it a delightful sight for birdwatchers and nature enthusiasts alike.',
        habitat: 'Montane forests',
        diet: 'Insects, small invertebrates, and fruits',
        lifespan: '5-8 years',
        size: 'Length 24-25 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'Highly social and often found in small groups, the Ashy-headed Laughingthrush is known for its distinctive calls and foraging habits.',
        breedingSeason: 'March to May',
    },
    {
        id: 12,
        name: 'Sri Lanka Green Pigeon',
        scientificName: 'Treron pompadora',
        likeNames: ['Ceylon Green Pigeon'],
        image: SriLankaGreenPigeon,
        description: 'The Sri Lanka Green Pigeon is a small, stocky pigeon endemic to Sri Lanka, easily recognized by its striking green plumage and distinctive yellow patches on its wings. This bird prefers forested habitats where it feeds on fruits and leaves. Its unique, soft cooing calls resonate through the trees, often heard in pairs or small groups. With a calm demeanor, the Sri Lanka Green Pigeon blends seamlessly into its lush surroundings, making it a delightful sight for birdwatchers.',
        habitat: 'Lowland rainforests and gardens',
        diet: 'Fruits and berries',
        lifespan: '7-10 years',
        size: 'Length 25-28 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These pigeons are generally found in pairs or small groups, often foraging in fruiting trees.',
        breedingSeason: 'April to July',
    },
    {
        id: 13,
        name: 'Yellow-fronted Barbet',
        scientificName: 'Megalaima flavifrons',
        likeNames: ['Ceylon Yellow-fronted Barbet'],
        image: YellowFrontedBarbet,
        description: 'The Yellow-fronted Barbet is a vibrant green bird characterized by its striking yellow forehead and bright red and black markings on its face. This bird is commonly found in a variety of habitats, including forests, gardens, and urban areas across Sri Lanka. It is known for its loud and distinctive calls, often heard echoing through the trees. The Yellow-fronted Barbet primarily feeds on fruits, insects, and seeds, making it an essential part of its ecosystem.',
        habitat: 'Forest edges, gardens, and urban areas',
        diet: 'Fruits, seeds, and insects',
        lifespan: '5-7 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These barbets are often seen foraging in trees, using their strong bills to crack open fruits and seeds.',
        breedingSeason: 'March to June',
    },
    {
        id: 14,
        name: 'Sri Lanka Spurfowl',
        scientificName: 'Galloperdix bicalcarata',
        likeNames: ['Ceylon Spurfowl'],
        image: SriLankaSpurfowl,
        description: 'The Sri Lanka Spurfowl is a medium-sized bird recognized for its distinctive spurred leg, which it uses during courtship displays. This elusive bird prefers dense underbrush and forest edges, where its cryptic coloration provides excellent camouflage against predators. Its plumage features a mix of browns and blacks, allowing it to blend seamlessly into its surroundings. The Sri Lanka Spurfowl primarily feeds on seeds, fruits, and insects, making it an important species in the ecosystem.',
        habitat: 'Forests, grasslands, and shrublands',
        diet: 'Seeds, fruits, and insects',
        lifespan: '5-8 years',
        size: 'Length 35-40 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'These spurfowls are secretive and often heard rather than seen, using their camouflage to blend into their surroundings.',
        breedingSeason: 'April to July',
    },
    {
        id: 15,
        name: 'Sri Lanka White-eye',
        scientificName: 'Zosterops ceylonensis',
        likeNames: ['Ceylon White-eye'],
        image: SriLankaWhiteEye,
        description: 'The Sri Lanka White-eye is a small, lively bird known for its distinctive white eye-ring and vibrant greenish-yellow plumage. This highly social species is commonly found in forests, gardens, and plantations across Sri Lanka, where it often moves in active flocks. The Sri Lanka White-eye is recognized for its cheerful, chirpy calls and playful behavior, frequently foraging among leaves and branches in search of insects and fruits. Its presence adds charm and liveliness to its natural habitat.',
        habitat: 'Forests, gardens, and plantations',
        diet: 'Insects and fruits',
        lifespan: '3-5 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These white-eyes are active foragers, often seen flitting through trees and bushes in search of food.',
        breedingSeason: 'April to August',
    },
    {
        id: 16,
        name: 'Crimson Fronted Barbet',
        scientificName: 'Megalaima rubricapilla',
        likeNames: ['Ceylon Crimson-fronted Barbet'],
        image: CrimsonFrontedBarbet,
        description: 'The Crimson Fronted Barbet is a visually stunning bird characterized by its vibrant red and green plumage. This medium-sized bird is known for its distinct and melodious calls, which resonate through the forests of Sri Lanka. Often seen perched on branches, it primarily feeds on a diet of fruits, making it a vital player in the ecosystem by aiding in seed dispersal. With its colorful appearance and engaging behavior, the Crimson Fronted Barbet is a delightful sight for birdwatchers and nature enthusiasts.',
        habitat: 'Forest edges and gardens',
        diet: 'Fruits and insects',
        lifespan: '5-10 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These barbets are often found in pairs or small groups, feeding on fruits and occasionally insects.',
        breedingSeason: 'March to June',
    },
    {
        id: 17,
        name: 'Sri Lanka Dull Blue Flycatcher',
        scientificName: 'Eumyias sordidus',
        likeNames: ['Ceylon Dull Blue Flycatcher'],
        image: SriLankaDullBlueFlycatcher,
        description: 'The Sri Lanka Dull Blue Flycatcher is a petite and subtle bird, easily recognized by its muted blue plumage that blends seamlessly with its forest surroundings. This elusive species is commonly found in shaded, forested areas, where it perches quietly on low branches, observing its environment. Known for its gentle demeanor, the flycatcher primarily feeds on insects and small invertebrates, often darting out to catch prey mid-air. Its unobtrusive nature makes it a favorite among birdwatchers seeking quiet moments in nature.',
        habitat: 'Forests and plantations',
        diet: 'Insects and small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 15-18 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'These flycatchers are known for their stealthy hunting techniques, often waiting patiently for insects to pass by.',
        breedingSeason: 'April to August',
    },
    {
        id: 18,
        name: 'Sri Lanka Woodshrike',
        scientificName: 'Tephrodornis affinis',
        likeNames: ['Ceylon Woodshrike'],
        image: SriLankaWoodshrike,
        description: 'The Sri Lanka Woodshrike is a medium-sized bird known for its robust body and striking plumage, featuring a mix of dark and light colors. This bird typically inhabits forested environments, where it blends seamlessly with the foliage. With a sharp, melodious call, it can often be heard echoing through the trees. The woodshrike is an agile hunter, primarily preying on insects and small invertebrates, showcasing impressive aerial skills when catching its food.',
        habitat: 'Forests and shrublands',
        diet: 'Insects, small vertebrates, and fruits',
        lifespan: '5-8 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These woodshrikes are known for their active foraging behavior, often seen moving through the foliage in search of food.',
        breedingSeason: 'March to July',
    },
    {
        id: 19,
        name: 'Sri Lanka Brown-capped Babbler',
        scientificName: 'Pellorneum pallescens',
        likeNames: ['Ceylon Brown-capped Babbler'],
        image: SriLankaBrownCappedBabbler,
        description: 'The Sri Lanka Brown-capped Babbler is a small and secretive bird, easily recognized by its distinctive brown cap and streaked plumage that provides excellent camouflage in its dense undergrowth habitat. This elusive bird often forages close to the ground, searching for insects and other small invertebrates among the leaf litter. Its soft, melodic calls can occasionally be heard, adding to the rich soundscape of Sri Lanka s forests, where it plays an important role in the ecosystem.',
        habitat: 'Forests and scrublands',
        diet: 'Insects and small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 18-20 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'These babblers are often heard before they are seen, using their calls to communicate while foraging.',
        breedingSeason: 'March to August',
    },
    {
        id: 20,
        name: 'Red faced Malkoha',
        scientificName: 'Phaenicophaeus pyrrhocephalus',
        likeNames: ['Ceylon Red-faced Malkoha'],
        image: RedfacedMalkoha,
        description: 'The Red-faced Malkoha is a large, slender bird known for its striking red face and long, elegant tail. Its plumage features shades of green and blue, allowing it to blend into the lush forest surroundings. This bird is often found in dense, tropical forests where it moves stealthily through the foliage, foraging for insects, snails, and small reptiles. Its distinctive calls can be heard echoing through the trees, making it a notable presence in Sri Lanka s avian diversity.',
        habitat: 'Forests and plantations',
        diet: 'Insects, small vertebrates, and fruits',
        lifespan: '5-8 years',
        size: 'Length 45-50 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'These malkohas are known for their secretive nature and are often heard calling from the foliage.',
        breedingSeason: 'April to August',
    },
    {
        id: 21,
        name: 'Sri Lanka Flameback',
        scientificName: 'Chrysocolaptes stricklandi',
        likeNames: ['Ceylon Flameback Woodpecker'],
        image: SriLankaFlameback,
        description: 'The Sri Lanka Flameback is a striking woodpecker distinguished by its vivid coloration, featuring bright yellow, black, and red plumage. This medium-sized bird is known for its distinctive drumming behavior as it taps on tree trunks in search of insects and larvae. Often found in evergreen and deciduous forests, the Flameback is striking appearance and energetic movements make it a delightful sight for birdwatchers. Its loud calls echo through the forest, adding to the rich soundscape of its habitat.',
        habitat: 'Forests and woodlands',
        diet: 'Insects, larvae, and fruits',
        lifespan: '6-10 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'These woodpeckers are known for their loud drumming on trees, often searching for insects beneath the bark.',
        breedingSeason: 'March to July',
    },
    {
        id: 22,
        name: 'Sri Lanka Bush Warbler',
        scientificName: 'Horornis citrinicus',
        likeNames: ['Ceylon Bush Warbler'],
        image: SriLankaBushWarbler,
        description: 'The Sri Lanka Bush Warbler is a small, secretive bird endemic to Sri Lanka. It is known for its soft yet distinctive calls, often heard before the bird is seen. Its drab plumage helps it blend into the dense scrub and forest undergrowth where it lives, making it difficult to spot. The bird is most active during the early mornings and late afternoons, foraging for insects in the thick undergrowth of montane forests.',
        habitat: 'Forests and scrublands',
        diet: 'Insects and small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 12-14 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These warblers are often heard singing from dense cover, making them difficult to spot.',
        breedingSeason: 'April to August',
    },
    {
        id: 23,
        name: 'Sri Lanka Black-capped Bulbul',
        scientificName: 'Pycnonotus melanicterus',
        likeNames: ['Ceylon Black-capped Bulbul'],
        image: SriLankaBlackCappedBulbul,
        description: 'The Sri Lanka Black-capped Bulbul is a medium-sized bird with a striking black cap and bright yellow underparts. This bird is commonly found in gardens, forests, and scrublands across the island. It is known for its melodic calls and active behavior, often seen flitting between trees and shrubs. Its contrasting plumage makes it easy to identify in its natural habitat, and it is an important seed disperser in Sri Lanka’s ecosystems.',
        habitat: 'Forests, gardens, and urban areas',
        diet: 'Fruits, insects, and seeds',
        lifespan: '5-7 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These bulbuls are social birds, often seen in pairs or small flocks, foraging for food together.',
        breedingSeason: 'March to July',
    },
    {
        id: 24,
        name: 'Sri Lanka Puff-throated Babbler',
        scientificName: 'Pellorneum ruficeps',
        likeNames: ['Ceylon Puff-throated Babbler'],
        image: SriLankaPuffThroatedBabbler,
        description: 'The Sri Lanka Puff-throated Babbler is a small, secretive bird known for its soft, repetitive calls and distinctive puffed throat. It is often found in dense undergrowth and scrub areas, where it forages for insects and small invertebrates. Its brownish plumage blends well with its surroundings, making it difficult to spot. This bird is an important part of the island’s forest ecosystems, playing a role in controlling insect populations.',
        habitat: 'Forests and scrublands',
        diet: 'Insects and small invertebrates',
        lifespan: '4-6 years',
        size: 'Length 15-18 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'These babblers are secretive and often seen foraging on the forest floor, using their calls to communicate with one another.',
        breedingSeason: 'April to August',
    },
    {
        id: 25,
        name: 'Chestnut-backed Owlet',
        scientificName: 'Glaucidium castanotum',
        likeNames: ['Ceylon Chestnut-backed Owlet'],
        image: ChestnutbackedOwlet,
        description: 'The Chestnut-backed Owlet is a small, nocturnal bird with rich chestnut-colored plumage and large, expressive eyes. It is primarily found in forested habitats, where it hunts for small prey at night. Its rounded head and compact body give it a distinctive appearance. This owl is known for its territorial nature and its call, which can be heard echoing through the forests during the night.',
        habitat: 'Forests and wooded areas',
        diet: 'Insects, small mammals, and birds',
        lifespan: '5-7 years',
        size: 'Length 20-23 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'These owlets are often seen roosting during the day and are active hunters at night, using their keen eyesight to locate prey.',
        breedingSeason: 'March to June',
    },
    {
        id: 26,
        name: 'Ceylon Crested Drongo',
        scientificName: 'Dicrurus lophorinus',
        likeNames: ['Sri Lanka Crested Drongo'],
        image: CeylonCrestedDrongo,
        description: 'The Ceylon Crested Drongo is a sleek, glossy black bird with a prominent crest on its head. It is highly intelligent and known for its remarkable ability to mimic the calls of other birds. Often found in forests, it is also an agile flier, chasing insects mid-air. Its bold behavior and striking appearance make it a standout in its natural habitat.',
        habitat: 'Forests, gardens, and urban areas',
        diet: 'Insects and fruits',
        lifespan: '5-8 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These drongos are known for their playful nature and often engage in aerial displays and mimicry of other bird calls.',
        breedingSeason: 'April to August',
    },
    {
        id: 27,
        name: 'Serendib Scops Owl',
        scientificName: 'Otus thilohoffmanni',
        likeNames: ['Ceylon Scops Owl'],
        image: SerendibScopsOwl,
        description: 'The Serendib Scops Owl is a small, nocturnal owl with distinctive ear tufts and striking eyes. Endemic to Sri Lanka, this elusive bird is typically found in dense forests. Its soft, high-pitched calls are often heard at night, making it difficult to spot during the day. The owls brown and grey plumage helps it blend into its surroundings, offering excellent camouflage in its forest habitat.',
        habitat: 'Forests and wooded areas',
        diet: 'Insects, small mammals, and reptiles',
        lifespan: '5-10 years',
        size: 'Length 20-25 cm',
        conservationStatus: 'Endangered',
        behavior: 'These owls are known for their silent flight and ability to blend into their surroundings, making them effective hunters at night.',
        breedingSeason: 'February to June',
    },
    {
        id: 28,
        name: 'Ceylon White-headed Starling',
        scientificName: 'Sturnus melanopterus',
        likeNames: ['Sri Lanka White-headed Starling'],
        image: CeylonWhiteheadedStarling,
        description: 'The Ceylon White-headed Starling is a medium-sized bird, easily recognized by its striking white head and dark body. It is often found in both urban and forested areas. This species is social and usually seen in flocks, where it displays active, agile behavior. The contrast of its bright head with the darker feathers makes it a distinctive presence in its habitats.',
        habitat: 'Urban areas and gardens',
        diet: 'Fruits, insects, and scraps',
        lifespan: '5-8 years',
        size: 'Length 20-22 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'These starlings are known for their social behavior and often form large flocks, foraging together for food.',
        breedingSeason: 'March to June',
    },
    {
        id: 29,
        name: 'Green-billed Coucal',
        scientificName: 'Centropus chlororhynchos',
        likeNames: ['Ceylon Green-billed Coucal'],
        image: GreenbilledCoucal,
        description: 'The Green-billed Coucal is a large, elusive bird known for its distinctive green bill and brownish plumage. Often found in dense vegetation and forested areas, this bird is shy and tends to remain hidden in the undergrowth. It has a slow, deliberate movement and is known for its ability to remain motionless while stalking prey or foraging. Its unique bill color sets it apart from other coucal species.',
        habitat: 'Forests and scrublands',
        diet: 'Insects, small mammals, and fruits',
        lifespan: '5-7 years',
        size: 'Length 40-50 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These coucals are often heard before they are seen, using their deep calls to communicate while foraging.',
        breedingSeason: 'April to August',
    },
    {
        id: 30,
        name: 'Sri Lanka Hill Myna',
        scientificName: 'Gracula ptilogenys',
        likeNames: ['Ceylon Hill Myna'],
        image: SriLankaHillMyna,
        description: 'The Sri Lanka Hill Myna is a medium-sized bird with distinctive yellow facial patches and glossy black plumage. Known for its loud, varied calls and ability to mimic sounds, this bird is often seen in both urban environments and forested areas. It tends to perch in high branches and is social, frequently found in pairs or small groups. Its vocal nature and striking appearance make it a noticeable presence wherever it resides.',
        habitat: 'Forests and urban areas',
        diet: 'Fruits, insects, and nectar',
        lifespan: '5-10 years',
        size: 'Length 25-30 cm',
        conservationStatus: 'Vulnerable',
        behavior: 'These mynas are social birds, often seen in pairs or small flocks, and are known for their vocalizations and mimicry.',
        breedingSeason: 'March to July',
    },
    {
        id: 31,
        name: 'Sri Lanka Grey Hornbill',
        scientificName: 'Ocyceros gingalensis',
        likeNames: ['Ceylon Grey Hornbill'],
        image: SriLankaGreyHornbill,
        description: 'The Sri Lanka Grey Hornbill is a large bird with a prominent curved bill and greyish-brown plumage. Its unique bill, which lacks the bright colors seen in other hornbills, helps distinguish it. This bird is typically found in forested areas, where it is known for its loud calls and strong, direct flight. It is often seen in pairs or small groups, foraging for fruits and insects high in the tree canopy.',
        habitat: 'Forests and woodlands',
        diet: 'Fruits, insects, and small animals',
        lifespan: '6-8 years',
        size: 'Length 50-55 cm',
        conservationStatus: 'Near Threatened',
        behavior: 'These hornbills are known for their distinctive calls and are often seen in pairs, foraging for fruits and insects.',
        breedingSeason: 'April to July',
    },
    {
        id: 32,
        name: 'White-throated Flowerpecker',
        scientificName: 'Dicaeum vincens',
        likeNames: ['Ceylon White-throated Flowerpecker'],
        image: WhitethroatedFlowerpecker,
        description: 'The White-throated Flowerpecker is a small, colorful bird recognized for its vibrant yellow belly and striking white throat. This bird is often seen flitting among flowering trees, where it feeds on nectar and small insects. Its energetic behavior and rapid movements make it a delightful sight for birdwatchers. Typically found in pairs or small groups, the White-throated Flowerpecker plays a crucial role in pollination, helping to sustain the ecosystem in its native habitat.',
        habitat: 'Forests and gardens',
        diet: 'Nectar and small insects',
        lifespan: '3-5 years',
        size: 'Length 10-12 cm',
        conservationStatus: 'Least Concern',
        behavior: 'These flowerpeckers are known for their active foraging behavior, often seen hovering around flowers to feed on nectar.',
        breedingSeason: 'April to August',
    }
];




const BirdInfo = () => {
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
                    <p><strong>Other Names:</strong> {bird.likeNames.join(', ')}</p>
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

export default BirdInfo;
