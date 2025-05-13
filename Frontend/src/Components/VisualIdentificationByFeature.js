import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert, CircularProgress, IconButton, Tooltip, Card, CardContent, CardMedia } from '@mui/material';
import { Info } from '@mui/icons-material';
import PrimaryButton from './PrimaryButton';
import { HiOutlineInformationCircle } from "react-icons/hi2";


const VisualIdentificationByFeature = () => {
  const [birdSpecies, setBirdSpecies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [formValues, setFormValues] = useState({});
  const [hoveredTerm, setHoveredTerm] = useState(null);

  const handleChange = (index, value) => {
    setFormValues(prevValues => ({ ...prevValues, [index]: value }));
  };

  const handleSearch = async () => {
    if (Object.keys(formValues).length < 12) {
      setSnackbarMessage('Please fill out the entire form before searching.');
      setOpenSnackbar(true);
      return;
    }

    console.log("User Input Values:", Object.values(formValues)); // Ensure data format

    setLoading(true);
    setError(null);
    setBirdSpecies(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict_features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.values(formValues)) // Send as an array
      });

      const data = await response.json();
      if (data.species) {
        setBirdSpecies(data.species);
      } else {
        setBirdSpecies("The system couldn't confidently identify a bird. The information may be incorrect.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message);
      setSnackbarMessage('Error fetching bird identification. Please try again.');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseEnter = (term) => {
    setHoveredTerm(term);
  };

  const handleMouseLeave = () => {
    setHoveredTerm(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" align="left" gutterBottom marginTop={8} marginLeft={3}>
        Identify Your Bird By Visual Identification
      </Typography>

      <Typography variant="body1" align="left" gutterBottom marginLeft={3} marginRight={3} marginBottom={10}>
  Unsure of the bird you've spotted? Use our visual identification tool to match features like color, size, beak shape, and feather patterns with known species. Whether you're a seasoned birder or just curious, this tool makes birdwatching more interactive and rewarding. Start your journey in identifying birds with ease and confidence!
</Typography>


      <Box sx={{ display: 'flex', flexWrap: 'wrap', overflow: 'visible', marginLeft: 3, marginRight: 5, marginBottom: 1, marginTop: 5 }}>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }} key={rowIndex}>
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const labelIndex = rowIndex * 3 + colIndex + 1;
              return (
                <FormControl sx={{ width: 350, mb: 2, height: '45px' }} key={colIndex}>
                  <InputLabel id={`label-${labelIndex}`} sx={{ backgroundColor: 'white', zIndex: 1 }}>
                    {getLabel(labelIndex)}
                  </InputLabel>
                  <Select
                    labelId={`label-${labelIndex}`}
                    id={`select-${labelIndex}`}
                    defaultValue=""
                    onChange={(e) => handleChange(labelIndex, e.target.value)}
                    renderValue={(selected) => selected}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {getOptions(labelIndex).map(option => (
                      <MenuItem key={option} value={option} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: 48, // fixed height
                        paddingY: 0, // remove excess vertical padding
                      }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                          <span>{option}</span>
                          {[1, 2, 6,7, 11].includes(labelIndex) ? null : (
                            <Tooltip
                              title={
                                <Card sx={{ width: 200,borderRadius: 2 }}>
                                  <CardMedia
                                    component="img"
                                    height="140"
                                    image={getImage(option)}
                                    alt={option}
                                  />
                                  <CardContent>
                                    <Typography variant="body2">{getDescription(option)}</Typography>
                                  </CardContent>
                                </Card>
                              }
                              arrow
                            >
                              <IconButton
                                onMouseEnter={() => handleMouseEnter(option)}
                                onMouseLeave={handleMouseLeave}
                                sx={{ marginLeft: 1 }}
                              >
                                <HiOutlineInformationCircle />
                              </IconButton>
                            </Tooltip>
                          )}
                        </Box>
                      </MenuItem>


                    ))}
                  </Select>
                </FormControl>
              );
            })}
          </Box>
        ))}
      </Box>

      <Box textAlign="center" sx={{ width: '350px', margin: '0 auto', marginBottom: 5 }}>
        <PrimaryButton width="350px" onClick={handleSearch} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Search Bird'}
        </PrimaryButton>
      </Box>

      {birdSpecies && (
        <Typography align="center" sx={{ marginTop: 3, fontSize: '16px' }}>
         We found your bird. It might be {birdSpecies}
        </Typography>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={error ? 'error' : 'warning'} onClose={() => setOpenSnackbar(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

const getLabel = (index) => {
  switch (index) {
    case 1: return 'Primary Color';
    case 2: return 'Beak Color';
    case 3: return 'Tail Shape';
    case 4: return 'Size';
    case 5: return 'Wing Pattern';
    case 6: return 'Habitat';
    case 7: return 'Leg Color';
    case 8: return 'Head Markings';
    case 9: return 'Body Pattern';
    case 10: return 'Beak Shape';
    case 11: return 'Tail Color';
    case 12: return 'Behavior';
    default: return '';
  }
};

const getOptions = (index) => {
  switch (index) {
    case 1: return ['Black', 'White', 'Brown', 'Grey', 'Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Pink', 'Purple', 'Multicolored', 'Black and White'];
    case 2: return ['Black', 'Yellow', 'Orange', 'Red', 'Grey', 'Blue', 'Brown', 'White'];
    case 3: return ['Rounded', 'Forked', 'Pointed', 'Square', 'Long Tail', 'Short Tail', 'Fan-shaped'];
    case 4: return ['Small', 'Medium', 'Large', 'Extra Large'];
    case 5: return ['Solid', 'Striped', 'Spotted', 'Bars', 'Mottled', 'Plain'];
    case 6: return ['Forest', 'Wetlands', 'Grasslands', 'Urban', 'Coastal', 'Desert', 'Mountains'];
    case 7: return ['Black', 'Yellow', 'Orange', 'Red', 'Pink', 'Grey', 'Brown', 'White'];
    case 8: return ['Plain', 'Striped', 'Crested', 'Cap', 'Mask', 'Patch', 'Eyering'];
    case 9: return ['Solid', 'Spotted', 'Streaked', 'Striped', 'Mottled', 'Iridescent'];
    case 10: return ['Hooked', 'Pointed', 'Conical', 'Flat', 'Curved', 'Long Beak', 'Short Beak'];
    case 11: return ['Black', 'Brown', 'White', 'Grey', 'Yellow', 'Orange', 'Red', 'Blue', 'Green', 'Multicolored', 'Black and White'];
    case 12: return ['Perching', 'Soaring', 'Wading', 'Swimming', 'Ground Walking', 'Hovering', 'Diving', 'Drilling'];
    default: return [];
  }
};

// Function to get image URL based on option
const getImage = (option) => {
  // You can change the logic here to return actual image paths
  switch (option) {
    case 'Striped':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCGyCtgqNBGs_8pMT4h3bf7uhYmjUuIBO2w&s';
    case 'Mottled':
      return 'https://i.pinimg.com/736x/11/f7/a7/11f7a71a8b5408bab536e8436d67a833.jpg';
    case 'Crested':
     return 'https://identifythebird.com/wp-content/uploads/2024/10/little-beige-orange-bird-with-high-comb-sitting-tree-branch-scaled.jpg';
     case 'Rounded':
      return 'https://images.squarespace-cdn.com/content/v1/5e121baa8aa5803c29b93200/1600309878498-M1FIJY5BJ5J3BQOS3JTG/Red-tailed_Hawk_Daniel_Lee_Brown_YOL_CO_2017-12-17.jpg';
    case 'Forked':
      return 'https://nemesisbird.com/wp-content/uploads/2018/06/arte1-1.jpg';
    case 'Pointed':
      return 'https://birdspot.co.uk/wp-content/uploads/2025/04/long-tailed-tit-2.jpg';
    case 'Square':
      return 'https://connectingcountry.s3.ap-southeast-2.amazonaws.com/press/wp-content/uploads/2020/06/11104925/28-thumbnail_y-Square-tailed-Kite.jpg';
    case 'Long Tail':
      return 'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/133740231/1200';
    case 'Short Tail':
      return 'https://roadsendnaturalist.com/wp-content/uploads/2014/04/blue-gray-gnatcatcher-singing.jpg';
    case 'Fan-shaped':
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Rhipidura_albicollis_-Sattal%2C_Uttarakhand%2C_India-8.jpg/960px-Rhipidura_albicollis_-Sattal%2C_Uttarakhand%2C_India-8.jpg';
    case 'Solid':
      return 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/199982781/1200';
    case 'Spotted':
      return 'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/203284541/900';
    case 'Bars':
      return 'https://pbs.twimg.com/media/F9w7PvCXwAAVodi?format=jpg&name=4096x4096';
    case 'Streaked':
      return 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/27/13/cuckoo-bird.jpg';
    case 'Eyering':
      return 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/617984145/480';
    case 'Patch':
      return 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8KGWy2uirdT-u1ODdubbuoH-QY1-zeHdwAAT_85e-AM2Nozh9sRy_0E5TFSEiWYDpiKNL_8w8tPoe_tKBwbxopmisWxTAeHEnI7t85o_njkPeg8xh7Qm3mQU4FpViWuFUS0v_UC7tpVFW/w1200-h630-p-k-no-nu/Ruby-crowned+Kinglet.jpg';
    case 'Mask':
      return 'https://www.allaboutbirds.org/guide/assets/photo/65685251-720px.jpg';
    case 'Cap':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbcF-9B2jLUv86M1nI4tkuWNr0JoaKn4kSA&s';
    case 'Iridescent':
      return 'https://thumbs.dreamstime.com/b/peacock-pavo-cristatus-displays-its-extravagant-iridescent-plumage-peacock-pavo-cristatus-displays-its-extravagant-374793470.jpg';
    case 'Hooked':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZin2TT_N-B9qgEI3ho8nSYZxDfDywPtVsA&s';
    case 'Conical':
      return 'https://www.shutterstock.com/image-photo/hawfinch-open-beak-portrait-shot-600nw-2429265357.jpg';
    case 'Flat':
      return 'https://nationalzoo.si.edu/sites/default/files/animals/roseatespoonbill-001.jpg';
    case 'Curved':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfaO71oc7VBdCm_jjESFkSiGbViVnxur0tQ&s';
    case 'Long Beak':
      return 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/301558291/320';
    case 'Short Beak':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqJjZrnq1lGtIFp3d6cMux4yCWg9eKaTy3A&s';
    case 'Plain':
      return "https://a-z-animals.com/media/2021/12/Crow-header.jpg";
    case 'Small':
       return "https://scottishwildlifetrust.org.uk/wp-content/uploads/2015/08/wildlifetrusts_40333805447.jpg";
    case 'Medium':
       return "https://cdn.britannica.com/96/137396-050-EB74E80F/Wood-pigeon.jpg";
    case 'Large':
       return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBbhSjDOX7BmKrUe8Imnj7mISYDNKjqKsQQ&s";
    case 'Extra Large':
       return "https://media.istockphoto.com/id/1373362766/photo/orange-flamingo-bird-against-green-backround.jpg?s=612x612&w=0&k=20&c=NIZ_3IgspWlE8Iedr7wy967NUvnQdPrLVxXybwR34GA=";
    case 'Perching':
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qr7OKHa3lyQ2PIoyWQEQog_rlWdCqGtbPg&s";
    case 'Soaring':
      return "https://biology.ucsd.edu/_images/news/2016/080116eagle.jpg";
    case 'Wading':
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRxAfVnldyDkVlUvnj8Uudd_xhWz9Lm8HEw&s";
    case 'Swimming':
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkM_qIugK0SbdIH25nxDu2LljW6j-hs6ftQ&s";
    case 'Ground Walking':
      return "https://www.shutterstock.com/image-photo/male-red-legged-partridge-close-600nw-2144854119.jpg";
    case 'Hovering':
      return "https://www.birdnote.org/sites/default/files/Talamanca-Hummingbird-800-Mick-Thompson-CC.jpg";
    case 'Diving':
      return "https://media.istockphoto.com/id/1370328868/photo/kingfisher-fishing-underwater.jpg?s=612x612&w=0&k=20&c=OFp7P_d1AvPShBKp7MoolrD6bcjPYn1TOLOmY_gcPFo=";
    case 'Drilling':
      return "https://media.audubon.org/social-media-photo/article/f_aud_apa-2020_pileated-woodpecker_a1-12053-1_ts_photo-gordon-congdon.jpg";
    default:
      return '';
  }
};

const getDescription = (option) => {
  switch (option) {
    case 'Rounded':
      return 'Rounded refers to a smooth, curved shape without sharp angles, often seen in bird features like tails or wings.';
    case 'Forked':
      return 'Forked refers to a shape that is split into two parts, like a fork in a road, commonly seen in bird tails.';
    case 'Pointed':
      return 'Pointed refers to a sharp, narrow end, often seen in bird beaks or tails.';
    case 'Square':
      return 'Square refers to a shape with equal sides and sharp angles, typically seen in some bird’s body or wing shapes.';
    case 'Long Tail':
      return 'Long refers to a feature that is extended in size, often describing tails that are significantly elongated.';
    case 'Short Tail':
      return 'Short refers to a feature that is compact or stubby, typically describing features like tail are not long.';
    case 'Long Beak':
      return 'Long refers to a feature that is extended in size, often describing beaks that are significantly elongated.';
    case 'Short Beak':
      return 'Short refers to a feature that is compact or stubby, typically describing features like beaks that are not long.';
    case 'Fan-shaped':
      return 'Fan-shaped refers to a wide, rounded shape that gradually spreads out, resembling the shape of a fan, commonly seen in bird tails.';
    case 'Solid':
      return 'Solid refers to a feature with no visible breaks or patterns, usually describing color or texture that is uniform throughout.';
    case 'Striped':
      return 'Striped refers to a pattern of alternating lines of color on the bird\'s body or wings.';
    case 'Spotted':
      return 'Spotted refers to a pattern of distinct, usually circular marks or spots on the bird’s feathers or body.';
    case 'Bars':
      return 'Bars refers to horizontal or vertical lines, often used to describe patterns on a bird’s feathers or wings.';
    case 'Mottled':
      return 'Mottled refers to a pattern of irregular patches or spots on the bird\'s body or wings.';
    case 'Plain':
      return 'Plain refers to a simple, unadorned appearance without patterns or markings.';
    case 'Crested':
      return 'Crested refers to a prominent feathered tuft or crown on the top of a bird\'s head.';
    case 'Cap':
      return 'Cap refers to a feature where the bird’s head is covered with a distinct color or pattern, often like a cap.';
    case 'Mask':
      return 'Mask refers to a distinct marking around the eyes, often resembling a mask around the bird’s face.';
    case 'Patch':
      return 'Patch refers to a solid or contrasting area of color on the bird’s feathers, often irregularly shaped.';
    case 'Eyering':
      return 'Eyering refers to a ring-like marking or coloration around a bird’s eye.';
    case 'Streaked':
      return 'Streaked refers to thin, narrow lines or streaks of color across the bird’s feathers or body.';
    case 'Iridescent':
      return 'Iridescent refers to a shimmering, rainbow-like effect on the bird’s feathers, usually seen in certain light conditions.';
    case 'Hooked':
      return 'Hooked refers to a beak or talon that curves sharply downward at the tip, resembling a hook.';
    case 'Conical':
      return 'Conical refers to a shape that tapers to a point, similar to a cone, often used to describe certain types of bird beaks.';
    case 'Flat':
      return 'Flat refers to a feature that is level or even, without curves or elevation, often describing a bird’s wings or beak.';
    case 'Curved':
      return 'Curved refers to a smooth bend in a feature, often used to describe bird beaks or wings.';
    case 'Perching':
      return 'Perching refers to the act of a bird sitting or resting on a branch, wire, or other elevated surface.';
    case 'Soaring':
      return 'Soaring refers to a bird’s ability to fly gracefully through the air without flapping its wings, typically at great heights.';
    case 'Wading':
      return 'Wading refers to the act of walking through shallow water, often done by birds in wetlands or coastal areas.';
    case 'Swimming':
      return 'Swimming refers to the ability of a bird to move through water, often using its feet or wings to propel itself.';
    case 'Ground Walking':
      return 'Ground Walking refers to the behavior of a bird moving along the ground, typically seen in species like chickens or sparrows.';
    case 'Hovering':
      return 'Hovering refers to the act of a bird staying in one place in the air, usually by rapidly flapping its wings, seen in hummingbirds.';
    case 'Diving':
      return 'Diving refers to the behavior where a bird swoops down at high speed into water or towards prey.';
    case 'Drilling':
      return 'Drilling refers to the action of a bird using its beak to bore into surfaces like tree bark in search of food, often seen in woodpeckers.';
    case 'Small':
     return 'Small birds are typically lightweight and compact, often agile and quick in flight. Examples include sparrows and finches.';
    case 'Medium':
      return 'Medium-sized birds strike a balance between agility and strength, commonly seen in species like pigeons and crows.';
    case 'Large':
      return 'Large birds tend to have broader wingspans and stronger builds, such as hawks and herons, often suited for gliding and soaring.';
    case 'Extra Large':
      return 'Extra large birds are among the heaviest and most powerful, including species like eagles and ostriches, known for their impressive size and strength.';
    default:
      return '';
  }
};




export default VisualIdentificationByFeature;
