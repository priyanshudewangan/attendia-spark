import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import { QRCodeCanvas } from "qrcode.react";

export default function QRAttendance() {
  const [data, setData] = useState<string>("Thank You");
  const [user, setUser] = useState<{ name: string; photo: string }>({
    name: "Priyanshu Dewangan",
    photo: "/photo.jpg"
  });

  const handleScan = (result: { text: string } | null) => {
    if (result) {
      setData(result.text);
      setUser({ name: "Priyanshu Dewangan", photo: "/photo.jpg" });
    }
  };

  const handleError = (err: Error) => {
    console.error(err.message);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white border rounded-lg shadow-lg p-6 flex items-center">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">QR Attendance</h1>
          <QrScanner
            delay={300}
            style={{ width: 300, height: 300 }}
            onError={handleError}
            onScan={handleScan}
          />
          <p className="mt-4 text-center text-gray-700">Scanned: {data}</p>
        </div>
        <div className="flex flex-row items-center space-x-8">
          {user ? (
            <>
              <div className="flex flex-col items-start">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border shadow mb-2 object-cover"
                />
                <h2 className="font-bold text-center text-2xl">{user.name}</h2>
              </div>
              <QRCodeCanvas value={data} size={192} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}