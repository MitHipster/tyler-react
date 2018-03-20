var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<ul className="languages">
			{languages.map(function(lang) {
				return (
					<li
						className={lang === props.selectedLanguage ? 'selected' : null}
						onClick={props.onSelect.bind(null, lang)}
						key={lang}>
						{lang}
					</li>
				);
			})}
		</ul>
	);
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(lang) {
		this.setState(function() {
			return {
				selectedLanguage: lang
			};
		});
	}
	render() {
		return (
			<div className="languages">
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>
		);
	}
}

module.exports = Popular;
