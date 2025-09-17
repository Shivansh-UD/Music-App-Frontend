import { useState, useEffect } from "react";
import { retriveAllSongs } from "./api/MusicApiService";
import './ListAllSongs.css';

export default function ListAllSongs() {

    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        retriveAllSongs()
            .then((response) => {
                console.log("✅ Success:", response);
                setSongs(response.data);
                setError(null);
            })
            .catch((error) => {
                console.log("❌ Error:", error);
                setError("Failed to load songs.");
            });
    }, []);

    return (
        <div className="AllSongsPage">
            <h1>All Songs</h1>

            {error && <div className="alert">{error}</div>}

            {songs.length > 0 ? (
                <div className="songs-table-container">
                    <table className="songs-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Song Name</th>
                                <th>Artist</th>
                                <th>Length</th>
                                <th>Downloads</th>
                            </tr>
                        </thead>
                        <tbody>
                            {songs.map(song => (
                                <tr key={song.id}>
                                    <td>{song.id}</td>
                                    <td>{song.songName}</td>
                                    <td>{song.artistName}</td>
                                    <td>{song.songLength}</td>
                                    <td>{song.downloads.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="loading">Loading songs...</div>
            )}
        </div>
    );
}
