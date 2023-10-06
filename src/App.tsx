import React, { Component } from 'react';
import "../src/App.css"


interface projectsFace {
	defaultFilter: string,
	projects: project[],
}

interface project {
	img: string,
	category: string,
}


class Portfolio extends Component<{}, projectsFace> {
	constructor(props: {}) {
		super(props);
		this.state = {
			defaultFilter: 'All',
			projects: [{
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
				category: "Business Cards"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
				category: "Business Cards"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
				category: "Business Cards"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
				category: "Flayers"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
				category: "Business Cards"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
				category: "Business Cards"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
				category: "Websites"
			}, {
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
				category: "Flayers"
			}]
		}
	}

	activSelectFilter = (filter: string) => {
		this.setState({ defaultFilter: filter })
	}

	render() {
		const filters = ['All', 'Websites', 'Flayers', 'Business Cards']
		const { defaultFilter, projects } = this.state

		const filterProject = defaultFilter === "All"
			? projects : projects.filter((filter) => filter.category === defaultFilter)


		return (
			<div>
				<Toolbar
					filters={filters}
					selected={defaultFilter}
					onSelectFilter={this.activSelectFilter}
				/>
				<ProjectList projects={filterProject}
				/>
			</div>
		)

	}
}

interface filterBar {
	filters: string[],
	selected: string,
	onSelectFilter: (filter: string) => void,
}

function Toolbar({ filters, selected, onSelectFilter }: filterBar) {

	return (
		<div className='button'>
			{filters.map((filter) => (
				<button
					key={filter} onClick={() => onSelectFilter(filter)}
					className={filter === selected ? "active" : ""}>
					{filter}
				</button>
			))}
		</div>
	)

}

interface ProjectListProps {
	projects: project[];
}


function ProjectList({ projects }: ProjectListProps) {
	return (
		<div className='div-flex'>
			{projects.map((project, index) => (
				<div key={index}>
					<img src={project.img} alt={project.category} />
				</div>
			))}
		</div>
	);
}




export default Portfolio