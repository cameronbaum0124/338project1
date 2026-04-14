import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";

//Custom Re-usable Alert function, makes the page feel more like an actual SIEM tool! 
function AlertCard({ alert }) {
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: "#111814",
        borderLeft:
          alert.threatlevel === "CRITICAL"
            ? "4px solid red"
            : alert.threatlevel === "HIGH"
            ? "4px solid orange"
            : alert.threatlevel === "MEDIUM"
            ? "4px solid yellow"
            : "4px solid green",
      }}
    >
      <Typography>
        [{alert.time}] {alert.week} - {alert.title}
      </Typography>

      <Typography variant="body2">
        {alert.type}
      </Typography>

      <Typography variant="body2">
        Source: {alert.source}
      </Typography>

      <Button
        href={alert.link}
        target="_blank"
        sx={{ mt: 1, color: "#00ff9c" }}
      >
        INVESTIGATE
      </Button>
    </Paper>
  );
}
const Mayo = () => {
  const alerts = [
    {
      time: "14:32:08",
      week: "Week 1",
      threatlevel: "HIGH",
      type: "BRUTE FORCE ATTEMPT DETECTED!",
      title: "CIA Triad Overview",
      source: "185.23.44.12",
      link: "https://www.youtube.com/watch?v=kPPFNrlN3zo",
    },
    {
      time: "15:10:44",
      week: "Week 2",
      threatlevel: "MEDIUM",
      type: "UNAUTHORIZED MEMORY ACCESS DETECTED!",
      title: "Cryptography Basics",
      source: "185.23.44.12",
      link: "https://www.youtube.com/watch?v=2oXKjPwBSUk",
    },
    {
      time: "15:30:32",
      week: "Week 3",
      threatlevel: "HIGH",
      type: "REMOTE CODE EXECUTION DETECTED!",
      title: "Malware & Countermeasures",
      source: "185.23.44.12",
      link: "https://www.youtube.com/watch?v=-eZs8wjjGGE",
    },
    {
      time: "17:23:55",
      week: "Week 4",
      threatlevel: "LOW",
      type: "SUSPICIOUS PROCESS ACTIVITY",
      title: "OS Vulnerabilities",
      source: "185.23.44.12",
      link: "https://www.youtube.com/watch?v=narir8qpGq8",
    },
    {
      time: "19:02:31",
      week: "Week 5",
      threatlevel: "CRITICAL",
      type: "TRAFFIC FLOOD DETECTED!",
      title: "Intro to SOC",
      source: "185.23.44.12",
      link: "https://www.youtube.com/watch?v=OHkWXFheSKM",
    },
    {
      time: "05:40:43",
      week: "Week 6",
      threatlevel: "HIGH",
      type: "SUSPICIOUS PROCESS / REVERSE SHELL ACTIVITY!",
      title: "IoT & Cyber Warfare",
      source: "185.23.44.12",
      link: "https://www.youtube.com/watch?v=7zWVxrjjIpE",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#0b0f0c", minHeight: "100vh", color: "#00ff9c" }}>
      
      {/* HEADER */}
      <AppBar position="static" sx={{ bgcolor: "#111814" }}>
        <Toolbar>
          <Typography variant="h6">
            SIEM Log Simulator for CSCI364: Cybersecurity
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <Typography sx={{ mb: 2 }}>
          root@siem:~$ live_alerts
        </Typography>

        <Stack spacing={2}>
          {alerts.map((alert, i) => (
            <AlertCard key={i} alert={alert} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Mayo;