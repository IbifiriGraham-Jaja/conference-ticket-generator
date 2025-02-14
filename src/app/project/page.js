const ProjectPage = () => {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
        <h1 className="text-4xl md:text-5xl font-roadrage text-center mb-12">Event Ticket Booking UI – Open Source Practice Project 🎟️</h1>
  
        <div className="space-y-8">
          {/* Overview */}
          <section className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
            <h2 className="text-2xl font-roadrage mb-4">Overview</h2>
            <p className="font-roboto leading-relaxed">
              This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. 
              The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently. 
              The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, 
              user authentication (optional), and ticket validation systems.
            </p>
          </section>
  
          {/* Flow & Features */}
          <section className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
            <h2 className="text-2xl font-roadrage mb-4">Flow & Features</h2>
            <ul className="font-roboto space-y-2 list-disc pl-5">
              <li><strong>1️⃣ Ticket Selection:</strong> Users can browse available tickets (Free & Paid).</li>
              <li>• Ticket options are displayed in a list or card view.</li>
              <li>• Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.</li>
              <li>• Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.</li>
              <li><strong>2️⃣ Attendee Details Form:</strong> Users input their Name, Email, and optional Phone Number.</li>
              <li>• Profile picture upload option with preview functionality.</li>
              <li>• Ticket summary is visible to ensure users review their details before submission.</li>
              <li><strong>3️⃣ Payment or Success Page:</strong> If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
              <li>• If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments.</li>
              <li>• Upon successful booking, users receive:</li>
              <li>  - A visual ticket preview with a unique QR Code.</li>
              <li>  - An option to download the ticket as PDF or save it to their device.</li>
              <li>  - An email confirmation containing ticket details.</li>
            </ul>
          </section>
  
          {/* How to Build This */}
          <section className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
            <h2 className="text-2xl font-roadrage mb-4">How to Build This 🚀</h2>
            <p className="font-roboto leading-relaxed">
              This UI can be implemented using:
            </p>
            <ul className="font-roboto space-y-2 list-disc pl-5">
              <li><strong>📌 Frontend (Next.js or React):</strong></li>
              <li>• Component Breakdown:</li>
              <li>  - <code>TicketCard.tsx</code> → Displays ticket details</li>
              <li>  - <code>AttendeeForm.tsx</code> → Captures user details</li>
              <li>  - <code>PaymentModal.tsx</code> → Handles payment processing</li>
              <li>  - <code>SuccessScreen.tsx</code> → Shows the final ticket preview</li>
              <li>• State Management: React’s Context API, Zustand, or Redux (if needed).</li>
              <li>• File Handling: Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with <code>URL.createObjectURL()</code>.</li>
              <li><strong>📌 Backend (Optional):</strong></li>
              <li>• Node.js & Express or Firebase Functions.</li>
              <li>• Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records.</li>
              <li><strong>📌 Payment Integration:</strong></li>
              <li>• Stripe Checkout (for international transactions).</li>
              <li>• Paystack or Flutterwave (for African users).</li>
            </ul>
          </section>
  
          {/* What You’ll Learn */}
          <section className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
            <h2 className="text-2xl font-roadrage mb-4">What You’ll Learn 🧑‍💻</h2>
            <ul className="font-roboto space-y-2 list-disc pl-5">
              <li>File handling & validation (profile picture uploads).</li>
              <li>Dynamic UI updates based on ticket selection.</li>
              <li>Persisting bookings using local state or a backend.</li>
              <li>Integrating payment gateways for ticket purchases.</li>
              <li>Generating & validating QR Codes for event check-in (Advanced).</li>
            </ul>
          </section>
  
          {/* Need Help? */}
          <section className="p-6 bg-greenfour rounded-[32px] border border-greenthree text-center">
            <h2 className="text-2xl font-roadrage mb-4">Need Help? Reach Out! 💬</h2>
            <p className="font-roboto">If you have any questions, feel free to ask!</p>
          </section>
        </div>
      </div>
    );
  };
  
  export default ProjectPage;
  