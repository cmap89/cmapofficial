import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage({ className, title = "Title Here", content = "Content Here" }) {

    return (
        <div className={`accordion-container ${className}`} >
            <Accordion className='accordion' >
                <AccordionSummary
                    className='accordion-summary'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <Typography className='accordion-title' component="span">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-details' >
                    {content}
                </AccordionDetails>
            </Accordion>
        </div >
    );
}
