import { useState, useEffect } from "react";
import { List } from "rsuite";
import MemberModal from "./Modal";
import { Button } from "rsuite";

function Members() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [members, setMembers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSize, setModalSize] = useState("xs");
  const [currentMember, setCurrentMember] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/members")
      .then((res) => res.json())
      .then(
        (data) => {
          setMembers(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const open = (size, id) => {
    members.forEach((i) => {
      if (i.id == id) {
        setCurrentMember(i);
      }
    });
    setIsModalVisible(true);
    setModalSize(size);
  };

  const close = () => {
    setIsModalVisible(false);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="text-blue-900 text-center text-lg my-auto">
        Loading users...
      </div>
    );
  } else {
    return (
      <div className="p-4 text-blue-900">
        <h4 className="pb-3">Users</h4>
        <List hover>
          {members.map((member, index) => (
            <List.Item className="text-lg" key={member.id}>
              {index + 1})
              <a className="text-blue-900 no-underline">
                <Button
                  className="text-xl"
                  size="lg"
                  appearance="link"
                  onClick={() => open("xs", member.id)}
                >
                  {member.real_name}
                </Button>
              </a>
            </List.Item>
          ))}
        </List>
        <MemberModal
          isModalVisible={isModalVisible}
          isModalSize={isModalSize}
          closeModal={close}
          currentMember={currentMember}
        />
      </div>
    );
  }
}

export default Members;
