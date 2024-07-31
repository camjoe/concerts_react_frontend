import React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { ConcertList } from './concerts/Concert.types'

const DivLayout = styled("div")(({ theme }) => ({
  width: "auto",
  marginLeft: theme.spacing.unit * 3,
  marginRight: theme.spacing.unit * 3,

  [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    width: 1100,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const ToolbarToolbarMain = styled(Toolbar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const TypographyToolbarTitle = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

const ToolbarToolbarSecondary = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));

const PaperMainFeaturedPost = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  marginBottom: theme.spacing.unit * 4,
}));

const DivMainFeaturedPostContent = styled("div")(({ theme }) => ({
  padding: `${theme.spacing.unit * 6}px`,

  [theme.breakpoints.up("md")]: {
    paddingRight: 0,
  },
}));

const GridMainGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing.unit * 3,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
}));

const DivCardDetails = styled("div")(({ theme }) => ({
  flex: 1,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 160,
}));

const PaperSidebarAboutBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing.unit * 2,
  backgroundColor: theme.palette.grey[200],
}));

const TypographySidebarSection = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing.unit * 3,
}));

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing.unit * 8,
  padding: `${theme.spacing.unit * 6}px 0`,
}));

const sections = ["Concerts", "Bands", "Venues", "About"];
const social = ["GitHub", "LinkedIn"];

const ConcertsPage: React.FC<ConcertList> = ({ concerts }) => {

  return (
    <React.Fragment>
      <CssBaseline />
      <DivLayout>
        <ToolbarToolbarMain>
          <Button size="small">Subscribe</Button>
          <TypographyToolbarTitle
            //component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            Concerts
          </TypographyToolbarTitle>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </ToolbarToolbarMain>
        <ToolbarToolbarSecondary variant="dense">
          {sections.map((section) => (
            <Typography color="inherit" noWrap key={section}>
              {section}
            </Typography>
          ))}
        </ToolbarToolbarSecondary>
        <main>
          {/* Main featured post */}
          <PaperMainFeaturedPost>
            <Grid container>
              <Grid item md={6}>
                <DivMainFeaturedPostContent>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Come find a concert near you
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Below is a list of concert stored in a Postgresql datase.
                    One day I hope to fill this information in from
                    Ticketmaster's api or a similar source.
                  </Typography>
                </DivMainFeaturedPostContent>
              </Grid>
            </Grid>
          </PaperMainFeaturedPost>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <GridMainGrid container spacing={40}>
            {concerts.map((concert) => (
              <Grid item key={concert.headlinerBand.name} xs={12} md={6}>
                <StyledCard>
                  <DivCardDetails>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {concert.headlinerBand.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {concert.date.toLocaleString('en-US', { hour: 'numeric', hour12: true })}
                      </Typography>
                      {concert.supportingBands && concert.supportingBands.length > 0 ? (
                        <Typography variant="subtitle1" paragraph>
                          Come see {concert.headlinerBand.name} with special
                          guests {concert.supportingBands?.toLocaleString()}!
                        </Typography>
                      ) : (
                        <Typography variant="subtitle1" paragraph>
                          Come see {concert.headlinerBand.name}!
                        </Typography>
                      )}
                      <Typography variant="subtitle1" color="primary">
                        ${concert.ticketPrice} at {concert.venue.name} in {concert.venue.location}
                      </Typography>
                    </CardContent>
                  </DivCardDetails>
                  <Hidden xsDown>
                    <StyledCardMedia
                      // eslint-disable-line max-len
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      title="Image title"
                    />
                  </Hidden>
                </StyledCard>
              </Grid>
            ))}
          </GridMainGrid>
          {/* End sub featured posts */}
          <GridMainGrid container spacing={40}>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <PaperSidebarAboutBox elevation={0}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Email me for additional information or for latest resume at cameronjoseph357@gmail.com
                </Typography>
              </PaperSidebarAboutBox>
              <TypographySidebarSection variant="h6" gutterBottom>
                Social
              </TypographySidebarSection>
              {social.map((network) => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}
          </GridMainGrid>
        </main>
      </DivLayout>
      {/* Footer */}
      <StyledFooter>
        <Typography variant="h6" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Front End: React/Typescript Backend: Django/Python (alternative
          version with C#/.NET)
        </Typography>
      </StyledFooter>
      {/* End footer */}
    </React.Fragment>
  );
}

export default ConcertsPage;