import NotificationBar from "@/components/NotificationBar";
import "./globals.css";

export const metadata = {
  title: "Alışverişin Merkezi",
  description: "OSG Alışverişin Merkezi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 flex flex-col">
        <NotificationBar />
        {children}
      </body>
    </html>
  );
}
