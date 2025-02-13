// App.js
import { SURVEY_PAGES } from './constants/surveyData';
import SurveyPage from './components/SurveyPage';
import PropTypes from 'prop-types';
import { Dialog, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useSurveyState from './hooks/useSurveyState';
import Stack from '@mui/material/Stack';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';

function App() {
  const { page, setPage, submitted, open, handleSubmit } = useSurveyState();

  return (
    <div className="App">
      <Dialog
        open={open}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Fun Welcome Daily Survey</DialogTitle>

        <SurveyPage
          content={SURVEY_PAGES[page - 1].content}
          showSubmit={SURVEY_PAGES[page - 1].showSubmit}
          onSubmit={handleSubmit}
          submitted={submitted}
        />

        <DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Stack spacing={2}>
              <Pagination
                count={SURVEY_PAGES.length}
                page={page}
                onChange={(e, p) => setPage(p)}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Add PropTypes
SurveyPage.propTypes = {
  content: PropTypes.string.isRequired,
  showSubmit: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default App;