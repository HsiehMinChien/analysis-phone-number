import { useState, useCallback } from 'react';
import { Modal, Switch } from 'antd';
import cx from 'classnames';
import { SettingOutlined } from '@ant-design/icons';
import './style.styl';

const PREFIX_CLASS = 'resume';

export default function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false);
  const _handleCloseModal = useCallback(() => {
    setIsSettingModalVisible(false);
  }, [])
  const _handleOpenModal = useCallback(() => {
    setIsSettingModalVisible(true);
  }, [])

  return (
    <div className={cx(PREFIX_CLASS, { 'dark-mode': isDarkMode })}>
      <div className={`${PREFIX_CLASS}__left`}>
        <div></div>
      </div>
      <div className={`${PREFIX_CLASS}__right`}></div>
      <Modal
        title="Setting"
        okText="Close"
        visible={isSettingModalVisible}
        onCancel={_handleCloseModal}
        onOk={_handleCloseModal}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Switch
          checkedChildren="dark mode"
          unCheckedChildren="light mode"
          checked={isDarkMode}
          onChange={value => setIsDarkMode(value)}
        />
      </Modal>
      <div className="setting-icon">
        <SettingOutlined onClick={_handleOpenModal} />
      </div>
    </div>
  );
}