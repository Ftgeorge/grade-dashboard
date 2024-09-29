// mockData.ts

// Define the structure of the Student type
export interface Student {
    id: number;
    profileImage: string;
    studentName: string;
    studentId: string;
    email: string;
    timestamp: string;
    offenseType: string;
    status: string;
    subjectHistory: {
        subject: string;
        score: string;
        date: string;
    }[];
    actionHistory: {
        description: string;
        date: string;
    }[];
    dateOfBirth?: string;
    phoneNumber?: string;
}


// Create the updated mock data array
export const mockData: Student[] = [
    {
        id: 1,
        profileImage: "https://images.unsplash.com/photo-1551692703-f4941f2f0f6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "John Doe",
        studentId: "S12345",
        email: "john@example.com",
        timestamp: "2023-09-15 10:30:45",
        offenseType: "Talking During Exam",
        status: "Pending Review",
        subjectHistory: [
            { subject: "Mathematics", score: "75%", date: "2023-03-01" },
            { subject: "English", score: "80%", date: "2023-04-15" },
            { subject: "Science", score: "90%", date: "2023-05-20" },
            { subject: "History", score: "85%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 2,
        profileImage: "https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Jane Smith",
        studentId: "S12346",
        email: "jane@example.com",
        timestamp: "2023-09-15 11:00:22",
        offenseType: "Head Movement Detected",
        status: "Resolved",
        subjectHistory: [
            { subject: "Mathematics", score: "80%", date: "2023-03-01" },
            { subject: "English", score: "85%", date: "2023-04-15" },
            { subject: "Science", score: "90%", date: "2023-05-20" },
            { subject: "History", score: "80%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 3,
        profileImage: "https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Michael Johnson",
        studentId: "S12347",
        email: "michael@example.com",
        timestamp: "2023-09-15 12:45:18",
        offenseType: "Using Phone",
        status: "Terminated",
        subjectHistory: [
            { subject: "Mathematics", score: "75%", date: "2023-03-01" },
            { subject: "English", score: "80%", date: "2023-04-15" },
            { subject: "Science", score: "90%", date: "2023-05-20" },
            { subject: "History", score: "85%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 4,
        profileImage: "https://images.unsplash.com/photo-1511541255253-348f9f0eeb0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Emily Davis",
        studentId: "S12348",
        email: "emily@example.com",
        timestamp: "2023-09-15 13:15:09",
        offenseType: "Cheating",
        status: "Under Investigation",
        subjectHistory: [
            { subject: "Mathematics", score: "88%", date: "2023-03-01" },
            { subject: "English", score: "75%", date: "2023-04-15" },
            { subject: "Science", score: "92%", date: "2023-05-20" },
            { subject: "History", score: "78%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Temporary suspension", date: "2023-09-15" },
        ],
    },
    {
        id: 5,
        profileImage: "https://images.unsplash.com/photo-1565722320621-45591d0f16b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Daniel Brown",
        studentId: "S12349",
        email: "daniel@example.com",
        timestamp: "2023-09-15 14:00:55",
        offenseType: "Loud Behavior",
        status: "Pending Review",
        subjectHistory: [
            { subject: "Mathematics", score: "82%", date: "2023-03-01" },
            { subject: "English", score: "89%", date: "2023-04-15" },
            { subject: "Science", score: "95%", date: "2023-05-20" },
            { subject: "History", score: "80%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 6,
        profileImage: "https://images.unsplash.com/photo-1519752418803-3b0c5e25dba1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Sophia Wilson",
        studentId: "S12350",
        email: "sophia@example.com",
        timestamp: "2023-09-15 14:30:13",
        offenseType: "Not Submitting Assignments",
        status: "Resolved",
        subjectHistory: [
            { subject: "Mathematics", score: "78%", date: "2023-03-01" },
            { subject: "English", score: "85%", date: "2023-04-15" },
            { subject: "Science", score: "88%", date: "2023-05-20" },
            { subject: "History", score: "90%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Reinstatement", date: "2023-09-15" },
        ],
    },
    {
        id: 7,
        profileImage: "https://images.unsplash.com/photo-1587332787026-df0ff1ccdc80?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "David Lee",
        studentId: "S12351",
        email: "david@example.com",
        timestamp: "2023-09-15 15:15:09",
        offenseType: "Late Submission",
        status: "Under Review",
        subjectHistory: [
            { subject: "Mathematics", score: "74%", date: "2023-03-01" },
            { subject: "English", score: "78%", date: "2023-04-15" },
            { subject: "Science", score: "85%", date: "2023-05-20" },
            { subject: "History", score: "76%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 8,
        profileImage: "https://images.unsplash.com/photo-1585095051741-5ae5e88a4825?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Olivia Taylor",
        studentId: "S12352",
        email: "olivia@example.com",
        timestamp: "2023-09-15 15:45:02",
        offenseType: "Disrespectful Behavior",
        status: "Pending Review",
        subjectHistory: [
            { subject: "Mathematics", score: "88%", date: "2023-03-01" },
            { subject: "English", score: "90%", date: "2023-04-15" },
            { subject: "Science", score: "92%", date: "2023-05-20" },
            { subject: "History", score: "85%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 9,
        profileImage: "https://images.unsplash.com/photo-1560364761761-71e47ac6e72e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Liam Harris",
        studentId: "S12353",
        email: "liam@example.com",
        timestamp: "2023-09-15 16:30:24",
        offenseType: "Misuse of Resources",
        status: "Terminated",
        subjectHistory: [
            { subject: "Mathematics", score: "76%", date: "2023-03-01" },
            { subject: "English", score: "78%", date: "2023-04-15" },
            { subject: "Science", score: "80%", date: "2023-05-20" },
            { subject: "History", score: "85%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 10,
        profileImage: "https://images.unsplash.com/photo-1615451941920-80a3de54039c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Ava Robinson",
        studentId: "S12354",
        email: "ava@example.com",
        timestamp: "2023-09-15 17:00:35",
        offenseType: "Excessive Noise",
        status: "Resolved",
        subjectHistory: [
            { subject: "Mathematics", score: "80%", date: "2023-03-01" },
            { subject: "English", score: "90%", date: "2023-04-15" },
            { subject: "Science", score: "85%", date: "2023-05-20" },
            { subject: "History", score: "92%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 11,
        profileImage: "https://images.unsplash.com/photo-1592971597067-fd3e5bffbd81?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Ethan Green",
        studentId: "S12355",
        email: "ethan@example.com",
        timestamp: "2023-09-15 18:15:14",
        offenseType: "Unapproved Collaboration",
        status: "Under Review",
        subjectHistory: [
            { subject: "Mathematics", score: "85%", date: "2023-03-01" },
            { subject: "English", score: "80%", date: "2023-04-15" },
            { subject: "Science", score: "90%", date: "2023-05-20" },
            { subject: "History", score: "88%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
    {
        id: 12,
        profileImage: "https://images.unsplash.com/photo-1578003452892-8c3bbd659635?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        studentName: "Isabella Johnson",
        studentId: "S12356",
        email: "isabella@example.com",
        timestamp: "2023-09-15 19:30:45",
        offenseType: "Plagiarism",
        status: "Terminated",
        subjectHistory: [
            { subject: "Mathematics", score: "75%", date: "2023-03-01" },
            { subject: "English", score: "78%", date: "2023-04-15" },
            { subject: "Science", score: "70%", date: "2023-05-20" },
            { subject: "History", score: "82%", date: "2023-06-10" },
        ],
        actionHistory: [
            { description: "Warning issued", date: "2023-09-01" },
            { description: "Parental notification sent", date: "2023-09-05" },
            { description: "Disciplinary meeting scheduled", date: "2023-09-10" },
            { description: "Probation period started", date: "2023-09-15" },
        ],
    },
];
