import { styled } from "@mui/material/styles"
import { Box } from "@mui/material";


const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.customColors.grey.light,
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

  export default Puller;