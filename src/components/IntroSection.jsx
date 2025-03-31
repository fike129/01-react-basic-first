import React from "react"

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Glebaty University</h1>
//             <h3 className="centered" style={ {color: '#666'} }>
//                 Front-end и Back-end разработка битрикса под ключ
//             </h3>
//         </section>
//     )
// }

export default function IntroSection() {
    return React.createElement('section', null, [
        React.createElement('h1', {className: 'centered', key: 1}, 'Glebaty University'),
        React.createElement('h3', {className: 'centered', style: {color: '#666'}, key: 2}, 'Front-end и Back-end разработка битрикса под ключ'),
    ])
}