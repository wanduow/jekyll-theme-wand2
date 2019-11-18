# theme-jorsin

A theme made for the wand website.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "proto-theme3"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: proto-theme3
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install proto-theme3

## Usage

To refer to themes css, open _sass/css/style.scss and add
```scss
---
---

@import "main";
```

To use a layout from theme refer to it in metadata under "layout tag"
```md
---
layout: PREMADE-LAYOUT-NAME`
---
```

To add a link to nav bar, modify _data/navigation.yml with the format

```yml
- name:(eg People)
  link:(eg /people.html)
```

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

