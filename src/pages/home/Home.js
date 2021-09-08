import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import CardDoctor from '../../components/card-doctor/CardDoctor';
import Container from '@material-ui/core/Container';
import FilterByHospital from '../../components/filter-by-hospital/FilterByHospital';
import FilterBySpecialization from '../../components/filter-by-specialization/FilterBySpecialization';
import Finder from '../../components/finder/Finder';
import Grid from '@material-ui/core/Grid';
import SearchDoctor from '../../components/search-doctor/SearchDoctor';
import fetchDoctors from '../../api/fetch-doctors';
import logger from '../../helper/logger';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [initialData, setInitialData] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [hospitalLabel, setHospitalLabel] = useState([]);
  const [hospitalName, setHospitalName] = useState([]);
  const [specializationName, setSpecializationName] = useState([]);
  const [specialization, setSpecialization] = useState([]);

  const getHospitals = (obj) => {
    const _hospitals = [];

    for (const key in obj) {
      const { hospital } = obj[key];
      _hospitals.push(hospital[0].name);
    }
    const hospitals = Array.from(new Set(_hospitals));

    setHospitalLabel(hospitals);
  };

  const getSpecialization = (obj) => {
    const _specializations = [];

    for (const key in obj) {
      const { specialization: spec } = obj[key];
      _specializations.push(spec['name']);
    }
    const specializations = Array.from(new Set(specializationName));

    setSpecialization(specializations);
  };

  const reloadDoctors = async () => {
    const { isSuccess, data } = await fetchDoctors();
    if (!isSuccess) {
      logger(data);
      return;
    }

    setInitialData(data);
    setsearchResult(data);
  };

  useEffect(() => {
    reloadDoctors();
  }, []);

  useEffect(() => {
    const doctors = initialData && initialData.filter((item) => item.name.toLowerCase().indexOf(keyword) > -1);
    setsearchResult(doctors);
  }, [keyword, initialData]);

  useEffect(() => {
    const hospitals =
      initialData && initialData.filter((item) => item.hospital[0].name.toLowerCase().indexOf(hospitalName) > -1);
    setsearchResult(hospitals);
  }, [hospitalName, initialData]);

  useEffect(() => {
    const specializations =
      initialData &&
      initialData.filter((item) => item.specialization.name.toLowerCase().indexOf(specializationName) > -1);
    setsearchResult(specializations);
  }, [specializationName, initialData]);

  useEffect(() => {
    getHospitals(initialData);
    getSpecialization(initialData);
  }, [initialData]);

  const handleSearch = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };

  const handleFilterByHospital = (e) => {
    setHospitalName(e.target.value.toLowerCase());
  };

  const handleFilterBySpecialization = (e) => {
    setSpecializationName(e.target.value.toLowerCase());
  };

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box mt={3}>
            <Finder>
              <Grid item xs={3}>
                <SearchDoctor handleSearch={handleSearch} />
              </Grid>

              <Grid item xs={3}>
                <FilterByHospital hospitals={hospitalLabel} handleFilterByHospital={handleFilterByHospital} />
              </Grid>
              <Grid item xs={3}>
                <FilterBySpecialization
                  specialization={specialization}
                  handleFilterBySpecialization={handleFilterBySpecialization}
                />
              </Grid>
            </Finder>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {searchResult.length > 0 ? (
          searchResult.map((doctor) => {
            return (
              <Grid key={doctor.id} item xs={6}>
                <Box mt={3}>
                  <CardDoctor data={doctor} />
                </Box>
              </Grid>
            );
          })
        ) : (
          <div> loading..</div>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
