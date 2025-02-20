import { FaBook } from "react-icons/fa";
import { IoMdWarning } from "react-icons/io";

export const notifications = [
    { message: "Account creation successful for Admin user", time: "10 minutes ago", username: "Admin", studentId: "STU001234" },
    { message: "New login detected from Admin account", time: "1 hour ago", username: "Admin", studentId: "STU001234" },
    { message: "Password recovery initiated for Admin account", time: "30 minutes ago", username: "Admin", studentId: "STU005678" },
    { message: "Dashboard updated with new statistics", time: "2 hours ago" },
    { message: "New flagged offense recorded: Student talking during exam", time: "3 hours ago", username: "Dr. Brown", studentId: "STU009876" },
    { message: "Active students count updated: 120 active students", time: "4 hours ago" },
    { message: "New exam event scheduled: Mathematics exam", time: "5 hours ago", username: "Mark Johnson", studentId: "STU012345" },
    { message: "Feedback received for exam proctoring system", time: "6 hours ago" },
    { message: "Exam results posted for latest Biology exam", time: "7 hours ago", username: "Admin", studentId: "STU001234" },
    { message: "System maintenance completed successfully", time: "8 hours ago", username: "Exam Team", studentId: "STU001234" },
    { message: "New exam resources uploaded for students", time: "9 hours ago" },
    { message: "Alerts system updated with new parameters", time: "10 hours ago", username: "Exam Team", studentId: "STU001234" },
];

export const alerts = [
    { message: "Malpractice detected: Student ID STU015678 - Talking during exam", time: "5 minutes ago", username: "John Doe", studentId: "STU015678" },
    { message: "Security alert: Unusual login activity from Student ID STU005678", time: "15 minutes ago", username: "Jane Smith", studentId: "STU005678" },
    { message: "Urgent: Unauthorized access attempt detected", time: "20 minutes ago", username: "Security Team", studentId: "STU999999" },
    { message: "Important: Exam schedule has been updated", time: "1 hour ago", username: "Admin", studentId: "STU001234" },
    { message: "Reminder: Exam proctoring system active during exams", time: "2 hours ago", username: "Admin", studentId: "STU001234" },
    { message: "Warning: Irregular behavior detected in exam attempt by STU001234", time: "3 hours ago", username: "Admin", studentId: "STU001234" },
    { message: "Action required: Verify identity for exam ID STU001234", time: "4 hours ago", username: "Admin", studentId: "STU001234" },
];

export const dashboardComponents = [
    {
        icon: FaBook,
        count: 200,
        label: "Total Exams Monitored",
        borderColor: "border-primary-80",
        bgColor: "bg-primary-20",
        textColor: "text-primary-80",
    },
    {
        icon: IoMdWarning,
        count: 15,
        label: "Flagged Offences",
        borderColor: "border-primary-yellow",
        bgColor: "bg-primary-yellow-20",
        textColor: "text-primary-yellow",
    },
    {
        icon: FaBook,
        count: 170,
        label: "Active Students",
        borderColor: "border-primary-green",
        bgColor: "bg-primary-green-20",
        textColor: "text-primary-green",
    },
];

export const activityLog = [
    "Student Jane Smith logged in.",
    "Device tampering detected in History exam.",
];

export const filterOptions = [
    { label: 'All', count: notifications.length + alerts.length, value: 'all' },
    { label: 'Alerts', count: alerts.length, value: 'alerts' },
    { label: 'Notifications', count: notifications.length, value: 'notifications' },
];