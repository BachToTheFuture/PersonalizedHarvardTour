
# Script ot extract location tags from embed URLs
start_token = '!4m5!'
end_token = '!5e0!'
def extract_map_ids(url):
    split = url.replace(end_token, start_token).split(start_token)
    return split[1], split[2]
    
fr, to = extract_map_ids("""
<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2947.5196777009705!2d-71.11938308820916!3d42.37407468409583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x89e3774305f6eb89%3A0xa46fba92be1e842b!2sJohn%20Harvard%20Statue%2C%20Harvard%20Yard%2C%20Cambridge%2C%20MA!3m2!1d42.3744665!2d-71.1172096!4m5!1s0x89e377436d7628e5%3A0xd094748bb4eaa34a!2sThe%20Harry%20Elkins%20Widener%E2%80%A6!3m2!1d42.373446699999995!2d-71.1165055!5e0!3m2!1sen!2sus!4v1695241932237!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
""")

print(fr)
print()
print(to)