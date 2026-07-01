import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //this is where backend api will be called
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        setIsRateLimited(false);
        setNotes(res.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
        if (error.response && error.response.status === 429) {
          setIsRateLimited(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      {isLoading && (
        <div className="text-center text-primary py-10">Loading notes...</div>
      )}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {notes.length === 0 && !isLoading && !isRateLimited ? (
          <p className="text-center text-gray-500 py-10">No notes available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} 
              // setNotes={setNotes} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
