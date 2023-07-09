import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchComp from './SearchComp';
import '../CSS/collegeList.css';
import { Tab, Tabs } from 'react-bootstrap';
import { headers, token, url } from './MainComponent';

function CollegeSearch({ Followed, user_id, handleDelete }) {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState('');

  useEffect(() => {
    axios.get(`${url}colleges`)
      .then((res) => {
        setColleges(res.data);
        setFilteredColleges(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCourseFilter = (event) => {
    const selectedCourse = event.target.value;
    setSelectedCourses(selectedCourse);
  };

  useEffect(() => {
    if (selectedCourses === '') {
      setFilteredColleges(colleges);
    } else {
      const filtered = colleges.filter((college) =>
        college.courses.includes(selectedCourses)
      );
      setFilteredColleges(filtered);
    }
  }, [selectedCourses, colleges]);

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#DBE2E9' }}>
      <div>
        <div
          className="container mt-5 p-0 h-70 searchContainer"
          style={{ backgroundColor: '#f8f9fa', borderRadius: '5px', border: '1px solid #000' }}
        >
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'right', padding: '10px' }}>
                  <label className="filter-label" htmlFor="course-filter">
                    Filter by Course:
                  </label>
                </td>
                <td>
                  <select
                    id="course-filter"
                    className="filter-select"
                    value={selectedCourses}
                    onChange={handleCourseFilter}
                  >
                    <option value="">All Courses</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Electronics Engineering">Electronics Engineering</option>
                    {/* Add more course options as needed */}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          {filteredColleges.length > 0 ? (
            <div>
              {filteredColleges.map((college) => (
                <div key={college.id}>
                  <SearchComp
                    collegeId={college.id}
                    Followed={Followed}
                    user_id={user_id}
                    handleDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-center" style={{ height: '300px', color: 'gray', marginTop: '200px', fontWeight: 'bold' }}>
              No Colleges Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollegeSearch;
