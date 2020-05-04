import React from "react";
import {
  Grid,
  LinearProgress,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";

const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];

export default function Userdashboard({ title, monthTitle, success, failed, totalSuccessThisMonth, totalFailedThisMonth, totalActive, totalDeactive, status, activeTitle, inactiveTitle, totalUserTitle, totalUser}) {

  var classes = useStyles();
  var theme = useTheme();

  // local
  // var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
      <PageTitle title={title} />
      <Grid container>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget
            title={monthTitle}
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="primary" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  {success}
                </Typography>
              </div>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  {failed}
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                {success} : {totalSuccessThisMonth}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={200}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                {failed} : {totalFailedThisMonth}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={100}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>


            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={4} md={8} sm={6} xs={12}>
          <Widget
            title={status}
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="primary" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  {activeTitle}
                </Typography>
              </div>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  {inactiveTitle}
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                {activeTitle} : {totalActive}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={200}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                {inactiveTitle} : {totalDeactive}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={100}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget title={totalUserTitle} upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.progressSection} style = {{marginTop : "40px"}}>
                <Typography
                  size="md"
                  color="text"
                  colorBrightness="secondary"
                  className={classes.progressSectionTitle}
                >
                  {totalUserTitle} : {totalUser}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  classes={{ barColorPrimary: classes.progressBar }}
                  className={classes.progress}
                />
            </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
