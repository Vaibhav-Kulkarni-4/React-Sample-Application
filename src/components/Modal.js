import { useState } from "react";
import { List, Modal } from "rsuite";

function MemberModal({
  isModalVisible,
  isModalSize,
  closeModal,
  currentMember,
}) {
  return (
    <div className="pt-2 modal-container">
      <Modal
        size={isModalSize}
        show={isModalVisible}
        onHide={() => closeModal()}
      >
        <Modal.Header>
          <Modal.Title className="text-green-500">
            {currentMember.real_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-sm text-indigo-600 pb-2">
            Recent activity periods
          </p>
          <div>
            <List bordered>
              {currentMember?.activity_periods?.map((item, index) => (
                <List.Item key={index} index={index}>
                  <p className="text-gray-800">
                    {index + 1}) On{" "}
                    {item.start_time.slice(
                      0,
                      item.start_time.lastIndexOf("0") + 1
                    )}
                  </p>
                  <span className="text-sm text-green-500">
                    Start Time: {item.start_time.slice(11)}
                  </span>
                  <span className="px-1"> | </span>
                  <span className="text-sm text-yellow-800">
                    End Time: {item.end_time.slice(11)}
                  </span>
                </List.Item>
              ))}
            </List>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MemberModal;
