import React from 'react';
import { useParams } from 'react-router-dom';
import NavPage from './Nav';

import SinharajaForestReserve1 from '../Assets/Sightings/Sinharaja Forest Reserve.jpg';
import SinharajaForestReserve2 from '../Assets/Sightings/SinharajaForestReserve2.jpg';
import SinharajaForestReserve3 from '../Assets/Sightings/SinharajaForestReserve3.jpg';
import SinharajaForestReserve4 from '../Assets/Sightings/SinharajaForestReserve4.webp';
import SinharajaForestReserve5 from '../Assets/Sightings/SinharajaForestReserve5.jpg';
import SinharajaForestReserve6 from '../Assets/Sightings/SinharajaForestReserve6.jpg';

import Kanneliya1 from '../Assets/Sightings/Kanneliya Forest.webp';
import Kanneliya2 from '../Assets/Sightings/Kanneliya2.jpeg';
import Kanneliya3 from '../Assets/Sightings/Kanneliya3.jpg';
import Kanneliya4 from '../Assets/Sightings/Kanneliya4.jpg';
import Kanneliya5 from '../Assets/Sightings/Kanneliya5.jpg';
import Kanneliya6 from '../Assets/Sightings/Kanneliya6.jpg';

import Kumana1 from '../Assets/Sightings/KumanaNationalPark.jpg';
import Kumana2 from '../Assets/Sightings/Kumana2.jpg';
import Kumana3 from '../Assets/Sightings/Kumana3.jpg';
import Kumana4 from '../Assets/Sightings/Kumana4.webp';
import Kumana5 from '../Assets/Sightings/Kumana5.webp';
import Kumana6 from '../Assets/Sightings/Kumana6.webp';

import Yala1 from '../Assets/Sightings/Yala1.jpeg';
import Yala2 from '../Assets/Sightings/Yala2.webp';
import Yala3 from '../Assets/Sightings/YalaNationalPark.jpg';
import Yala4 from '../Assets/Sightings/Yala4.jpg';
import Yala5 from '../Assets/Sightings/Yala5.jpg';
import Yala6 from '../Assets/Sightings/Yala6.webp';

import Hortonplains1 from '../Assets/Sightings/Horton Plains .jpg';
import Hortonplains2 from '../Assets/Sightings/Hortonplains2.jpeg';
import Hortonplains3 from '../Assets/Sightings/Hortainplains3.jpg';
import Hortonplains4 from '../Assets/Sightings/Hortonplains4.jpg';
import Hortonplains5 from '../Assets/Sightings/Hortainplains5.jpg';
import Hortonplains6 from '../Assets/Sightings/Hortonplains6.jpeg';

import Bundala1 from '../Assets/Sightings/Bundala National Park.jpg';
import Bundala2 from '../Assets/Sightings/Bundala2.png';
import Bundala3 from '../Assets/Sightings/Bundala3.jpg';
import Bundala4 from '../Assets/Sightings/Bundala4.jpg';
import Bundala5 from '../Assets/Sightings/Bundala5.jpg';
import Bundala6 from '../Assets/Sightings/Bundala5.jpeg';

import Anawilundawa1 from '../Assets/Sightings/Anawilundawa Wetland Sanctuary.jpg';
import Anawilundawa2 from '../Assets/Sightings/Anawilundawa2.png';
import Anawilundawa3 from '../Assets/Sightings/Anawilundawa3.jpg';
import Anawilundawa4 from '../Assets/Sightings/Anawilundawa4.webp';
import Anawilundawa5 from '../Assets/Sightings/Anawilundawa5.jpeg';
import Anawilundawa6 from '../Assets/Sightings/Anawilundawa6.jpeg';

import Knuckles1 from '../Assets/Sightings/Knuckles Forest Reserve.jpg';
import Knuckles2 from '../Assets/Sightings/Knuckles2.jpg';
import Knuckles3 from '../Assets/Sightings/Knuckles3.jpg';
import Knuckles4 from '../Assets/Sightings/Knuckles4.jpeg';
import Knuckles5 from '../Assets/Sightings/Knuckles5.jpg';
import Knuckles6 from '../Assets/Sightings/Knuckles6.jpg';

import Sigiriya1 from '../Assets/Sightings/Sigiriya Bird Sanctuary.jpg';
import Sigiriya2 from '../Assets/Sightings/Sigiriya2.jpg';
import Sigiriya3 from '../Assets/Sightings/Sigiriya3.webp';
import Sigiriya4 from '../Assets/Sightings/Sigiriya4.jpg';
import Sigiriya5 from '../Assets/Sightings/Sigiriya5.jpg';
import Sigiriya6 from '../Assets/Sightings/Sigiriya6.jpeg';

import Thalangama1 from '../Assets/Sightings/thalangama wetland park.jpg';
import Thalangama2 from '../Assets/Sightings/Thalangama2.jpeg';
import Thalangama3 from '../Assets/Sightings/Thalangama3.jpg';
import Thalangama4 from '../Assets/Sightings/Thalangama4.jpeg';
import Thalangama5 from '../Assets/Sightings/Thalangama5.jpg';
import Thalangama6 from '../Assets/Sightings/Thalangama6.jpg';

import Mannar1 from '../Assets/Sightings/Mannar Island .webp';
import Mannar2 from '../Assets/Sightings/Mannar2.avif';
import Mannar3 from '../Assets/Sightings/Mannar3.webp';
import Mannar4 from '../Assets/Sightings/Mannar4.jpg';
import Mannar5 from '../Assets/Sightings/Mannar5.jpg';
import Mannar6 from '../Assets/Sightings/Mannar6.jpg';

import Beddagana1 from '../Assets/Sightings/Beddagana Wetland Park.jpg';
import Beddagana2 from '../Assets/Sightings/Beddagana2.webp';
import Beddagana3 from '../Assets/Sightings/Beddagana3.png';
import Beddagana4 from '../Assets/Sightings/Beddagana4.jpg';
import Beddagana5 from '../Assets/Sightings/Beddagana5.webp';
import Beddagana6 from '../Assets/Sightings/Beddagana6.jpg';

import Wilpattu1 from '../Assets/Sightings/Wilpattu National Park.jpg';
import Wilpattu2 from '../Assets/Sightings/Wilpattu2.webp';
import Wilpattu3 from '../Assets/Sightings/Wilpattu3.jpeg';
import Wilpattu4 from '../Assets/Sightings/Wilpattu4.jpg';
import Wilpattu5 from '../Assets/Sightings/Wilpattu5.webp';
import Wilpattu6 from '../Assets/Sightings/Wilpattu6.jpeg';




