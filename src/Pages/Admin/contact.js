import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/contact-messages";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [readFilter, setReadFilter] = useState("all"); // all, true, false
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch messages
  const fetchMessages = async () => {
    setLoading(true);
    try {
      let url = API_URL;
      if (readFilter !== "all") {
        url += `?read=${readFilter}`;
      }
      const res = await axios.get(url);
      setMessages(res.data.contact_messages);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, [readFilter]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit new message
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL + "/", formData);
      setFormData({ name: "", email: "", message: "" });
      fetchMessages(); // refresh messages
    } catch (err) {
      console.error("Error creating message:", err);
    }
  };

  // Mark message as read
  const markAsRead = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/mark-read`);
      fetchMessages();
    } catch (err) {
      console.error("Error marking as read:", err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Contact Messages</h2>

      {/* Filter */}
      <div>
        <label>Filter by read status: </label>
        <select
          value={readFilter}
          onChange={(e) => setReadFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="true">Read</option>
          <option value="false">Unread</option>
        </select>
      </div>

      {/* Create message form */}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Messages List */}
      <div style={{ marginTop: "20px" }}>
        {loading ? (
          <p>Loading...</p>
        ) : messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p>
                <strong>{msg.name}</strong> ({msg.email}){" "}
                {msg.read ? "(Read)" : "(Unread)"}
              </p>
              <p>{msg.message}</p>
              <p>
                <small>{new Date(msg.created_at).toLocaleString()}</small>
              </p>
              {!msg.read && (
                <button onClick={() => markAsRead(msg.id)}>Mark as Read</button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactMessages;
