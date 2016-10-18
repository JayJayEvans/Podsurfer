
import java.util.Arrays;

/**
 * Created by Jason on 10/8/2016.
 */

public class Podcast {
    public String id;
    public String name;
    public String link;
    public String release;
    public String producer;
    public String length;
    public String description;
    public Episodes[] ep;


    /*
    * Podcast constructor
    *
    *
     */
    public Podcast(String podId, String podName,String podLink, String podRelease, String podProducer,
                   String podLength, String podDescription, Episodes[] podEp){
        id = podId;
        name = podName;
        link = podLink;
        release = podRelease;
        producer = podProducer;
        length = podLength;
        description = podDescription;
        ep = new Episodes[podEp.length];
        for(int i = 0; i < podEp.length; i++){
            ep[i] = new Episodes(podEp[i]);
        }


    }

    /* Lists all attributes of a podcast
    *
     */
    public void listMe(){
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Link: " + link);
        System.out.println("Release: " + release);
        System.out.println("Producer: " + producer);
        System.out.println("Length: " + length);
        System.out.println("Description: " + description);
        for(int i =0; i < ep.length; i++ ){
            ep[i].listMe(); // lists all attributes of all episodes
        }

    }

    /*
    *  Search Functionality
    *  returns true if item is found, false if not
     */
    public Boolean findMe(String input){
        String[] elements = input.split(" "); //puts space delimited words into their own substring
                                              //this allows each words in a user's sentence to be checked

        Boolean found = false;
        for(int i = 0; i < elements.length && found == false; i++ ){ // compares each podcast attribute to each substring
                                                                     // of the user's input
            if( id.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if( name.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if( link.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if( release.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if( producer.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if( length.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;
            if( description.toLowerCase().contains(elements[i].toLowerCase()))
                found = true;

            Boolean epFound = false;
            for(int j =0; j < ep.length && epFound ==false; j++) {
                epFound = ep[j].findMe(input);
            }
            if(epFound == true){
                found = true;
            }
        }

        return found;
    }

}
*/

