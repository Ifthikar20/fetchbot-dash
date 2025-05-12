'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  TextField, 
  Stack, 
  Grid, 
  Paper, 
  useTheme, 
  useMediaQuery,
  Fade,
  Slide,
  InputAdornment,
  Chip,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MainCard from '@/components/ui/MainCard';
import LandingHeader from '@/components/ui/LandingHeader';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
}));

const SearchFormWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '24px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  }
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 0),
  position: 'relative',
  background: theme.palette.background.default,
}));

const CategoryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)'
  }
}));

const AnimatedBox = styled(Box)(({ theme }) => ({
  transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease',
}));

const JobCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  marginBottom: theme.spacing(2),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
  }
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [animationTriggered, setAnimationTriggered] = useState({
    hero: true,
    feature1: false,
    feature2: false,
    feature3: false
  });

  // Refs for scroll sections
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle location input
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search for:', searchQuery, 'in location:', location);
  };

  // Scroll animation handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.8;

      // Check each section and trigger animation when scrolled into view
      [
        { ref: feature1Ref, key: 'feature1' },
        { ref: feature2Ref, key: 'feature2' },
        { ref: feature3Ref, key: 'feature3' },
      ].forEach(({ ref, key }) => {
        if (ref.current && scrollPosition > ref.current.offsetTop) {
          setAnimationTriggered(prev => ({ ...prev, [key]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample job data
  const featuredJobs = [
    {
      id: 1,
      title: 'UX/UI Designer',
      company: 'Design Co',
      location: 'San Francisco, CA',
      salary: '$80K - $120K',
      type: 'Full-time',
      logo: '/globe.svg',
      tags: ['Remote', 'Design', 'UI/UX']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      location: 'New York, NY',
      salary: '$100K - $130K',
      type: 'Full-time',
      logo: '/window.svg',
      tags: ['React', 'TypeScript', 'Remote']
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Innovation Inc',
      location: 'Austin, TX',
      salary: '$110K - $140K',
      type: 'Full-time',
      logo: '/file.svg',
      tags: ['Product', 'Agile', 'Hybrid']
    }
  ];

  return (
    <main>
      {/* Landing Header */}
      <LandingHeader transparent />
      
      {/* Hero Section with Search */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ minHeight: '100vh', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Fade in={animationTriggered.hero} timeout={1000}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: { xs: 8, md: 0 } }}>
                  <Typography variant="h1" color="white" gutterBottom>
                    Find Your Perfect Fit
                  </Typography>
                  <Typography variant="h4" color="white" sx={{ mb: 4, opacity: 0.9 }}>
                    Search jobs, housing, cafes and more all in one place
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button 
                      variant="contained" 
                      size="large"
                      sx={{ 
                        bgcolor: theme.palette.secondary.main, 
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        '&:hover': {
                          bgcolor: theme.palette.secondary.dark
                        }
                      }}
                    >
                      Find Jobs
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="large"
                      sx={{ 
                        color: 'white',
                        borderColor: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      Post a Job
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Slide direction="left" in={animationTriggered.hero} timeout={800}>
                <SearchFormWrapper elevation={3}>
                  <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
                    Search Across Categories
                  </Typography>
                  <form onSubmit={handleSearchSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="What are you looking for?"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Job title, keyword, or company"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Location"
                        variant="outlined"
                        value={location}
                        onChange={handleLocationChange}
                        placeholder="City, state, or zip code"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationOnIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip 
                          icon={<WorkIcon />} 
                          label="Jobs" 
                          color="primary" 
                          variant="filled" 
                          clickable
                        />
                        <Chip 
                          icon={<HomeIcon />} 
                          label="Housing" 
                          clickable
                        />
                        <Chip 
                          icon={<LocalCafeIcon />} 
                          label="Cafes" 
                          clickable
                        />
                        <Chip 
                          icon={<LocalMallIcon />} 
                          label="Shopping" 
                          clickable
                        />
                      </Box>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        color="secondary" 
                        size="large"
                        fullWidth
                        sx={{ py: 1.5, color: 'white' }}
                      >
                        Search Now
                      </Button>
                    </Stack>
                  </form>
                </SearchFormWrapper>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Categories Section */}
      <FeatureSection ref={feature1Ref}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom>
              All Your Needs in One Place
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              Fetchbot helps you find everything you need for your lifestyle
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              { icon: <WorkIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />, title: 'Jobs', desc: 'Find your dream career' },
              { icon: <HomeIcon sx={{ fontSize: 48, color: theme.palette.secondary.main }} />, title: 'Housing', desc: 'Discover your perfect home' },
              { icon: <LocalCafeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />, title: 'Cafes', desc: 'Explore cozy workspaces' },
              { icon: <LocalMallIcon sx={{ fontSize: 48, color: theme.palette.secondary.main }} />, title: 'Shopping', desc: 'Discover local deals' }
            ].map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AnimatedBox sx={{ 
                  transform: animationTriggered.feature1 ? 'translateY(0)' : 'translateY(100px)',
                  opacity: animationTriggered.feature1 ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`
                }}>
                  <CategoryCard elevation={2}>
                    <Box sx={{ mb: 2 }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h4" gutterBottom>
                      {category.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {category.desc}
                    </Typography>
                  </CategoryCard>
                </AnimatedBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeatureSection>

      {/* Featured Jobs Section */}
      <FeatureSection ref={feature2Ref} sx={{ bgcolor: theme.palette.grey[50] }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom>
              Featured Job Opportunities
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              Discover top positions from leading companies
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <AnimatedBox sx={{ 
                transform: animationTriggered.feature2 ? 'translateY(0)' : 'translateY(100px)',
                opacity: animationTriggered.feature2 ? 1 : 0
              }}>
                <Stack spacing={3}>
                  {featuredJobs.map(job => (
                    <JobCard key={job.id} elevation={2}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={2}>
                          <Avatar
                            src={job.logo}
                            variant="rounded"
                            sx={{ 
                              width: 64, 
                              height: 64,
                              bgcolor: theme.palette.primary.light,
                              p: 1
                            }}
                          >
                            {job.company.charAt(0)}
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                          <Typography variant="h5" gutterBottom>
                            {job.title}
                          </Typography>
                          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                            <Typography variant="body1" fontWeight={500}>
                              {job.company}
                            </Typography>
                            <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', bgcolor: 'text.disabled' }} />
                            <Typography variant="body2" color="text.secondary">
                              <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'text-bottom', fontSize: '1rem' }} /> {job.location}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={1} flexWrap="wrap">
                            {job.tags.map(tag => (
                              <Chip key={tag} label={tag} size="small" sx={{ mt: 0.5 }} />
                            ))}
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                          <Typography variant="h6" color="primary.main" gutterBottom>
                            {job.salary}
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            {job.type}
                          </Typography>
                          <Button variant="contained" color="primary" size="small">
                            Apply Now
                          </Button>
                        </Grid>
                      </Grid>
                    </JobCard>
                  ))}
                </Stack>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Button variant="outlined" color="primary" size="large">
                    View All Jobs
                  </Button>
                </Box>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <AnimatedBox sx={{ 
                transform: animationTriggered.feature2 ? 'translateY(0)' : 'translateY(100px)',
                opacity: animationTriggered.feature2 ? 1 : 0,
                transitionDelay: '0.2s'
              }}>
                <MainCard 
                  title="Why Fetchbot Jobs"
                  elevation={3}
                  sx={{
                    height: '100%',
                    '& .MuiCardContent-root': {
                      height: '100%'
                    }
                  }}
                >
                  <Stack spacing={3}>
                    {[
                      'Get matched with relevant jobs',
                      'Apply with one click',
                      'Track your applications',
                      'Receive real-time updates',
                      'Connect directly with employers'
                    ].map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircleIcon color="secondary" />
                        <Typography variant="body1">{feature}</Typography>
                      </Box>
                    ))}
                    <Box sx={{ mt: 'auto', pt: 2 }}>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        fullWidth
                        sx={{ color: 'white' }}
                      >
                        Create Job Alert
                      </Button>
                    </Box>
                  </Stack>
                </MainCard>
              </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </FeatureSection>

      {/* Platform Benefits */}
      <FeatureSection ref={feature3Ref}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <AnimatedBox sx={{ 
                transform: animationTriggered.feature3 ? 'translateY(0)' : 'translateY(100px)',
                opacity: animationTriggered.feature3 ? 1 : 0
              }}>
                <MainCard 
                  sx={{ 
                    p: 2, 
                    transform: 'perspective(1000px) rotateY(-10deg)',
                    transition: 'transform 0.5s ease'
                  }}
                >
                  <Box 
                    component="img" 
                    src="/window.svg" 
                    alt="Dashboard illustration" 
                    sx={{ width: '100%', height: 'auto' }}
                  />
                </MainCard>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedBox sx={{ 
                transform: animationTriggered.feature3 ? 'translateY(0)' : 'translateY(100px)',
                opacity: animationTriggered.feature3 ? 1 : 0,
                transitionDelay: '0.2s'
              }}>
                <Typography variant="h2" gutterBottom>
                  All-in-One Platform
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                  Fetchbot is your single destination for finding everything you need for your lifestyle. 
                  From job opportunities to housing options, from cozy cafes to shop at local stores - 
                  we've got all your needs covered in one seamless platform.
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>1</Avatar>
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        Smart Recommendations
                      </Typography>
                      <Typography variant="body2">
                        Our AI-powered system learns your preferences to show you tailored results
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>2</Avatar>
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        Unified Search
                      </Typography>
                      <Typography variant="body2">
                        Find everything you need with our powerful cross-category search engine
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>3</Avatar>
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        Real-Time Updates
                      </Typography>
                      <Typography variant="body2">
                        Get instant notifications about new listings that match your interests
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ mt: 4, color: 'white' }}
                >
                  Start Searching
                </Button>
              </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </FeatureSection>

      {/* CTA Section */}
      <Box sx={{ 
        bgcolor: theme.palette.primary.main, 
        py: 8,
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Ready to Find Your Perfect Match?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of users who have simplified their search with Fetchbot
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ 
              px: 6,
              py: 1.5,
              color: 'white',
              fontSize: '1.1rem'
            }}
          >
            Get Started For Free
          </Button>
        </Container>
      </Box>
    </main>
  );
}