const sightingsData = [
    {
        id: 1,
        name: 'Sinharaja Forest Reserve',
        briefInfo: 'Sinharaja Forest Reserve, a UNESCO World Heritage Site, is one of Sri Lanka’s last remaining primary rainforests. It is globally recognized for its high biodiversity and ecological significance. The forest is home to a vast array of flora and fauna, many of which are endemic to Sri Lanka. Visitors can experience its dense canopy, diverse birdlife, and rich wildlife, making it a paradise for nature enthusiasts. Conservation efforts have played a crucial role in preserving Sinharaja’s delicate ecosystem, ensuring its survival for future generations despite environmental challenges.',
        locationDetails: 'Nestled in the southwestern wet zone of Sri Lanka, Sinharaja Forest Reserve spans approximately 11,000 acres of lush greenery. The forest stretches across the districts of Galle, Matara, and Ratnapura, featuring rugged terrain with steep ridges and dense foliage. Numerous streams and rivers meander through the forest, providing essential water sources for its rich biodiversity. Due to its remote location, access to Sinharaja is mainly through designated entry points in Deniyaya, Kudawa, and Pitadeniya, offering controlled access to minimize environmental impact while promoting sustainable tourism and research opportunities.',
        environmentalConditions: 'Sinharaja experiences a tropical rainforest climate with consistently high humidity levels exceeding 75%. Annual rainfall surpasses 3,500 mm, primarily during the monsoon seasons, contributing to the forest’s lush, green landscape. The temperature remains relatively stable, ranging between 20°C and 25°C, creating a cool, shaded environment beneath its dense canopy. The ecosystem thrives on these humid conditions, supporting a vast network of flora and fauna. Despite its resilience, the forest remains vulnerable to climate change and deforestation, underscoring the need for continued conservation efforts to maintain its delicate balance.',       
        notableBirds: 'Sinharaja is a birdwatcher’s paradise, boasting over 147 species of birds, including 21 of Sri Lanka’s 33 endemic bird species. Among the most striking inhabitants is the Sri Lanka Blue Magpie, with its vibrant blue plumage and distinct vocalizations. The Sri Lanka Junglefowl, the island’s national bird, roams the undergrowth, while the Orange-billed Babbler is often seen in noisy flocks. These birds, along with numerous other species, thrive in the forest’s dense vegetation, relying on its rich insect population, fruit-bearing trees, and unspoiled habitat for survival.',      
        conservationStatus: 'Sinharaja Forest Reserve is legally protected as a National Wilderness Area and has been designated a Biosphere Reserve by UNESCO. Despite its protected status, the forest faces ongoing threats from illegal logging, encroachment, and climate change. Conservation initiatives focus on habitat restoration, sustainable tourism practices, and community involvement to ensure the forest remains undisturbed. Environmental organizations and government agencies continue to monitor biodiversity within the reserve, advocating for stricter policies to protect its unique ecosystem. These efforts are crucial in preserving Sinharaja’s ecological heritage for future generations.',   
        bestTimeToVisit: 'The best time to visit Sinharaja Forest Reserve is between December and April, as this period experiences relatively lower rainfall, making hiking and wildlife spotting more comfortable. The dry season allows for easier trekking through the dense jungle while still showcasing the vibrant greenery and diverse wildlife. Early mornings are ideal for birdwatching, as the rainforest awakens with the calls of endemic and migratory birds. Although monsoon months bring heavier rainfall, they also enhance the forest’s beauty, with waterfalls and streams flowing at their fullest, offering a breathtaking experience for adventure seekers.',
        images: [SinharajaForestReserve1, SinharajaForestReserve5,SinharajaForestReserve6,SinharajaForestReserve3,SinharajaForestReserve4,SinharajaForestReserve2]
    },
    
    {
        id: 2,
        name: 'Kanneliya Forest Reserve',
        briefInfo: 'Kanneliya Forest Reserve, part of Sri Lanka’s Kanneliya-Dediyagala-Nakiyadeniya (KDN) complex, is a tropical lowland rainforest known for its remarkable biodiversity. It is home to a variety of endemic flora and fauna, including towering trees, rare amphibians, and diverse bird species. With its dense canopy, cascading waterfalls, and nature trails, Kanneliya offers visitors an immersive experience into Sri Lanka’s rich natural heritage. Conservation efforts continue to protect this valuable ecosystem from deforestation and habitat destruction, ensuring its survival for future generations.',
        locationDetails: 'Located in the Galle District of southern Sri Lanka, Kanneliya Forest Reserve spans approximately 10,139 hectares of lush greenery. The forest is about 35 km northeast of Galle and is easily accessible from major towns like Udugama. As part of the KDN forest complex, it plays a crucial role in the region’s watershed system, feeding rivers such as the Gin Ganga and Nilwala Ganga. The terrain consists of rolling hills, valleys, and streams, offering a unique landscape for eco-tourism, research, and conservation activities.',
        environmentalConditions: 'Kanneliya experiences a tropical rainforest climate with high humidity and frequent rainfall throughout the year. The average temperature ranges between 22°C and 28°C, creating a cool and moist environment ideal for diverse plant and animal life. The forest receives annual rainfall exceeding 3,500 mm, mainly during the southwest monsoon. These conditions support a rich ecosystem, from towering Dipterocarp trees to small endemic creatures. However, the forest remains vulnerable to climate change, illegal logging, and human encroachment, highlighting the need for ongoing conservation efforts.',
        notableBirds: 'Kanneliya Forest is a paradise for birdwatchers, hosting over 100 bird species, including 20 endemics. Notable species include the Sri Lanka Spurfowl, the striking Red-faced Malkoha, and the endemic Green-billed Coucal. The Sri Lanka Grey Hornbill is another highlight, often seen gliding through the dense canopy. The abundance of insects and fruit-bearing trees supports a thriving avian population, making Kanneliya an excellent destination for ornithologists and nature lovers alike.',
        conservationStatus: 'Kanneliya Forest Reserve is a designated biosphere reserve, recognized for its ecological significance. Despite its protected status, illegal logging and human encroachment pose ongoing threats. Conservation programs focus on reforestation, sustainable tourism, and community engagement to minimize environmental impact. Government agencies and environmental organizations actively monitor the forest’s biodiversity, ensuring long-term protection. These conservation efforts aim to preserve Kanneliya’s fragile ecosystem and maintain its role as a vital watershed in Sri Lanka’s lowland rainforest region.',
        bestTimeToVisit: 'The best time to visit Kanneliya Forest Reserve is between December and April, when rainfall is relatively lower, making trekking and wildlife exploration more enjoyable. The dry season provides ideal conditions for hiking along nature trails and discovering the forest’s waterfalls, streams, and endemic wildlife. Early mornings are best for birdwatching, as the forest comes alive with the calls of various endemic species. While monsoon months bring lush greenery and increased water flow in rivers and waterfalls, they also result in slippery trails, making trekking more challenging for visitors.',
        images: [Kanneliya1,Kanneliya2,Kanneliya3,Kanneliya4,Kanneliya5,Kanneliya6]
    },
    {
        id: 3,
        name: 'Kumana National Park',
        briefInfo: 'Kumana National Park, located in the eastern province of Sri Lanka, is a renowned bird sanctuary and a significant wildlife reserve. It is famous for its large populations of migratory and resident birds, including rare species like the Black-necked Stork and Eurasian Spoonbill. The park is also home to elephants, leopards, crocodiles, and other diverse wildlife. Kumana’s unspoiled wetlands, lagoons, and mangroves provide an ideal habitat for birds and aquatic life, making it a paradise for nature lovers, wildlife photographers, and birdwatching enthusiasts.',
        locationDetails: 'Situated in the Ampara District, Kumana National Park spans over 35,000 hectares and is bordered by Yala National Park to the west. The Kumbukkan Oya River forms the park’s southern boundary, supplying water to the lush wetlands and lagoons. The park’s unique landscape includes open grasslands, dry-zone forests, and mangrove swamps, creating a diverse ecosystem. The main entrance is via Panama, a small coastal village near Arugam Bay, making Kumana accessible for visitors traveling from the eastern coast of Sri Lanka.',
        environmentalConditions: 'Kumana has a dry-zone tropical climate, with temperatures ranging from 26°C to 32°C throughout the year. The park experiences seasonal monsoons, with the northeastern monsoon bringing rainfall from November to January. Despite its dry conditions for most of the year, the park’s water bodies, including the famous Kumana Villu wetland, provide a vital water source for its rich biodiversity. The dry season (May to September) is particularly favorable for wildlife viewing, as animals gather around waterholes and lagoons.',
        notableBirds: 'Kumana is one of Sri Lanka’s most important bird sanctuaries, boasting over 200 recorded bird species. Among its most notable avian residents are the Painted Stork, Great Thick-knee, and the rare Black-necked Stork. The Kumana Villu, a large swampy wetland, serves as a prime nesting ground for thousands of migratory birds during the breeding season. Other frequently spotted species include the Lesser Adjutant, Spoonbill, and various species of egrets, herons, and pelicans. The park is a must-visit destination for birdwatchers seeking to witness these spectacular birds in their natural habitat.',
        conservationStatus: 'Kumana National Park is a protected wildlife reserve under the Department of Wildlife Conservation in Sri Lanka. Despite its status, the park faces challenges such as illegal poaching, habitat destruction, and occasional human-wildlife conflicts. Conservation initiatives focus on maintaining the wetland ecosystem, protecting nesting grounds, and promoting sustainable tourism practices. The park’s connection to Yala National Park enhances its ecological value, ensuring that migratory animals and birds have a safe passage between protected areas.',
        bestTimeToVisit: 'The best time to visit Kumana National Park is between April and July, which coincides with the peak migratory bird nesting season. This period offers excellent opportunities to witness thousands of birds gathering at the Kumana Villu and other wetlands. The dry season from May to September is also ideal for spotting larger wildlife like elephants and leopards. Early morning and late afternoon safaris provide the best chances for wildlife sightings, as temperatures are cooler and animals are more active near water sources.',
        images: [Kumana1,Kumana2,Kumana3,Kumana4,Kumana5,Kumana6]
    },
    
    {
        id: 4,
        name: 'Horton Plains National Park',
        briefInfo: 'Horton Plains National Park is a breathtaking plateau located in Sri Lanka’s central highlands. It is known for its montane grasslands, cloud forests, and diverse wildlife, including the elusive Sri Lankan leopard and endemic species like the purple-faced langur. The park’s most famous attraction, World’s End, offers a dramatic 870-meter drop with panoramic views of the surrounding landscapes. Horton Plains is a UNESCO World Heritage Site and serves as an essential watershed for Sri Lanka’s major rivers. Its rich biodiversity and scenic beauty make it a must-visit destination for nature lovers and hikers.',
        locationDetails: 'Situated in the Nuwara Eliya District, Horton Plains National Park lies at an altitude of about 2,100–2,300 meters above sea level. The park is accessible via Ohiya, Pattipola, or Nuwara Eliya, with the closest major town being Nuwara Eliya, often called "Little England" due to its cool climate. The terrain consists of vast grasslands interspersed with misty forests, waterfalls, and rocky outcrops. The park is also the source of important rivers, including the Mahaweli, Kelani, and Walawe Rivers, which provide water for much of the island.',
        environmentalConditions: 'Horton Plains experiences a cool and misty climate, with temperatures ranging between 5°C and 20°C. It receives significant rainfall throughout the year, particularly during the monsoon seasons from April to September and October to December. The park’s unique montane ecosystem supports a variety of flora and fauna, including many endemic plant species. The cool temperatures and frequent mist create an ethereal atmosphere, making it one of the most scenic national parks in Sri Lanka. However, the fragile ecosystem is sensitive to climate change and human activity.',
        notableBirds: 'Horton Plains is a paradise for birdwatchers, with over 87 bird species recorded, including 21 endemics. The Sri Lanka Whistling Thrush, Sri Lanka Bush Warbler, and Dull-blue Flycatcher are some of the rarest and most sought-after birds in the park. Other notable species include the Yellow-eared Bulbul, Sri Lanka White-eye, and the Mountain Hawk-Eagle. Due to its elevation and vegetation, the park attracts many migratory birds as well, making it an excellent destination for avian enthusiasts.',
        conservationStatus: 'Horton Plains is a protected national park and part of the UNESCO Central Highlands World Heritage Site. Despite its conservation status, threats such as deforestation, illegal tourism activities, and pollution pose risks to the delicate ecosystem. Efforts to preserve the park include strict regulations on waste disposal, controlled visitor entry, and reforestation initiatives. Authorities are also working to protect endemic species and minimize human impact to ensure the park’s sustainability for future generations.',
        bestTimeToVisit: 'The best time to visit Horton Plains is between January and March, when the weather is relatively dry and visibility is at its best for scenic views, especially at World’s End. Mornings are the ideal time for hikes, as the mist tends to cover the landscapes later in the day. The park is open year-round, but visitors should be prepared for sudden weather changes and bring warm clothing due to the cool temperatures at higher altitudes.',
        images: [Hortonplains1, Hortonplains2,Hortonplains3,Hortonplains4, Hortonplains5, Hortonplains6]
    },
    {
        id: 5,
        name: 'Bundala National Park',
        briefInfo: 'Bundala National Park, located in southern Sri Lanka, is a coastal wetland sanctuary known for its rich biodiversity. It features a mix of lagoons, sand dunes, and scrub forests. As Sri Lanka’s first Ramsar wetland site, it plays a critical role in supporting migratory birds, particularly the greater flamingo. The park is also home to over 200 bird species, elephants, crocodiles, and various reptiles. The park’s scenic landscapes and diverse wildlife make it an excellent destination for birdwatching, wildlife photography, and nature exploration.',
        locationDetails: 'Bundala National Park is situated in the Hambantota District, around 245 km from Colombo. Spanning 6,200 hectares, it is easily accessible via the Wellawaya-Hambantota Road. The park lies between Kirinda and Hambantota, along the southern coast of Sri Lanka, bordered by the Indian Ocean. This strategic location makes it an ideal spot for eco-tourism and wildlife observation. Its proximity to nearby attractions like Yala National Park further enhances its appeal to nature lovers and wildlife photographers looking to explore Sri Lanka’s diverse landscapes and ecosystems.',
        environmentalConditions: 'The park experiences an arid climate, with temperatures ranging between 27°C and 32°C year-round. Most rainfall occurs between October and January, during the northeast monsoon season. Despite the dry conditions, Bundala’s lagoons, wetlands, and coastal dunes support a wide variety of wildlife. The park’s ecosystems provide a stable environment for both aquatic and terrestrial animals. The combination of coastal, wetland, and scrubland habitats creates a unique ecological balance, making it a haven for migratory birds and a thriving sanctuary for native wildlife despite the challenges posed by its dry climate.',
        notableBirds: 'Bundala National Park is renowned for its diverse birdlife, with over 200 recorded species. The park’s most famous visitors are the greater flamingos, which migrate here in large flocks during the season. Other notable bird species include the Eurasian Spoonbill, Black-headed Ibis, Painted Stork, and several species of terns and waders. The park also attracts migratory birds like the Indian Peafowl and Caspian Tern. With its varied habitats, including wetlands, lagoons, and coastal dunes, Bundala is a prime location for birdwatching enthusiasts, offering excellent opportunities to observe both resident and migratory species.',
        conservationStatus: 'Bundala was declared a national park in 1993 and is a designated Ramsar wetland site, emphasizing its global importance for biodiversity conservation. The park faces conservation challenges, including habitat degradation, illegal fishing, and the impacts of climate change. Efforts to preserve its biodiversity include initiatives to protect critical habitats for migratory birds and native wildlife. The park is also focusing on controlling invasive species and promoting sustainable eco-tourism practices. Ongoing conservation programs aim to balance wildlife protection with the development of eco-friendly tourism, helping to safeguard Bundala’s natural heritage for future generations.',
        bestTimeToVisit: 'The best time to visit Bundala National Park is between September and March, when migratory birds, including flamingos, flock to the park’s wetlands. The dry season ensures optimal birdwatching conditions, with early mornings and late afternoons offering the best opportunities to spot a wide variety of birds and other wildlife. Visiting during these months also allows for a more comfortable experience, as the park can get quite hot during midday. While accessible year-round, the peak migratory season offers the most rewarding wildlife encounters, particularly for bird enthusiasts and photographers.',
        images: [Bundala1, Bundala2,Bundala3,Bundala4,Bundala5,Bundala6]
    },        
    {
        id: 6,
        name: 'Yala National Park',
        briefInfo: 'Yala National Park, the most visited and second-largest park in Sri Lanka, is renowned for its high density of leopards. Spanning over 978 square kilometers, it features diverse ecosystems, from dry forests and grasslands to wetlands. The park is home to elephants, sloth bears, crocodiles, and over 200 bird species. Its dramatic landscapes, including rocky outcrops and coastal lagoons, make it a must-visit for wildlife enthusiasts and photographers seeking to capture the beauty of Sri Lanka’s wilderness.',
        locationDetails: 'Yala National Park is located in southeastern Sri Lanka, spanning the Hambantota and Monaragala districts. It is approximately 300 km from Colombo and accessible through Tissamaharama. The park is divided into five blocks, with Block 1 being the most popular for safaris due to its high concentration of wildlife. The park’s eastern boundary meets the Indian Ocean, creating a stunning mix of forest, wetland, and coastal habitats, which makes Yala a top destination for wildlife exploration.',
        environmentalConditions: 'Yala experiences a dry zone climate with temperatures ranging from 26°C to 33°C. The northeast monsoon season from October to January brings some rainfall, while the dry season from May to September creates perfect conditions for wildlife sightings. The park features scrub forests, grasslands, and wetlands, which support diverse animal life. Despite its thriving ecosystem, the park faces challenges, such as deforestation and human-wildlife conflict, requiring continued conservation efforts.',
        notableBirds: 'Yala is home to over 200 bird species, including both endemic and migratory birds. Notable species include the Sri Lanka Grey Hornbill, Painted Stork, Black-necked Stork, and Crested Serpent Eagle. The park’s coastal wetlands attract waterbirds, such as Lesser Flamingos, Eurasian Spoonbills, and Whimbrels. The diversity of habitats within the park makes it a paradise for birdwatchers, who can spot a wide variety of bird species throughout the year.',
        conservationStatus: 'Yala National Park is protected under the Department of Wildlife Conservation, but it faces threats such as illegal poaching, habitat destruction, and unregulated tourism. Conservation efforts are focused on habitat restoration, anti-poaching initiatives, and raising awareness in local communities about the importance of preserving the park’s biodiversity. The park’s status as a protected area helps mitigate some of these challenges, but continuous monitoring and enforcement are needed to ensure its long-term survival.',
        bestTimeToVisit: 'The best time to visit Yala National Park is from February to July, during the dry season, when animals gather around water sources, providing optimal wildlife viewing opportunities. Early morning and late afternoon safaris are ideal for spotting leopards and other wildlife. The park is closed annually in September for maintenance and to allow the ecosystem to recover. Visitors during the dry months enjoy better access to the park’s wildlife and stunning landscapes.',
        images: [Yala1, Yala2, Yala3, Yala4, Yala5, Yala6]
    },    
    {
        id: 7,
        name: 'Anawilundawa Wetland Sanctuary',
        briefInfo: 'Anawilundawa Wetland Sanctuary is a Ramsar-listed wetland, known for its ecological diversity and role as a vital habitat for migratory birds. The wetland system, comprising freshwater lakes, mangroves, and marshes, supports a wide variety of bird species, amphibians, and aquatic life. It is an essential breeding ground for fish and provides shelter to numerous endemic and endangered species. The sanctuary is an excellent destination for birdwatchers and eco-tourists. Conservation initiatives focus on protecting its delicate ecosystem from pollution and encroachment while promoting sustainable tourism and environmental awareness among visitors and local communities.',
        locationDetails: 'Located in the Puttalam District, about 100 km north of Colombo, Anawilundawa Wetland Sanctuary is positioned between the coastal belt and inland forests. Covering approximately 1,400 hectares, the sanctuary consists of interconnected tanks, marshlands, and mangrove forests. It is situated near Chilaw, making it an easily accessible destination for nature enthusiasts. The wetland plays a crucial role in supporting local fisheries and agriculture by maintaining water cycles and providing a natural habitat for fish breeding. The area’s strategic location enhances its ecological importance, offering a refuge for both resident and migratory bird species.',
        environmentalConditions: 'Anawilundawa experiences a tropical climate with high humidity and temperatures ranging from 27°C to 32°C throughout the year. It receives significant rainfall during the southwest monsoon, ensuring the wetland remains lush and supports aquatic life. The sanctuary comprises diverse ecosystems, including freshwater lakes, brackish marshes, and mangrove forests, which contribute to its high biodiversity. Despite its ecological richness, the wetland faces environmental challenges such as pollution, illegal encroachment, and climate change. Conservation efforts focus on habitat restoration, sustainable water management, and community-based initiatives to protect its fragile ecosystem from further degradation.',
        notableBirds: 'The sanctuary is home to over 150 species of birds, including both endemic and migratory species. Notable residents include the Black-crowned Night Heron, Painted Stork, Open-billed Stork, and Purple Heron. Migratory species such as Garganeys, Eurasian Spoonbills, and Lesser Whistling Ducks visit the wetland seasonally. The wetland’s diverse habitats, including reed beds, open water, and mudflats, provide ideal conditions for nesting and feeding. Birdwatchers can witness large flocks of birds gathering around the water bodies, making Anawilundawa one of the best birdwatching locations in Sri Lanka, particularly during the peak migratory season.',
        conservationStatus: 'Anawilundawa Wetland Sanctuary is protected under Sri Lankan law and is designated as a Ramsar Wetland of International Importance. Despite its protected status, the wetland faces threats from illegal encroachment, water pollution, and unsustainable fishing practices. Conservation programs aim to restore wetland habitats, improve water quality, and strengthen enforcement against illegal activities. Community-based initiatives encourage local participation in conservation, raising awareness about the wetland’s importance. The Department of Wildlife Conservation and environmental organizations work together to monitor biodiversity and implement sustainable management practices to ensure the long-term protection of this critical ecosystem.',
        bestTimeToVisit: 'The best time to visit Anawilundawa Wetland Sanctuary is between October and April, when migratory birds arrive in large numbers. Early mornings and late afternoons provide the best opportunities for birdwatching, as birds are most active during these times. The dry season allows for easier access to trails and better visibility of wildlife. During the monsoon, the wetland becomes more vibrant, with lush greenery and abundant water sources attracting even more wildlife. Visitors are encouraged to bring binoculars, wear neutral-colored clothing, and maintain a respectful distance from nesting sites to avoid disturbing the birds.',
        images: [Anawilundawa1,Anawilundawa2,Anawilundawa3,Anawilundawa4,Anawilundawa5,Anawilundawa6]
    },
    {
        id: 8,
        name: 'Knuckles Forest Reserve',
        briefInfo: 'Knuckles Forest Reserve, a UNESCO-listed biosphere reserve, is a biodiversity hotspot with rugged mountain peaks, misty valleys, and dense forests. Named after its knuckle-shaped mountain range, the reserve spans over 30,000 hectares and supports a vast array of flora and fauna, many of which are endemic to Sri Lanka. Known for its stunning landscapes, cascading waterfalls, and scenic hiking trails, Knuckles is a paradise for nature lovers and adventure seekers. The reserve plays a crucial role in water conservation, feeding major river systems. Conservation efforts focus on protecting its delicate ecosystem from deforestation and climate change threats.',
        locationDetails: 'Located in central Sri Lanka, Knuckles Forest Reserve spreads across the Matale and Kandy districts, forming part of the Central Highlands. It lies approximately 40 km northeast of Kandy, covering an elevation range from 900 m to over 2,000 m above sea level. The region features diverse terrains, including cloud forests, grasslands, and montane forests. Several rivers, such as the Mahaweli and Kalu Ganga, originate from Knuckles, supplying freshwater to surrounding communities. The reserve’s remoteness preserves its natural beauty, with access points mainly via trekking routes from villages like Riverston, Meemure, and Hunnasgiriya.',
        environmentalConditions: 'Knuckles Forest Reserve experiences a tropical montane climate with cool temperatures ranging from 5°C to 25°C, depending on altitude. Rainfall exceeds 3,000 mm annually, primarily during the monsoon seasons, contributing to its lush greenery and misty atmosphere. The region’s high elevation and frequent cloud cover create ideal conditions for diverse ecosystems, including cloud forests and pygmy forests. Despite its ecological significance, Knuckles faces threats from deforestation, illegal logging, and climate change. Conservation projects aim to restore degraded areas, promote sustainable tourism, and protect its unique biodiversity from environmental pressures.',
        notableBirds: 'Knuckles is home to over 120 bird species, including several endemic and migratory birds. The Sri Lanka White-eye, Yellow-fronted Barbet, and Sri Lanka Hanging Parrot thrive in its montane forests. Raptors such as the Black Eagle and Crested Serpent Eagle soar above the valleys, while the elusive Sri Lanka Whistling Thrush is often spotted near forest streams. The region’s rich biodiversity also supports various insects and amphibians, providing a balanced ecosystem for birdlife. Birdwatchers can explore multiple trails, especially in the early morning, for the best chances of spotting these rare and colorful species.',
        conservationStatus: 'Knuckles Forest Reserve is a protected conservation area under the Forest Department of Sri Lanka and is designated as a UNESCO World Heritage Site. Despite its protected status, illegal activities such as deforestation, encroachment, and poaching threaten its delicate ecosystem. Conservation efforts focus on reforestation, wildlife protection, and sustainable tourism initiatives. Government agencies, NGOs, and local communities work together to implement conservation programs, ensuring the long-term preservation of the reserve’s biodiversity. Scientific research and monitoring programs continue to assess the health of Knuckles’ ecosystem, addressing environmental challenges and promoting its conservation.',
        bestTimeToVisit: 'The best time to visit Knuckles Forest Reserve is from June to September, when rainfall is minimal, making hiking and wildlife spotting more accessible. Early mornings and late afternoons offer breathtaking views of mist-covered peaks and valleys. Dry-season hikes reveal clear trails, waterfalls, and vibrant birdlife. However, monsoon months (October to January) bring heavy rains, making trails slippery and difficult to navigate. Visitors are advised to carry proper hiking gear, wear layered clothing due to temperature variations, and respect conservation rules to minimize their ecological footprint while exploring this pristine natural wonder.',
        images: [Knuckles1, Knuckles2,Knuckles3,Knuckles4,Knuckles5,Knuckles6]
    },
    {
        id: 9,
        name: 'Sigiriya Bird Sanctuary',
        briefInfo: 'Sigiriya Bird Sanctuary, located near the iconic Sigiriya Rock Fortress, is a haven for birdwatchers and nature enthusiasts. The sanctuary’s diverse habitats, including forests, wetlands, and grasslands, attract numerous bird species, both endemic and migratory. It is home to colorful kingfishers, hornbills, and eagles, making it a paradise for ornithologists. The tranquil surroundings, combined with historical significance, provide a unique blend of nature and culture. Early morning and late afternoon are ideal for birdwatching, as the sanctuary comes alive with melodious bird calls. Conservation efforts focus on preserving its rich biodiversity and minimizing human impact.',
        locationDetails: 'Sigiriya Bird Sanctuary is situated in the central part of Sri Lanka, surrounding the world-famous Sigiriya Rock Fortress. Located in the Matale District, the sanctuary covers diverse landscapes, including dense forests, lakes, and paddy fields, providing ideal conditions for birdlife. The nearby Sigiriya and Pidurangala areas offer scenic viewpoints for birdwatching. The sanctuary is easily accessible from Dambulla and Habarana, making it a popular destination for eco-tourism. Due to its close proximity to historical landmarks, visitors often combine birdwatching with exploring ancient ruins, creating a well-rounded cultural and natural experience.',
        environmentalConditions: 'The sanctuary experiences a tropical monsoon climate, with temperatures ranging between 25°C and 32°C throughout the year. Rainfall varies, with the highest precipitation occurring between October and January. During the dry season (May to September), water sources shrink, concentrating birds around lakes and wetlands, making it an excellent time for birdwatching. The diverse ecosystem supports a mix of dry-zone and wet-zone bird species, along with a variety of mammals, reptiles, and amphibians. Conservation initiatives focus on protecting the habitat from encroachment and ensuring sustainable tourism practices to maintain ecological balance.',
        notableBirds: 'Sigiriya Bird Sanctuary hosts over 150 species of birds, including the Sri Lanka Grey Hornbill, Asian Paradise Flycatcher, and Brown Fish Owl. The vibrant Indian Roller and colorful Bee-eaters are commonly seen perched on branches, while flocks of Painted Storks and Egrets gather near water bodies. Raptors such as the Crested Serpent Eagle and Shikra dominate the skies. The sanctuary’s wetlands attract migratory birds like the Garganey and Black-winged Stilt. Birdwatching trails offer glimpses of rare species, making it a must-visit location for avian enthusiasts.',
        conservationStatus: 'Sigiriya Bird Sanctuary is a protected area under Sri Lanka’s Department of Wildlife Conservation. Despite its legal protection, deforestation, pollution, and increasing tourism pose threats to its fragile ecosystem. Conservation projects focus on habitat restoration, minimizing human-wildlife conflict, and promoting eco-friendly tourism. Bird monitoring programs help assess population health, while awareness campaigns educate local communities about sustainable practices. Government and non-governmental organizations collaborate to ensure the long-term survival of the sanctuary’s avifauna and maintain the balance between tourism and wildlife conservation.',
        bestTimeToVisit: 'The best time to visit Sigiriya Bird Sanctuary is from December to April, as migratory birds arrive and the climate is pleasant. Early morning and late afternoon are ideal for spotting rare birds and experiencing the sanctuary’s rich biodiversity. The dry season (May to September) offers excellent visibility, with birds congregating around water sources. Monsoon months bring lush greenery, enhancing the scenic beauty but making trails slippery. Visitors are encouraged to bring binoculars, wear neutral-colored clothing, and maintain silence to maximize birdwatching experiences while minimizing disturbances to wildlife.',
        images: [Sigiriya1, Sigiriya2,Sigiriya3,Sigiriya4,Sigiriya6,Sigiriya5]
    },
    {
        id: 10,
        name: 'Thalangama Wetland Park',
        briefInfo: 'Thalangama Wetland Park is a serene nature reserve located on the outskirts of Colombo, offering a tranquil escape from urban life. This lush wetland ecosystem is home to a rich variety of birds, butterflies, and aquatic life, making it a paradise for birdwatchers and nature enthusiasts. The wetlands play a vital role in flood control and groundwater replenishment, contributing to the ecological balance of the region. Visitors can enjoy scenic walks along its trails, witnessing diverse flora and fauna. Conservation efforts focus on preserving the wetland’s biodiversity while allowing sustainable tourism and recreational activities.',
        locationDetails: 'Thalangama Wetland Park is situated in the Colombo District, approximately 10 km from the city center, near the town of Battaramulla. The wetland spans around 118 hectares, consisting of marshlands, lakes, and paddy fields. It is a designated Environmental Protection Area, ensuring its conservation against urban encroachment. The wetland is fed by the Thalangama Lake, which supports its diverse ecosystem. Easily accessible by road, the park provides an ideal getaway for nature lovers, photographers, and researchers who seek to explore Sri Lanka’s rich biodiversity within close proximity to the capital.',
        environmentalConditions: 'The park experiences a tropical climate, with temperatures ranging between 26°C and 32°C throughout the year. Rainfall is abundant, particularly from April to November, sustaining the wetland’s lush greenery. The water bodies provide a constant supply of moisture, supporting a variety of amphibians, reptiles, and plant species. The wetland plays a crucial role in regulating the local microclimate, reducing heat and air pollution. Seasonal variations influence bird migration patterns, with numerous species arriving during the monsoon months. Conservation measures are essential to mitigate threats such as pollution, habitat destruction, and unauthorized land development.',
        notableBirds: 'Thalangama Wetland Park is a birdwatcher’s paradise, hosting over 100 bird species, including migratory and endemic birds. Highlights include the Purple Heron, Black-crowned Night Heron, and White-throated Kingfisher. The Lesser Whistling Duck and Pheasant-tailed Jacana can often be spotted around the lake, while Brahminy Kites soar above. Wetland vegetation attracts small warblers and flycatchers, creating a vibrant birding environment. During the migratory season, visitors can witness rare species such as the Indian Pitta and Black Bittern. The parks biodiversity makes it a prime location for avian research and eco-tourism.',
        conservationStatus: 'Thalangama Wetland Park is designated as an Environmental Protection Area under Sri Lanka’s National Environmental Act, ensuring its conservation. However, rapid urbanization, pollution, and encroachments threaten its delicate ecosystem. Conservation initiatives focus on habitat restoration, awareness campaigns, and sustainable tourism practices. Local communities play a key role in maintaining the wetland through eco-friendly farming and wildlife monitoring. Government and non-governmental organizations actively work to prevent illegal land use, ensuring long-term protection. Ongoing efforts aim to balance development with ecological preservation, making Thalangama a model for wetland conservation in Sri Lanka.',
        bestTimeToVisit: 'The best time to visit Thalangama Wetland Park is from December to April, when migratory birds arrive, and the weather is relatively dry. Early mornings and late afternoons offer the best birdwatching opportunities, as many species are most active during these times. The cooler climate and golden light create an ideal setting for photography and nature walks. While the monsoon months (May to November) bring heavier rainfall, they also enhance the park’s lush greenery and fill its water bodies, making it a picturesque location. Visitors are encouraged to wear light clothing, use binoculars, and maintain silence to observe wildlife without disturbances.',
        images: [Thalangama1, Thalangama2,Thalangama3,Thalangama4,Thalangama5,Thalangama6]
    },
    {
        id: 11,
        name: 'Mannar Island',
        briefInfo: 'Mannar Island, located off the northwest coast of Sri Lanka, is a renowned hotspot for birdwatching. Known for its vast mudflats, salt marshes, and lagoons, the island hosts a range of endemic and migratory bird species. Bird enthusiasts flock here to witness the seasonal migration of shorebirds, especially during the dry season. The island’s diverse habitats, including coastal wetlands and sand dunes, support a variety of waterfowl, raptors, and waders. The pristine environment, coupled with the island’s rich avifauna, makes Mannar a must-visit destination for nature lovers and birdwatching enthusiasts.',
        locationDetails: 'Mannar Island is situated off the northern coast of Sri Lanka, connected to the mainland by a causeway. The island spans approximately 130 square kilometers, with coastal wetlands and lagoons forming an important part of the ecosystem. It is located in the Mannar District and offers a serene, unspoiled natural environment. Mannar’s accessibility is through the town of Mannar, which is about 370 kilometers north of Colombo, making it a perfect destination for birdwatching tours and eco-tourism activities.',
        environmentalConditions: 'Mannar Island experiences a tropical climate, with hot and dry conditions prevailing throughout the year. Temperatures range between 27°C and 34°C, with rainfall mainly occurring during the monsoon season. The coastal wetlands, mudflats, and lagoons provide essential feeding and breeding grounds for numerous bird species. The region’s biodiversity is maintained through these varied ecosystems, with salinity levels and seasonal flooding contributing to the richness of its environment. The island habitats face environmental challenges, including land reclamation and pollution, which impact the local wildlife.',
        notableBirds: 'Mannar Island is famous for its birdlife, especially the migratory shorebirds that visit during the winter months. Notable species include the Eurasian Curlew, Black-tailed Godwit, and the migratory Little Stint. The island also hosts endemic species like the Sri Lanka Grey Hornbill and Sri Lanka Junglefowl. Raptors such as the Crested Hawk-Eagle can be spotted soaring above the island. The rich avian diversity, particularly the migratory species, makes Mannar a prime destination for birdwatching, attracting birders from around the world to witness the seasonal spectacle.',
        conservationStatus: 'Mannar Island’s ecosystems, particularly its wetlands, are increasingly threatened by human activity, including overfishing, habitat degradation, and development. Conservation efforts are focused on maintaining the island’s delicate balance through protected areas and the implementation of sustainable practices. Local organizations and government initiatives are working to prevent further loss of habitat, particularly in coastal areas, while promoting eco-tourism as a sustainable alternative. Effective monitoring of the bird populations and habitats is critical for ensuring the long-term preservation of Mannar’s rich biodiversity.',
        bestTimeToVisit: 'The best time to visit Mannar Island is between November and March, during the migratory bird season. This period offers birdwatchers the chance to witness a variety of species that stopover during their migration. Early mornings and late afternoons are ideal for birdwatching, as the birds are most active during these times. The dry weather and clear skies also make it easier to explore the island’s diverse ecosystems. Although the island can be visited year-round, the migratory season provides the most rewarding birdwatching experiences.',
        images: [Mannar1,Mannar2,Mannar3,Mannar4,Mannar6 ,Mannar5/* Add 5 more images */]
    },
    {
        id: 12,
        name: 'Beddagana Wetland Park',
        briefInfo: 'Beddagana Wetland Park, located in the outskirts of Colombo, Sri Lanka, is a serene urban wetland offering a peaceful escape into nature. The park is home to a wide variety of bird species, making it a popular destination for birdwatchers. It features walking paths, observation towers, and tranquil ponds that provide visitors with an opportunity to enjoy its rich biodiversity. This eco-friendly park serves as a natural habitat for numerous waterfowl and other wildlife, making it an ideal spot for eco-tourism and environmental education.',
        locationDetails: 'Beddagana Wetland Park is situated in the southwestern part of Colombo, near the suburb of Kotte. It is easily accessible from the city center, offering a refreshing break from urban life. The park covers several hectares of marshland, interspersed with small waterways and rich vegetation. It is located near the Parliament of Sri Lanka, adding to its appeal as a nature reserve within the bustling city limits. Visitors can explore the park’s diverse environments, including ponds, reeds, and forests.',
        environmentalConditions: 'The park’s ecosystem is characterized by wetland habitats, with seasonal variations in water levels that attract various species of birds and insects. It enjoys a tropical climate, with high humidity and average temperatures ranging between 25°C and 30°C. The wetland’s flora and fauna thrive due to the abundance of water, providing vital resources for the birds, amphibians, and aquatic life. The park’s wetlands also play a role in filtering water and mitigating urban flooding, demonstrating the ecological importance of such areas in urban environments.',
        notableBirds: 'Beddagana Wetland Park is renowned for its diverse bird population, particularly its resident and migratory species. Among the notable birds found here are the Purple Heron, Little Egret, and the Common Kingfisher. The park’s wetlands and water sources are ideal habitats for waterfowl, while the trees and reeds offer shelter to a range of small birds. Visitors can often spot birds such as the Indian Pond Heron and various species of ducks, making the park a key birdwatching destination within Colombo.',
        conservationStatus: 'Beddagana Wetland Park plays a significant role in conserving urban biodiversity and is managed by the Sri Lanka Land Reclamation and Development Corporation. The park is protected, and efforts are in place to preserve its natural habitats. While the park is largely untouched by urbanization, ongoing challenges include maintaining the balance between conservation and development in the surrounding areas. The park continues to serve as an environmental educational resource and is monitored to safeguard its delicate ecosystems and wildlife.',
        bestTimeToVisit: 'The best time to visit Beddagana Wetland Park is during the early morning or late afternoon when bird activity is at its peak. The cooler temperatures and calm waters make these hours ideal for birdwatching and photography. The park is accessible year-round, with the rainy season (May to September) offering the best chances to see a variety of migratory species. However, the dry months provide easier access to the walking trails and observation towers, making it a pleasant visit for nature enthusiasts.',
        images: [Beddagana1,Beddagana2,Beddagana3,Beddagana4,Beddagana5,Beddagana6 /* Add 5 more images */]
    },
    {
        id: 13,
        name: 'Wilpattu National Park',
        briefInfo: 'Wilpattu National Park, located in the northwest of Sri Lanka, is the country’s largest national park. It is renowned for its unique “villus,” natural lakes or ponds that attract diverse wildlife. The park is a haven for Sri Lanka’s leopards, elephants, and numerous bird species, making it a prime location for wildlife enthusiasts. Rich in biodiversity, Wilpattu also offers a unique mix of dry zone forests and grasslands, providing a variety of habitats for its fauna. It is one of the oldest and most ecologically significant protected areas in Sri Lanka.',
        locationDetails: 'Wilpattu National Park is situated in the North Western Province of Sri Lanka, spanning over 1,300 square kilometers. It is bordered by the Puttalam District to the north and Anuradhapura District to the east. The park is known for its scenic beauty, with open grasslands and dense forests. Wilpattu’s geographical location near the coast also provides a unique blend of ecosystems, making it an important site for biodiversity conservation. Visitors can enter the park through the main gate at Hunuwilagama and enjoy guided safaris to explore its wilderness.',
        environmentalConditions: 'Wilpattu experiences a tropical dry climate with annual rainfall averaging between 1,000 mm to 2,000 mm, mainly during the northeast monsoon season. The temperature ranges from 28°C to 35°C, creating a warm environment that is conducive for many wildlife species. The park’s terrain consists of dry forests, wetlands, and grasslands, providing a diverse range of habitats. These varying conditions support a rich array of flora and fauna, while also contributing to the park’s importance in maintaining ecological balance and supporting sustainable wildlife populations.',
        notableBirds: 'Wilpattu National Park is home to numerous bird species, including endemic species like the Sri Lanka Junglefowl and the Blue-faced Malkoha. The park’s diverse habitats, including wetlands, forests, and grasslands, provide ideal conditions for birdwatching. Migratory birds such as the Painted Stork and various species of herons can also be spotted in the park during migration seasons. Bird enthusiasts can also spot raptors such as the Crested Serpent Eagle and the White-bellied Sea Eagle. The park is a birdwatching paradise, offering sightings of over 200 species of birds.',
        conservationStatus: 'Wilpattu National Park has been a protected area for many years, with efforts focused on preserving its unique ecosystems and biodiversity. Conservation challenges include poaching, human-wildlife conflict, and the encroachment of agricultural land. However, the Sri Lanka Department of Wildlife Conservation has been working diligently to maintain the park’s protected status, combat illegal activities, and promote sustainable tourism. The park’s ecosystem plays a vital role in the broader ecological health of Sri Lanka, supporting a variety of endangered species and contributing to the conservation of natural habitats.',
        bestTimeToVisit: 'The best time to visit Wilpattu National Park is between February and October, as the dry season provides optimal conditions for wildlife sightings. During this period, the park’s animals are often concentrated around water sources, making them easier to spot. The cooler months are also more comfortable for safaris. While the park is open year-round, the northeast monsoon season from October to January brings heavy rainfall, which may make some areas inaccessible. However, visiting during the rainy season can offer a more tranquil and scenic experience.',
        images: [Wilpattu1,Wilpattu2,Wilpattu3,Wilpattu4,Wilpattu6,Wilpattu5]
    }
    
    
    
    
];

