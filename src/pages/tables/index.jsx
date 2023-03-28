import * as React from 'react'
import { Icon } from '@/components'
import { faker } from '@faker-js/faker'

import './style.scss'
import clsx from 'clsx'

export default class Tables extends React.PureComponent {
  render() {
    return (
      <main className="tables">
        <div className="tables__content">
          <div className="card mb-3">
            <div className="card__header">
              <h2 className="card__header__ttl">Authors Table</h2>
            </div>

            <div className="card__body">
              <table className="table">
                <thead>
                  <tr>
                    <th>AUTHOR</th>
                    <th>FUNCTION</th>
                    <th style={{ textAlign: 'center' }}>STATUS</th>
                    <th style={{ textAlign: 'center' }}>EMPLOYED</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Tables.authors.map((author, index) => (
                    <tr key={index}>
                      <td className="iconed" width="50%" style={{ paddingTop: 12, paddingBottom: 12 }}>
                        <div className="tables__user__block">
                          <div className="tables__user__block__avatar">
                            <img src={faker.image.avatar(50, 50, true)} alt="" />
                          </div>
                          <div className="tables__user__block__details">
                            <span className="name">{author.author.name}</span>
                            <span className="email">{author.author.email}</span>
                          </div>
                        </div>
                      </td>
                      <td width="10%" style={{ paddingTop: 12, paddingBottom: 12 }}>
                        <div className="tables__function">
                          <span className="role">{author.function.role}</span>
                          <span className="entity">{author.function.entity}</span>
                        </div>
                      </td>
                      <td width="15%" style={{ textAlign: 'center', paddingTop: 12, paddingBottom: 12 }}>
                        <div
                          className={clsx(
                            'badge',
                            author.status === 'online' ? 'badge-primary' : 'badge-hit-grey'
                          )}
                        >
                          {author.status}
                        </div>
                      </td>
                      <td width="15%" style={{ textAlign: 'center', paddingTop: 12, paddingBottom: 12 }}>
                        {author.employed}
                      </td>
                      <td width="5%" style={{ paddingTop: 12, paddingBottom: 12 }}>
                        <span className="color-hit-grey">Edit</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <h2 className="card__header__ttl">Projects</h2>
              <span className="card__header__desc">
                <Icon name="tid-checkmark" className="color-primary" /> <strong>30 done</strong> this month
              </span>
            </div>

            <div className="card__body">
              <table className="table">
                <thead>
                  <tr>
                    <th>COMPANIES</th>
                    <th>BUDGET</th>
                    <th style={{ textAlign: 'center' }}>STATUS</th>
                    <th colSpan={2}>COMPLETION</th>
                  </tr>
                </thead>
                <tbody>
                  {Tables.projects.map((project, index) => (
                    <tr key={index}>
                      <td className="iconed" width="50%" style={{ minWidth: '260px' }}>
                        <Icon name={project.icon} />
                        {project.company}
                      </td>
                      <td width="10%">{project.budget}</td>
                      <td width="20%" style={{ textAlign: 'center' }}>
                        {project.status}
                      </td>
                      <td width="15%">
                        <div className="progress" style={{ '--progress': `${project.completion}%` }}>
                          {project.completion}%
                        </div>
                      </td>
                      <td width="5%">
                        <Icon name="tid-more" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

Tables.authors = [
  {
    status: 'online',
    employed: '14/06/21',
    author: {
      name: 'Elaine Benes',
      email: 'elaine@vandelay.com',
    },
    function: {
      role: 'Manager',
      entity: 'Organization',
    },
  },
  {
    status: 'offline',
    employed: '14/06/21',
    author: {
      name: 'Sidra Holland',
      email: 'sidra@vandelay.com',
    },
    function: {
      role: 'Programmer',
      entity: 'Developer',
    },
  },
  {
    status: 'online',
    employed: '14/06/21',
    author: {
      name: 'Cosmo Kramer',
      email: 'kramer@vandelay.com',
    },
    function: {
      role: 'Executive',
      entity: 'Projects',
    },
  },
  {
    status: 'online',
    employed: '14/06/21',
    author: {
      name: 'Newman',
      email: 'newman@usps.com',
    },
    function: {
      role: 'Manager',
      entity: 'Organization',
    },
  },
  {
    status: 'offline',
    employed: '14/06/21',
    author: {
      name: 'Frank Costanza',
      email: 'frank@vandelay.com',
    },
    function: {
      role: 'Programmer',
      entity: 'Developer',
    },
  },
  {
    status: 'offline',
    employed: '14/06/21',
    author: {
      name: 'Art VanDelay',
      email: 'art.ie@vandelay.com',
    },
    function: {
      role: 'Designer',
      entity: 'UI/UX Design',
    },
  },
]

Tables.projects = [
  {
    icon: 'tid-adobe-xd',
    company: 'Software Import/Export',
    budget: '$14,000',
    status: 'Working',
    completion: 60,
  },
  {
    icon: 'tid-atlassian',
    company: 'Add Progress Track',
    budget: '$3,000',
    status: 'Canceled',
    completion: 10,
  },
  {
    icon: 'tid-slack',
    company: 'Fix Platform Errors',
    budget: 'Not set',
    status: 'Done',
    completion: 100,
  },
  {
    icon: 'tid-spotify',
    company: 'Launch our Mobile App',
    budget: '$32,000',
    status: 'Done',
    completion: 100,
  },
  {
    icon: 'tid-jira',
    company: 'Add the New Pricing Page',
    budget: '$400',
    status: 'Working',
    completion: 25,
  },
]
