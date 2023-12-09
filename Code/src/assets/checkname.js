const fs = require('fs');

module.exports = {
	isValid: function(first, last) {
		var prefix = fs.readFileSync('./src/assets/prefixlist.txt').toString().split(",");
		var suffix = fs.readFileSync('./src/assets/suffixlist.txt').toString().split(",");
		var test;
		
		
		if(first.toLowerCase() == 'grey'){
			first = 'gray';
		}
		
		for(k=0;k<prefix.length;k++){
			if(first.toLowerCase() == prefix[k]){
				//test = 1;
				//first = first.toLowerCase();
				for(j=0;j<suffix.length;j++){
					if(last.toLowerCase() == suffix[j]){
						//last = last.toLowerCase();
						test = 1;
						break;
					}
					else{
						test = 0;
					}
				}
			}
		}
		
		if(test != 1){
			test = 0;
			return test;
		}
		
		if( (first == last) || 
		(first == "silver" && last == "pelt") || 
		(first == "green" && last == "leaf") || 
		(first == "leaf" && last == "fall") || 
		(first == "moon" && (last == "pool" || last == "stone")) || 
		(first == "tall" && last == "rock") || 
		(first == "tall" && last == "pine") || 
		(first == "owl" && last == "tree") || 
		(first == "snake" && last == "rock") || 
		(first == "snake" && last == "tongue") || 
		((first != "sun" && first != "moon" && first != "light" && first != "wood") && last == "beam") || 
		((first == "fox" || first == "mouse" || first == "rabbit" || first == "rat" || first == "snake") && last == "heart") || 

		((first == "ash" || first == "ashen" || first == "blaze" || first == "blizzard" || first == "burnt" || first == "burning" || first == "cold" || first == "dew" || first == "dry" || first == "ember" || first == "fire" || first == "flame" || first == "fog" || first == "foggy" || first == "frost" || first == "frosted" || first == "frozen" || first == "hail" || first == "ice" || first == "rain" || first == "rainy" || first == "sleet" || first == "smoke" || first == "snow" || first == "soot" || first == "storm" || first == "sun" || first == "sunny" || first == "warm" || first == "water") && (last == "ash" || last == "blizzard" || last == "burn" || last == "dew" || last == "ember" || last == "fire" || last == "flame" || last == "fog" || last == "frost" || last == "hail" || last == "ice" || last == "rain" || last == "river" || last == "smoke" || last == "snow" || last == "soot" || last == "sun")) || 
		((first == "boulder" || first == "bounce" || first == "gravel" || first == "pebble" || first == "rock" || first == "stone") && (last == "boulder" || last == "rock" || last == "stone")) || 
		(first == "brambling" && last == "bramble") || 
		(first == "blooming" && last == "bloom") || 
		((first == "brave" || first == "dream" || first == "hope" || first == "wish") && (last == "dream" || last == "oath" || last == "weed" || last == "wish")) || 
		((first == "clouded" || first == "cloudy") && last == "cloud") ||    
		((first == "dapple" || first == "dappled" || first == "fleck" || first == "flecked" || first == "freckle" || first == "freckled" || first == "patch" || first == "patched" || first == "patchy" || first == "smudge" || first == "smudged" || first == "speckle" || first == "speckled" || first == "splotch" || first == "splotched" || first == "spot" || first == "spotted" || first == "stripe" || first == "striped") && (last == "dapple" || last == "dapples" || last == "freckle" || last == "freckles" ||last == "patch" || last == "patches" || last == "speck" || last == "speckle" || last == "speckles" || last == "splotch" || last == "splotches" || last == "spot" || last == "spots" || last == "stripe")) ||
		((first == "dawn" || first == "day" || first == "dusk" || first == "evening" || first == "morning" || first == "night" || first == "twilight") && (last == "dawn" || last == "dusk")) || 
		((first == "fallen" || first == "falling") && last == "fall") || 
		(first == "foggy" && last == "fog") || 
		(first == "fuzzy" && last == "fuzz") || 
		(first == "leaf" && last == "leaves") || 
		((first == "day" || first == "lightning" || first == "light" || first == "night") && (last == "light" || last == "lightning" || last == "night")) || 
		((first == "misted" || first == "mistle" || first == "misty") && last == "mist") || 
		(first == "mossy" && last == "moss") || 
		(first == "murky" && last == "murk") || 
		(first == "nightingale" && last == "gale") || 
		(first == "pouncing" && last == "pounce") || 
		(first == "rippled" && last == "ripple") || 
		(first == "roaring" && last == "roar") || 
		(first == "running" && last == "runner") || 
		(first == "rushing" && last == "rush") || 
		(first == "scarred" && last == "scar") || 
		(first == "shaded" && last == "shade") || 
		((first == "shimmering" || first == "shine" || first == "shining") && last == "shimmer") || 
		((first == "shimmering" || first == "shimmer" || first == "shining") && last == "shine") || 
		(first == "skipper" && (last == "dance" || last == "skip")) || 
		(first == "sneezing" && last == "sneeze") ||
		(first == "twisted" && last == "twist") || 
		((first == "mumble" || first == "murmur" || first == "roaring" || first == "whisper" || first == "whispering") && (last == "whisper" || last == "call" || last == "cry" || last == "howl" || last == "roar" || last == "shriek" || last == "wail")) || 
		(first == "winged" && last == "wing") || 

		(first == "apple" && (last == "dapple" || last == "dapples")) || 
		((first == "bean" || first == "forest") && last == "stalk") || 
		(first == "bounce" && last == "stone") || 
		(first == "flight" && (last == "fly" || last == "ice" || last == "leap")) || 
		((first == "hop" || first == "jump") && (last == "flight" || last == "leap" || last == "skip")) || 
		(first == "skunk" && last == "tongue") || 
		((first == "burning" || first == "smoke") && last == "weed") || 
		(first == "straw" && last == "jaw") || 
		(first == "tip" && (last == "tail" || last == "toe" || last == "toes")) || 

		(first == "one" && (last != "claw" || last != "ear" || last != "eye" || last != "fang" || last != "tooth" || last != "whisker")) || 

		// double water - elemental and landform names
		((first == "breeze" || first == "brook" || first == "creek" || first == "current" || first == "damp" || first == "dirt" || first == "dry" || first == "dust" || first == "dusty" || first == "hail" || first == "hill" || first == "lake" || first == "marsh" || first == "meadow" || first == "mountain" || first == "moor" || first == "mud" || first == "muddy" || first == "pond" || first == "pool" || first == "rain" || first == "rainy" || first == "rapid" || first == "rock" || first == "sand" || first == "sandy" || first == "shallow" || first == "stream" || first == "summit" || first == "swamp" || first == "tunnel" || first == "water" || first == "wave" || first == "wet") && (last == "brook" || last == "creek" || last == "dew" || last == "dust" || last == "gale" || last == "hail" || last == "lake" || last == "marsh" || last == "meadow" || last == "moor" || last == "mud" || last == "murk" || last == "peak" || last == "pond" || last == "pool" || last == "rain" || last == "river" || last == "sand" || last == "spring" || last == "stream" || last == "water" || last == "wave" || last == "wind")) || 

		// double plant names
		((first == "acorn" || first == "alder" || first == "apple" || first == "ash" || first == "ashen" || first == "aspen" || first == "asphodel" || first == "aster" || first == "barley" || first == "basil" || first == "bean" || first == "beech" || first == "berry" || first == "birch" || first == "blossom" || first == "borage" || first == "boulder" || first == "bracken" || first == "bramble" || first == "branch" || first == "briar" || first == "bristle" || first == "broom" || first == "brush" || first == "burdock" || first == "bush" || first == "campion" || first == "cedar" || first == "celandine" || first == "chamomille" || first == "chanterelle" || first == "cherry" || first == "chervil" ||first == "chestnut" || first == "chive" || first == "cinnamon" || first == "clover" || first == "comfrey" || first == "comma" || first == "cone" || first == "cormorant" || first == "cypress" || first == "dace" || first == "daisy" || first == "dandelion" || first == "dock" || first == "elder" || first == "elm" || first == "fennel" || first == "fir" || first == "flower" || first == "fritillary" || first == "fumitory" || first == "furze" || first == "garlic" || first == "ginger" || first == "glade" || first == "gorse" || first == "grass" || first == "hawthorn" || first == "hay" || first == "hazel" || first == "hedge" || first == "hemlock" || first == "ivy" || first == "jasmine" || first == "juniper" || first == "laburnum" || first == "larch" || first == "laurel" || first == "lavender" || first == "lichen" || first == "lilac" || first == "lily" || first == "linden" || first == "linnet" || first == "maize" || first == "mallow" || first == "meadow" || first == "mistle" || first == "moss" || first == "mossy" || first == "myrtle" || first == "needle" || first == "nerite" || first == "nettle" || first == "nut" || first == "oak" || first == "oat" || first == "oleander" || first == "olive" || first == "orchid" || first == "pansy" || first == "parsley" || first == "pear" || first == "petal" || first == "peony" || first == "pine" || first == "plum" || first == "poplar" || first == "poppy" || first == "primrose" || first == "privet" || first == "reed" || first == "rock" || first == "rose" || first == "rowan" || first == "rye" || first == "sage" || first== "sedge" || first == "seed" || first == "sloe" || first == "sorrel" || first == "spruce" || first == "stem" || first == "straw" || first == "sycamore" || first == "teasel" || first == "thistle" || first == "thorn" || first == "thrift" || first == "thyme" || first == "tree" || first == "twig" || first == "tulip" || first == "valerian" || first == "vervain" || first == "vine" || first == "wax" || first == "wheat" || first == "whimbrel" || first == "willow" || first == "wisteria" || first == "yarrow" || first == "yew") && (last == "acorn" || last == "alder" || last == "ash" || last == "aspen" || last == "bark" || last == "bean" || last == "beech" || last == "berry" || last == "birch" || last == "bracken" || last == "bramble" || last == "briar" || last == "burnet" || last == "cherry" || last == "clover" || last == "dace" || last == "daisy" || last == "elm" || last == "fern" || last == "furze" || last == "glade" || last == "gorse" || last == "grass" || last == "heather" || last == "ivy" || last == "juniper" || last == "laurel" || last == "lichen" || last == "lily" || last == "mallow" || last == "maple" || last == "moss" || last == "needle" || last == "nettle" || last == "nut" || last == "oak" || last == "oleander" || last == "pine" || last == "poppy" || last == "reed" || last == "rock" || last == "rose" || last == "rowan" || last == "rye" || last == "sage" || last == "sedge" || last == "seed" || last == "sorrel" || last == "spruce" || last == "thistle" || last == "tulip" ||  last == "vine" || last == "willow" || last == "yarrow" || last == "yew")) || 

		// double animal names
		((first == "adder" || first == "ant" || first == "argus" || first == "avocet" || first == "badger" || first == "barbel" || first == "bass" || first == "bat" || first == "bear" || first == "beaver" || first == "bee" || first == "beetle" || first == "bird" || first == "bittern" || first == "bleak" || first == "boar" || first == "brambling" || first == "bream" || first == "buck" || first == "bug" || first == "bumble" || first == "buzzard" || first == "cardinal" || first == "carp" || first == "cheetah" || first == "comma" || first == "condor" || first == "coot" || first == "coyote" || first == "crane" || first == "cricket" || first == "crow" || first == "cuckoo" || first == "deer" || first == "doe" || first == "dog" || first == "dove" || first == "duck" || first == "dunlin" || first == "dunnock" || first == "eagle" || first == "eel" || first == "egret" || first == "elk" || first == "falcon" || first == "fawn" || first == "ferret" || first == "finch" || first == "fish" || first == "fly" || first == "fox" || first == "frog" || first == "gadwall" || first == "gannet" || first == "gill" || first == "godwit" || first == "goose" || first == "grebe" || first == "grouse" || first == "gudgeon" || first == "gull" || first == "hare" || first == "harrier" || first == "hawk" || first == "heron" || first == "herring" || first == "hoopoe" || first == "hornet" || first == "horse" || first == "hound" || first == "jackdaw" || first == "jaguar" || first == "jay" || first == "kestrel" || first == "kite" || first == "lamprey" || first == "lark" || first == "leopard" || first == "lion" || first == "lizard" || first == "loon" || first == "lynx" || first == "maggot" || first == "magpie" || first == "mallard" || first == "marten" || first == "martin" || first == "midge" || first == "mink" || first == "minnow" || first == "mole" || first == "moose" || first == "mosquito" || first == "moth" || first == "mouse" || first == "muntjac" || first == "newt" || first == "nightingale" || first == "osprey" || first == "otter" || first == "owl" || first == "quail" || first == "panther" || first == "pelican" || first == "perch" || first == "peregrine" || first == "petrel" || first == "pheasant" || first == "pigeon" || first == "pike" || first == "pipit" || first == "plover" || first == "pochard" || first == "possum" || first == "puma" || first == "quail" || first == "rabbit" || first == "raccoon" || first == "rat" || first == "raven" || first == "roach" || first == "robin" || first == "rook" || first == "salamander" || first == "salmon" || first == "serpent" || first == "sheep" || first == "shrew" || first == "shrike" || first == "skink" || first == "skipper" || first == "skunk" || first == "slug" || first == "snail" || first == "sparrow" || first == "spider" || first == "squirrel" || first == "stag" || first == "starling" || first == "stoat" || first == "stork" || first == "swallow" || first == "swan" || first == "tench" || first == "tern" || first == "thrush" || first == "tiger" || first == "toad" || first == "trout" || first == "turtle" || first == "viper" || first == "vixen" || first == "vole" || first == "vulture" || first == "warbler" || first == "wasp" || first == "weasel" || first == "whimbrel" || first == "whinchat" || first == "wigeon" || first == "wing" || first == "winged" || first == "wolf" || first == "worm" || first == "wren") && (last == "adder" || last == "ant" || last == "bear" || last == "bee" || last == "bird" || last == "bittern" || last == "boar" || last == "bumble" || last == "buzzard" || last == "cardinal" || last == "crow" || last == "deer" || last == "doe" || last == "dog" || last == "dove" || last == "eagle" || last == "falcon" || last == "fawn" || last == "finch" || last == "fly" || last == "fox" || last == "frog" || last == "goose" || last == "hare" || last == "hawk" || last == "heron" || last == "herring" || last == "hornet" || last == "horse" || last == "hound" || last == "jaguar" || last == "jay" || last == "kite" || last == "lark" || last == "leopard" || last == "lion" || last == "lizard" || last == "marten" || last == "martin" || last == "minnow" || last == "mouse" || last == "owl" || last == "quail" || last == "petrel" || last == "pigeon" || last == "pike" || last == "puma" || last == "rabbit" || last == "raven" || last == "rook" || last == "shrew" || last == "shrike" || last == "snake" || last == "sparrow" || last == "spider" || last == "stag" || last == "swan" || last == "swift" || last == "tern" || last == "thrush" || last == "tiger" || last == "toad" || last == "viper" || last == "vixen" || last == "vole" || last == "warbler" || last == "wasp" || last == "wolf" || last == "wren")) || 

		// Animals barred from suffixes relating to voice
		((first == "adder" || first == "ant" || first == "bat" || first == "beetle" || first == "bleak" || first == "bream" || first == "carp" || first == "eel" || first == "ferret" || first == "fish" || first == "flutter" || first == "frog" || first == "gill" || first == "gudgeon" || first == "hare" || first == "jackdaw" || first == "lamprey" || first == "minnow" || first == "mole" || first == "moose" || first == "mouse" || first == "newt" || first == "otter" || first == "perch" || first == "pike" || first == "rabbit" || first == "raccoon" || first == "rat" || first == "roach" || first == "salamander" || first == "salmon" || first == "shrew" || first == "skink" || first == "skunk" || first == "slug" || first == "snail" || first == "squirrel" || first == "stick" || first == "tench" || first == "trout" || first == "viper" || first == "vole" || first == "wasp" || first == "weasel" || first == "wing" || first == "winged" || first == "worm") && (last == "bark" || last == "call" || last == "caller" || last == "chirp" || last == "cry" || last == "howl" || last == "roar" || last == "shriek" || last == "wail")) || 

		// Animals barred from -feather and -flight and -swoop and -wing suffixes
		((first == "ant" || first == "badger" || first == "bear" || first == "bee" || first == "beetle" || first == "bleak" || first == "boar" || first == "bream" || first == "buck" || first == "carp" || first == "cheetah" || first == "comma" || first == "coyote" || first == "deer" || first == "doe" || first == "dog" || first == "eel" || first == "elk" || first == "fawn" || first == "ferret" || first == "fish" || first == "fox" || first == "frog" || first == "gill" || first == "gudgeon" || first == "hare" || first == "herring" || first == "horse" || first == "hound" || first == "jackdaw" || first == "jaguar" || first == "lamprey" || first == "leopard" || first == "lion" || first == "lizard" || first == "lynx" || first == "maggot" || first == "midge" || first == "mink" || first == "minnow" || first == "mole" || first == "moose" || first == "mouse" || first == "muntjac" || first == "newt" || first == "otter" || first == "panther" || first == "perch" || first == "pike" || first == "possum" || first == "puma" || first == "rabbit" || first == "raccoon" || first == "rat" || first == "roach" || first == "salamander" || first == "salmon" || first == "serpent" || first == "sheep" || first == "shrew" || first == "skink" || first == "skunk" || first == "slug" || first == "snail" || first == "spider" || first == "squirrel" || first == "stag" || first == "stoat" || first == "tench" || first == "tiger" || first == "toad" || first == "trout" || first == "turtle" || first == "viper" || first == "vixen" || first == "vole" || first == "weasel" || first == "wing" || first == "winged" || first == "wolf" || first == "worm") && (last == "feather" || last == "flight" || last == "swoop" || last == "wing")) || 

		// Animals barred from -scale and -fin suffixes
		((first == "ant" || first == "argus" || first == "avocet" || first == "badger" || first == "barbel" || first == "bat" || first == "bear" || first == "beaver" || first == "bee" || first == "beetle" || first == "bird" || first == "bittern" || first == "boar" || first == "brambling" || first == "buck" || first == "bug" || first == "bumble" || first == "buzzard" || first == "cardinal" || first == "cheetah" || first == "comma" || first == "condor" || first == "coot" || first == "coyote" || first == "crane" || first == "cricket" || first == "crow" || first == "cuckoo" || first == "deer" || first == "doe" || first == "dog" || first == "dove" || first == "duck" || first == "dunlin" || first == "dunnock" || first == "eagle" || first == "egret" || first == "elk" || first == "falcon" || first == "fawn" || first == "ferret" || first == "fly" || first == "fox" || first == "gadwall" || first == "gannet" || first == "godwit" || first == "goose" || first == "grebe" || first == "grouse" || first == "gudgeon" || first == "gull" || first == "hare" || first == "harrier" || first == "hawk" || first == "heron" || first == "herring" || first == "hoopoe" || first == "hornet" || first == "horse" || first == "hound" || first == "jackdaw" || first == "jaguar" || first == "jay" || first == "kestrel" || first == "kite" || first == "lark" || first == "leopard" || first == "lion" || first == "loon" || first == "lynx" || first == "maggot" || first == "magpie" || first == "mallard" || first == "marten" || first == "martin" || first == "mink" || first == "mole" || first == "moose" || first == "moth" || first == "mouse" || first == "muntjac" || first == "nightingale" || first == "osprey" || first == "otter" || first == "owl" || first == "quail" || first == "panther" || first == "pelican" || first == "peregrine" || first == "petrel" || first == "pheasant" || first == "pigeon" || first == "pipit" || first == "plover" || first == "possum" || first == "puma" || first == "quail" || first == "rabbit" || first == "raccoon" || first == "rat" || first == "raven" || first == "roach" || first == "robin" || first == "rook" || first == "sheep" || first == "shrew" || first == "shrike" || first == "skink" || first == "skipper" || first == "skunk" || first == "sparrow" || first == "spider" || first == "squirrel" || first == "stag" || first == "starling" || first == "stoat" || first == "stork" || first == "swallow" || first == "swan" || first == "tern" || first == "thrush" || first == "tiger" || first == "turtle" || first == "vixen" || first == "vole" || first == "vulture" || first == "warbler" || first == "wasp" || first == "weasel" || first == "whimbrel" || first == "whinchat" || first == "wigeon" || first == "wing" || first == "winged" || first == "wolf" || first == "worm" || first == "wren") && (last == "scale" || last == "fin")) ||
		 
		// Animals barred from -runner and -step and -trot and -walker suffixes
		((first == "ant" || first == "argus" || first == "avocet" || first == "barbel" || first == "bat" || first == "bee" || first == "beetle" || first == "bird" || first == "bittern" || first == "bleak" || first == "brambling" || first == "bug" || first == "bumble" || first == "buzzard" || first == "cardinal" || first == "comma" || first == "condor" || first == "coot" || first == "crane" || first == "cricket" || first == "crow" || first == "cuckoo" || first == "dove" || first == "duck" || first == "dunlin" || first == "dunnock" || first == "eagle" || first == "egret" || first == "falcon" || first == "fly" || first == "gadwall" || first == "gannet" || first == "goose" || first == "grackle" || first == "grebe" || first == "grouse" || first == "gudgeon" || first == "gull" || first == "harrier" || first == "hawk" || first == "heron" || first == "herring" || first == "hoopoe" || first == "hornet" || first == "jay" || first == "kestrel" || first == "kite" || first == "lark" || first == "loon" || first == "maggot" || first == "magpie" || first == "mallard" || first == "marten" || first == "martin" || first == "moth" || first == "muntjac" || first == "nightingale" || first == "osprey" || first == "otter" || first == "owl" || first == "quail" || first == "pelican" || first == "peregrine" || first == "petrel" || first == "pheasant" || first == "pipit" || first == "plover" || first == "quail" || first == "raven" || first == "roach" || first == "robin" || first == "rook" || first == "shrike" || first == "skipper" || first == "sparrow" || first == "spider" || first == "starling" || first == "stoat" || first == "stork" || first == "swallow" || first == "swan" || first == "tern" || first == "thrush" || first == "vulture" || first == "warbler" || first == "wasp" || first == "weasel" || first == "whimbrel" || first == "whinchat" || first == "wigeon" || first == "wing" || first == "winged" || first == "worm" || first == "wren") && (last == "runner" || last == "step" || last == "trot" || last == "walk" || last == "walker"))
		 
		) {
			test = 0;
			return test;
		}
		else {
			test = 1;
			return test;
		}
	},
};
