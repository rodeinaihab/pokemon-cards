import React, { useEffect, useState } from "react";
import CardComponent from "../components/card/CardComponent";
import { getCards } from "../services/getCards";
import { AppBar, IconButton, TextField, Typography } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import pokeBall from "../assets/ball.png";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';


const HomeView = () => {
  const [allCards, setAllCards] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [types, setTypes] = useState([]);
  const [order, setOrder] =  useState("ascending");

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const options = [
    'ascending',
    'descending',
  ];

  const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

  const handleClose = () => {
        setAnchorEl(null);
    };

  const defaultTypes = [
        "Colorless",
        "Darkness",
        "Dragon",
        "Fairy",
        "Fighting",
        "Fire",
        "Grass",
        "Lightning",
        "Metal",
        "Psychic",
        "Water"
    ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
  const handleTypeChange = (event) => {
        const {
            target: { value },
        } = event;
        setTypes(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


  const fetchData = async () => {
    const data = await getCards(searchQuery, types, order);
    setAllCards(data.data);
  };

  const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOrder(options[index]);
        setAnchorEl(null);
        //fetchData();
    };

  const imageClick = () => {
        setSearchQuery("");
        setTypes([]);
        fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [order]);

  return (
    <div className="home">
        <AppBar position="static" color="primary.main">
            <div className="bar-container">
                <div className="title-container">
                    <img src={ pokeBall } alt="Welcome to Pokémon App"
                         style={{width: "35px",height: "35px", marginRight: "20px"}}
                         onClick={() => imageClick()}/>
                    <Typography variant="h4" component="h6" color="textPrimary">
                        Pokémon Cards
                    </Typography>
                </div>
                <div className="search-bar">
                    <TextField
                        placeholder="Enter Pokémon Name"
                        value={searchQuery}
                        className="text-input"
                        color="primary.main"
                        style = {{width: "250px", marginTop: "10px"}}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <IconButton onClick={() => fetchData()}>
                        <SearchIcon />
                    </IconButton>
                </div>
                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: 'background.paper' }}
                    >
                        <ListItem
                            button
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="Sort by Number"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                primary="Sort by Number"
                                secondary={options[selectedIndex]}
                            />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Choose Pokémon Types</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={types}
                            onChange={handleTypeChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            onClose={() => fetchData()}
                        >
                            {defaultTypes.map((type) => (
                                <MenuItem key={type} value={type}>
                                    <Checkbox checked={defaultTypes.indexOf(type) > -1} />
                                    <ListItemText primary={type} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </AppBar>
      {allCards ? (
        <div className="card-container">
          {
            allCards.data && allCards.data.length > 0 ?
                allCards.data.map((card) => {return <CardComponent key={card.id} card={card} />;})
                :
                ( <div className="error-cards">
                    <h4 >Unfortunately, no Pokémon matches your search! Please search for other Pokémons!</h4>
                </div> )
          }
        </div>
      ) : (
      <h4>Loading...</h4>
      )}
    </div>
  );
};

export default HomeView;
