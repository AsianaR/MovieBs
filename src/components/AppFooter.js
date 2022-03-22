import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AppFooter = () => {
  return (
    <Box
      sx={{
        height: "180px",
        background: "#353935",
        mt: "30px",
        py: "60px",
        textAlign: "center",
      }}
    >
      <Typography mb={"10px"} color={"#fff"}>Email newsletter</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          
        }}
      >
        <EmailIcon sx={{ color: "#fff", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Subsribe" variant="standard" size="normal" placeholder="example@mail.com" color="secondary" sx={{borderBottom: 0}}/>
      </Box>
      <Button variant="contained" sx={{ mx: "auto", mt: "30px" }}>
        Submit
      </Button>
    </Box>
  );
};

export default AppFooter;
