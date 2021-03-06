import React from 'react'
import { MdDelete, MdCreate } from 'react-icons/md'
import { Container, ActionContainer } from './styles'

interface INaverInfo {
  id: string
  name: string
  admission_date: string
  job_role: string
  project: string
  birthdate: string
  url: string
}

interface IProps {
  naver: INaverInfo
  handleOpenDeleteModal: (naver: INaverInfo) => void
  handleEdit: (id: string) => void
  handleView: (naver: INaverInfo) => void
}

const Navers: React.FC<IProps> = ({
  naver,
  handleOpenDeleteModal,
  handleEdit,
  handleView,
}) => {
  return (
    <Container>
      <button
        type="button"
        onClick={() => handleView(naver)}
        data-testid={`detail-naver-${naver.id}`}
      >
        <img src={naver.url} alt={naver.name} />
      </button>
      <h2>{naver.name}</h2>
      <p>{naver.job_role}</p>
      <ActionContainer>
        <button
          type="button"
          onClick={() => handleOpenDeleteModal(naver)}
          data-testid={`remove-naver-${naver.id}`}
        >
          <MdDelete size={18} color="#212121" />
        </button>

        <button
          type="button"
          onClick={() => handleEdit(naver.id)}
          data-testid={`edit-naver-${naver.id}`}
        >
          <MdCreate size={18} color="#212121" />
        </button>
      </ActionContainer>
    </Container>
  )
}

export default Navers
