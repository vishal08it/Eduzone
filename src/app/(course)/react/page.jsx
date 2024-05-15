"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/AdminHeader";


const ReactPage = () => {
   const router = useRouter();
   const [selectedCourse, setSelectedCourse] = useState("medical");

   const containerStyle = {
        backgroundColor: '#001f3f', 
    };

    const headerStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px', 
    };

    const mainContentStyle = {
        marginTop: '80px',
        backgroundColor: '#00b8ff85', 
        padding: '20px',
    };

    const coursesHeadingStyle = {
        color: '#7f1d09', 
        textAlign: 'center', 
        fontWeight: 'bold',
        padding: '30px',
        textTransform: 'uppercase', 
        background: 'none', 
    };

    const dropdownStyle = {
        borderRadius: '15px', 
        marginBottom: '20px', 
        color: '#8b008b', 
    };

    const handleCourseChange = (e) => {
        const course = e.target.value;
        setSelectedCourse(course);
    };

   const getImageSource = () => {
        switch (selectedCourse) {
            case "medical":
                return "https://eduzonejeet.com/wp-content/uploads/2024/01/NEET-1536x865.png";
            case "jee":
                return "https://eduzonejeet.com/wp-content/uploads/2024/01/JEE-MAIN-ADVANCE-1536x865.png";
            case "foundation":
                return "https://eduzonejeet.com/wp-content/uploads/2024/01/JEE-MAIN-ADVANCE-1-1536x865.png";
            case "olympiads":
                return "https://eduzonejeet.com/wp-content/uploads/2024/01/science_olympiad_bg.png";
            default:
                return "";
        }
    };

   
    return (
        <div className="container" style={containerStyle}>
            <div className="header" style={headerStyle}>
                <Header />
            </div>
            <div className="main-content" style={mainContentStyle}>
                <div style={coursesHeadingStyle}>
                    <h2>Courses</h2>
                </div>

                <div>
                    <label htmlFor="courseSelect" style={{ marginRight: '10px' }}>Choose a Course:</label>
                    <select
                        id="courseSelect"
                        onChange={handleCourseChange}
                        value={selectedCourse}
                        style={dropdownStyle}
                    >
                        <option value="medical">Medical (NEET)</option>
                        <option value="jee">JEE (Mains + Advanced)</option>
                        <option value="foundation">Foundation (Classes IX and X)</option>
                        <option value="olympiads">Olympiads</option>
                    </select>
                </div>

                {selectedCourse && (
                    <div style={{ marginTop: '20px' }}>
                        <img src={getImageSource()} alt={`Image for ${selectedCourse}`} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReactPage;
