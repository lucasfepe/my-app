// SurveyPage.js
import React from 'react';
import { DialogContent, DialogActions, Button, DialogContentText } from '@mui/material';



const SurveyPage = ({ content, showSubmit, onSubmit, submitted }) => (
    <DialogContent sx={{ height: '200px' }}>
        <DialogContentText>{content}</DialogContentText>
        {showSubmit && (
            <DialogActions sx={{ justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    onClick={onSubmit}
                    disabled={submitted}
                    sx={{ margin: '1.5em' }}
                >
                    Submit Survey
                </Button>
            </DialogActions>
        )}
    </DialogContent>
);

export default SurveyPage;