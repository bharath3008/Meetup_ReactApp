import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
  const history = useHistory();

  function addMeetupHandler(meetupData){
    //fetch is used for getting HTTP requests
    fetch('https://react-getting-started-ee5b0-default-rtdb.firebaseio.com/meetups.json',
    {
    method: 'POST',
    body: JSON.stringify(meetupData),
    headers: {
      'Content-Type': 'application/json'
    }
    }
    ).then(()=>{
      history.replace('/');
    });
    
  }
  return(
  <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
  </section>
  );
}

export default NewMeetups;
