import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

      {isRateLimited && (
        // MAKE THIS ITS OWN COMPONENT NEXT
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500 text-lg">
            You have exceeded the request limit. Please try again later.
          </p>
        </div>
      )}

      {isLoading && <div className="text-center text-primary py-10">Loading notes...</div>}

      <div>
        {notes.length === 0 && !isLoading ? (
          <p className="text-center text-gray-500 py-10">No notes available.</p>
        ) : (
          <ul className="space-y-4">
            {/* TURN THIS INTO A CARD NEXT */}
            {notes.map((note) => (
              <li key={note._id} className="bg-base-200 p-4 rounded-lg">
                <h3 className="text-xl font-bold">{note.title}</h3>
                <p className="text-gray-500">{note.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
