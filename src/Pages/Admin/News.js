// src/Pages/Admin/News.js
import React, { useState } from 'react';
import '../../style/AdminNews.css';

function NewsAdmin() {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: 'New Branch Opening in Mbarara',
      content: 'We are excited to announce our new branch in Mbarara city...',
      date: '2025-04-01',
      status: 'Published',
      image: ''
    },
    {
      id: 2,
      title: 'Partnership with International Supplier',
      content: 'Mahega Suppliers has partnered with a global logistics firm...',
      date: '2025-04-10',
      status: 'Draft',
      image: ''
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
  const [currentNews, setCurrentNews] = useState({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    status: 'Draft',
    image: ''
  });

  const openAddModal = () => {
    setModalType('add');
    setCurrentNews({
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      status: 'Draft',
      image: ''
    });
    setShowModal(true);
  };

  const openEditModal = (news) => {
    setModalType('edit');
    setCurrentNews({ ...news });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentNews(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === 'add') {
      const newNews = {
        id: newsList.length ? Math.max(...newsList.map(n => n.id)) + 1 : 1,
        ...currentNews
      };
      setNewsList([...newsList, newNews]);
    } else {
      setNewsList(newsList.map(n => n.id === currentNews.id ? currentNews : n));
    }
    setShowModal(false);
    alert(`${modalType === 'add' ? 'News added' : 'News updated'} successfully!`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this news?')) {
      setNewsList(newsList.filter(n => n.id !== id));
      alert('News deleted!');
    }
  };

  return (
    <div className="admin-news-container">
      <div className="admin-news-header">
        <h2>Manage News & Announcements</h2>
        <button className="btn-primary" onClick={openAddModal}>
          ➕ Add New News
        </button>
      </div>

      <div className="news-table-container">
        <table className="news-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map(news => (
              <tr key={news.id}>
                <td>{news.id}</td>
                <td>{news.title}</td>
                <td>{news.date}</td>
                <td>
                  <span className={`status-badge ${news.status.toLowerCase()}`}>
                    {news.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn-edit" 
                    onClick={() => openEditModal(news)}
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    className="btn-delete" 
                    onClick={() => handleDelete(news.id)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalType === 'add' ? 'Add New News' : 'Edit News'}</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
            </div>
            <form onSubmit={handleSubmit} className="news-form">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={currentNews.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Content *</label>
                <textarea
                  name="content"
                  value={currentNews.content}
                  onChange={handleInputChange}
                  rows="6"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={currentNews.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={currentNews.status}
                    onChange={handleInputChange}
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  {modalType === 'add' ? 'Add News' : 'Update News'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsAdmin;