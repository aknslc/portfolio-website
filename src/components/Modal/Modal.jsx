import Modal from 'react-modal'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './modal.module.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: "70%",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ProjectModal = ({ modalIsOpen, setIsOpen, project }) => {

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                

            >
                <AiOutlineClose
                    size={25}
                    style={{ position: "absolute", cursor: "pointer", top: "15px", right: "15px" }}
                    onClick={closeModal}
                />

                <div className={styles.modalContent}>
                    <div className="row d-flex align-items-start">
                        <div className="col-lg-6">
                            <img src={project.img} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div>
                                <a href="!#">Github</a>
                            </div>
                            <div>
                                <a href="!#">Live</a>
                            </div>
                        </div>
                    </div>


                </div>

            </Modal>
        </div>
    )
}

export default ProjectModal