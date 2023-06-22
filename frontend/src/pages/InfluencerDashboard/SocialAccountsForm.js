// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Typography, Box } from '@mui/material';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../../components/Form/TextField";



const SocialAccountsForm = ({ values, handleChange, touched, errors }) => {

    return (
        <>
            <Typography variant="h6" sx={{ fontWeight: 600 }}> Social accounts </Typography>
            <Box>
                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="website"
                    label="Website"
                    name="website"
                    autoComplete="website"
                    value={values.website}
                    onChange={handleChange}
                    error={touched.website && Boolean(errors.website)}
                    helperText={touched.website && errors.website}
                />

                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="instagram"
                    label="Instagram"
                    name="instagram"
                    autoComplete="instagram"
                    value={values.instagram}
                    onChange={handleChange}
                    error={touched.instagram && Boolean(errors.instagram)}
                    helperText={touched.instagram && errors.instagram}
                />

                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="youTube"
                    label="YouTube"
                    name="youTube"
                    autoComplete="youTube"
                    value={values.youTube}
                    onChange={handleChange}
                    error={touched.youTube && Boolean(errors.youTube)}
                    helperText={touched.youTube && errors.youTube}
                />

                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="tikTok"
                    label="TikTok"
                    name="tikTok"
                    autoComplete="tikTok"
                    value={values.tikTok}
                    onChange={handleChange}
                    error={touched.tikTok && Boolean(errors.tikTok)}
                    helperText={touched.tikTok && errors.tikTok}
                />
            </Box>
        </>
    );



}

export default SocialAccountsForm;


