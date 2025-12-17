import "../App.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
const darkTheme = createTheme({
  // palette: {
  //   mode: "dark",
  //   background: {
  //     default: "#222222",
  //   },
  // },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
});
const Item = styled("div")(
  ({
    theme,
    fontSize = "2rem",
    fontAllign = "left",
    bold = 0,
    padding = 0,
  }) => {
    const getFontSize = () => {
      if (typeof fontSize === "object") {
        return {
          fontSize: fontSize.xs || fontSize.sm || "1rem",
          [theme.breakpoints.up("sm")]: {
            fontSize: fontSize.sm || fontSize.md || "1rem",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: fontSize.md || fontSize.lg || fontSize.sm || "1rem",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: fontSize.lg || fontSize.xl || fontSize.md || "1rem",
          },
          [theme.breakpoints.up("xl")]: {
            fontSize: fontSize.xl || fontSize.lg || "1rem",
          },
        };
      }
      return { fontSize };
    };

    return {
      padding: theme.spacing(1),
      textAlign: fontAllign,
      fontWeight: bold,
      ...getFontSize(),
    };
  }
);
function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 0 }}>
          <Grid container alignItems="baseline">
            <Grid item xs={8}>
              <Item
                fontSize={{ xs: "1.5rem", md: "1.75rem", lg: "2rem" }}
                bold={"bold"}
                sx={{ px: 0 }}
              >
                {" "}
                adeeb ismail
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                fontAllign="right"
              >
                books
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -2, px: 0 }}
              >
                adeebismail9@tamu.edu |{" "}
                <a href="https://www.linkedin.com/in/adeeb-m-ismail/">
                  linkedin
                </a>{" "}
                | <a href="https://github.com/AdeebIsmail">github</a>{" "}
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item
                fontSize={{ xs: "0.9rem", md: "0.95rem", lg: "1rem" }}
                bold={"bold"}
                sx={{ px: 0 }}
              >
                experience
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                Lockheed Martin (2024) - Software engineering intern on the
                manufacturing execution system for the f35
              </Item>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                Undergraduate Teaching Assistant (2023) - Teaching assistant for
                intro to python (engr 102) and experimental physics lab (engr
                216)
              </Item>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                Student Researcher (2025-2025) - Researched windows
                vulnerabilities and developed DLL injection code
              </Item>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                Code Sensei (2021-2023) - Teaching assistant over different
                programming topics
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item
                fontSize={{ xs: "0.9rem", md: "0.95rem", lg: "1rem" }}
                bold={"bold"}
                sx={{ px: 0 }}
              >
                projects
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                Minimal Linux Kernel - Built a miniature operating system with
                physical and virtual memory, threading, a file system, etc
              </Item>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                <a href="https://github.com/AdeebIsmail/PiDisplay">PiDisplay</a>{" "}
                - Designed an e-ink display that dynamically displays the song
                currently playing on spotify
              </Item>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                <a href="https://github.com/AdeebIsmail/PandaExpressPOS">
                  Point of sales system
                </a>{" "}
                - Full stack point of sales system for panda express
              </Item>
              <Item
                fontSize={{ xs: "0.8rem", md: "0.85rem", lg: "0.9rem" }}
                sx={{ mt: -1, px: 0 }}
              >
                <a href="https://github.com/AdeebIsmail/fidelity-transaction-parser-rust">
                  Transaction Parser
                </a>{" "}
                - Rust based application that reads csvs of transaction data
                from the fidelity, generates graphs and different charts
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Home;
