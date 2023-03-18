import Github from '../../assets/icons/github.svg';
import './style.css'

const ProjectCard = ({ projectList }) => {

    return (
        <section className="container">
            {
                projectList.map((projeto, index) => (
                    <div key={`${index}-${projeto.title}`} className='card__container mx-4'>
                        <div className='card__header'>
                            <div className='card__icone'>
                                <a href={projeto.githubLink} target='_blank' rel="noreferrer">
                                    <img src={Github} alt='Github logo' />
                                </a>
                            </div>
                            <div className='card__text'>
                                <p className='card__text-title'>{projeto.title}</p>
                                <p className='card__text-description'>{projeto.description}</p>
                            </div>
                        </div>
                        <div className='card__footer'>
                            {
                                projeto.stacks.map((stack, index) => {
                                    if(index === projeto.stacks.length - 1) {
                                        return (
                                            <span key={index}>{stack.toUpperCase()}</span>
                                        )
                                    } else {
                                        return (
                                            <span key={index}>{stack.toUpperCase()}{' '}|{' '}</span>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                ))

            }
        </section>
    )
}

export default ProjectCard;