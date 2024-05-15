"use client"
import { useRouter } from "next/navigation";
import Header from "@/components/AdminHeader";

const AdminDashboard = () => {
    const router = useRouter();
    const id = "Vishal";

    const containerStyle = {
        backgroundColor: '#e0f7fa',
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
        backgroundColor: '#000000', 
        padding: '20px', 
    };

    const eduzoneParagraphContainerStyle = {
        marginTop: '20px',
    };

    const eduzoneParagraphStyle = {
        marginBottom: '20px',
    };

    const eduzoneHeadingStyle = {
        color: '#0d47a1',
        fontWeight: 'bold',
        backgroundColor: '#bbdefb',
        padding: '10px',
        marginTop: '60px',
    };

    const imageStyle = {
        marginTop: '20px',
        width: '280px',
        height: '280px',
        objectFit: 'cover',
        margin: '0 25px',
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    };

    return (
        <div style={containerStyle}>
            <div className="header" style={headerStyle}>
                <Header />
            </div>
            <div className="main-content" style={mainContentStyle}>
                <div className="paragraph-container" style={eduzoneParagraphContainerStyle}>
                    <div style={eduzoneHeadingStyle}>
                        <h1>About Eduzone</h1>
                    </div>
                    <p style={eduzoneParagraphStyle}>
                        In the fast-paced world, everyone wants to realize something, and if you're reading this, then you surely want to urge into IITs, clear NEET, or other equivalent competitive exams like KVPY, NTSE, Olympiad, etc.
                    </p>
                    <p style={eduzoneParagraphStyle}>
                        Opportunities are very less during this competitive world as compared to the number of aspirants running towards this path. In today's competitive era, getting a foothold in your training provides an advantage over the rest. Therefore, EDUZONE is for you.
                    </p>
                    <p style={eduzoneParagraphStyle}>
                        EDUZONE is a group of renowned faculties in the past, with vast experience in teaching. We have been in the teaching sector for a long time, and we are quite aware of the inadequacy within the system. The reason behind is our association with major coaching institutes in India in the past, which led us to acknowledgment of the weaknesses and the strong points of those institutes.
                    </p>
                    <p style={eduzoneParagraphStyle}>
                        Our success is bound to the continuous hard work, disciplined dedication, and passion of our team and students towards their common goal. EDUZONE tries to build a bond with the students and tries to get personally connected, which is quite necessary for their betterment. Our focus is on student success by the crack of JEE MAINS + ADVANCE and NEET, but our concern does not stop here. We teach them in such a manner that they will be able to clear any other competitive exam of Class 10th and Class 12th board level. Our aim is to create a strong foundation of scholars by training to realize excellent leads in various competitive exams like NTSE, IJSO, NSEP/B/C/A, RMO, NMTC and personal Olympiads like NSO, IMO, NSTSE, ANCQ, V-MAT etc. We encourage participation in National and International events like IRIS (Science Fair), Workshops, Conferences, and Seminars.
                    </p>
                    <p>
                        For board exams, we have created a CCE (Continuous & Comprehensive Evaluation) pattern. EDUZONE is committed to producing legends through its visionary insights.
                    </p>
                </div>
                <div style={imageContainerStyle}>
                    <img
                        src="https://eduzonejeet.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-24-at-11.54.02-AM-1-1024x1024.jpeg"
                        alt="Eduzone Image"
                        style={imageStyle}
                    />
                    <img
                        src="https://eduzonejeet.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-24-at-11.54.02-AM-2-1024x1024.jpeg"
                        alt="Eduzone Image"
                        style={imageStyle}
                    />
                    <img
                        src="https://eduzonejeet.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-24-at-11.54.04-AM-1024x1024.jpeg"
                        alt="Eduzone Image"
                        style={imageStyle}
                    />
                    <img
                        src="https://eduzonejeet.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-24-at-11.54.02-AM-1024x1024.jpeg"
                        alt="Eduzone Image"
                        style={imageStyle}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