const SightingsInfo = () => {
    const { id } = useParams();
    const sighting = sightingsData.find(sighting => sighting.id === parseInt(id));

    if (!sighting) {
        return <div>Bird sighting not found!</div>;
    }

    return (
        <>
        <NavPage />
        <div className="sightings-info-container" style={{ marginLeft: '60px', marginRight: '60px' }}>
            <div className="sighting-section"><br /><br />
                <h1 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{sighting.name}</h1>

                <p><br />{sighting.briefInfo}</p><br />
                <p><strong>Location Details<br /></strong> {sighting.locationDetails}</p><br />
                <p><strong>Best time to Visit<br /></strong> {sighting.bestTimeToVisit}</p><br />
                <p><strong>Notable Birds<br /></strong> {sighting.notableBirds}</p><br />
                <p><strong>Environmental Conditions<br /></strong> {sighting.environmentalConditions}</p><br />
                <p><strong>Conservation Status of Birds<br /></strong> {sighting.conservationStatus}</p><br /><br />

                <div className="sighting-images" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', // 3 equal columns
                    gap: '10px',
                    width: '100%',
                    }}>
                    {/* Column 1 */}
                    <div>
                        <img src={sighting.images[0]} alt={`Sighting ${sighting.id}`} style={{
                        width: '560px',
                        height: '482px',
                        objectFit: 'cover',
                        paddingBottom:'10px'
                        }} />
                        <img src={sighting.images[3]} alt={`Sighting ${sighting.id}`} style={{
                        width: '560px',
                        height: '330px',
                        objectFit: 'cover',
                        }} />
                    </div>

                    {/* Column 2 */}
                    <div>
                        <img src={sighting.images[1]} alt={`Sighting ${sighting.id}`} style={{
                        width: '560px',
                        height: '330px',
                        objectFit: 'cover',
                        paddingBottom:'10px'
                        }} />
                        <img src={sighting.images[4]} alt={`Sighting ${sighting.id}`} style={{
                        width: '560px',
                        height: '482px',
                        objectFit: 'cover',
                        }} />
                    </div>

                    {/* Column 3 */}
                    <div>
                        <img src={sighting.images[2]} alt={`Sighting ${sighting.id}`} style={{
                        width: '560px',
                        height: '482px',
                        objectFit: 'cover',
                        paddingBottom:'10px'
                        }} />
                        <img src={sighting.images[5]} alt={`Sighting ${sighting.id}`} style={{
                        width: '560px',
                        height: '330px',
                        objectFit: 'cover',
                        }} />
                    </div>
                    </div>

                <br /><br />
            </div>
        </div></>
    );
};

export default SightingsInfo;
